// ===================================
// LANDING PAGE JS - Flore Ibagué
// Catálogo con prioridad por categoría + Conversiones Google Ads + Día de las Madres
// ===================================

// --- DATOS DEL CATÁLOGO ---
// Los productos vienen de js/productos.js (la misma lista del catálogo).
// Como las landings están dentro de /landing/, se antepone "../" a las rutas de las fotos.
products.forEach(p => {
    if (p.image && !p.image.startsWith('../') && !/^https?:/.test(p.image)) p.image = '../' + p.image;
    if (Array.isArray(p.images)) p.images = p.images.map(img => (img.startsWith('../') || /^https?:/.test(img)) ? img : '../' + img);
});

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'todos';
let currentSearchQuery = '';
let LANDING_PRIORITY_TAG = '';

// --- GENERAR CÓDIGO DE PRODUCTO ---
function isArtificialTulip(p) {
    return p.artificialTulips === true || /tulip[aá]n(es)?\s+etern/i.test(p.description || '');
}

function getProductCode(id) {
    return 'COD-' + String(id).padStart(3, '0');
}

// --- QUITAR TILDES para búsqueda ---
function removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// --- FORMATEO DE PRECIO ---
function formatCOP(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(price);
}

// --- ORDENAR PRODUCTOS: primero los de la categoría de la landing ---
function getSortedProducts(priorityTag) {
    const priority = [];
    const rest = [];
    products.filter(p => !p.hidden && !p.categories.includes('dia-padres')).forEach(p => {
        if (p.categories && p.categories.includes(priorityTag)) {
            priority.push(p);
        } else {
            rest.push(p);
        }
    });
    priority.sort((a, b) => a.price - b.price);
    rest.sort((a, b) => a.price - b.price);
    return [...priority, ...rest];
}

// ===== ORDEN DEL CATÁLOGO GENERAL =====
// Cada fila: 1) económico  2) precio medio  3) el más costoso.
// Los de menos de $60.000 y los de flores eternas/satín van al fondo del catálogo.
const PRECIO_MINIMO_DESTACADO = 60000;

function esFlorEterna(p) {
    const texto = (p.name || '') + ' ' + (p.description || '');
    return (p.categories || []).includes('rosas-eternas') ||
        /\bsat[ií]n\b/i.test(texto) ||
        /(rosas?|flores?|tulipan(es)?|tulipán|girasol(es)?|hortensias?|lirios?|osito)\s+(eternas?|eternos?)/i.test(texto);
}

function esParaElFondo(p) {
    return p.price < PRECIO_MINIMO_DESTACADO || esFlorEterna(p);
}

// Reparte un grupo para que no queden juntos muchos productos de la misma categoría
function variarCategorias(group) {
    const order = ['rosas', 'bouquets', 'cajas', 'canastas', 'girasoles', 'gerberas', 'lirios', 'pompones', 'tulipanes', 'coreano', 'novia', 'chocolates', 'premium'];
    const groups = {};
    group.forEach(p => {
        const cat = order.find(c => p.categories.includes(c)) || 'otros';
        (groups[cat] = groups[cat] || []).push(p);
    });
    const positioned = [];
    Object.keys(groups).forEach((cat, catIdx) => {
        const g = groups[cat].sort((a, b) => a.price - b.price);
        g.forEach((p, i) => positioned.push({ p, pos: (i + 0.5) / g.length, catIdx }));
    });
    positioned.sort((a, b) => a.pos - b.pos || a.catIdx - b.catIdx);
    return positioned.map(x => x.p);
}

// Devuelve la lista ordenada: filas económico / medio / costoso, luego fúnebres, luego los del fondo
function ordenarCatalogoGeneral(list, priorityTag) {
    const funebre = list.filter(p => p.categories.includes('funebre'));
    const resto = list.filter(p => !p.categories.includes('funebre'));
    const alFondo = resto.filter(esParaElFondo);
    const principales = resto.filter(p => !esParaElFondo(p)).sort((a, b) => a.price - b.price);

    const tercio = Math.ceil(principales.length / 3);
    const tramos = [
        principales.slice(0, tercio),            // económicos
        principales.slice(tercio, tercio * 2),   // precio medio
        principales.slice(tercio * 2)            // más costosos
    ].map(g => {
        if (!priorityTag) return variarCategorias(g);
        const prio = g.filter(p => p.categories.includes(priorityTag));
        const otros = g.filter(p => !p.categories.includes(priorityTag));
        return [...variarCategorias(prio), ...variarCategorias(otros)];
    });

    const filas = [];
    const maxLen = Math.max(...tramos.map(g => g.length), 0);
    for (let i = 0; i < maxLen; i++) {
        tramos.forEach(g => { if (i < g.length) filas.push(g[i]); });
    }

    const fondo = [...alFondo].sort((a, b) => b.price - a.price);
    return [...filas, ...funebre, ...fondo];
}

// --- ACTUALIZAR CONTADOR DE RESULTADOS ---
function updateResultsCount(count) {
    const counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;
    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.style.display = count === 0 ? 'block' : 'none';
}

// --- FUNCIÓN PARA RENDERIZAR PRODUCTOS ---
function renderProducts(filters = [], limit = null) {
    const container = document.querySelector('.products-container');
    if (!container) return;

    // Excluir productos ocultos
    let productsToDisplay = products.filter(p => !p.hidden && !p.categories.includes('dia-padres'));

    if (LANDING_PRIORITY_TAG) {
        productsToDisplay = getSortedProducts(LANDING_PRIORITY_TAG);
    }

    // Filtrar por categoría
    if (filters.length > 0 && filters[0] !== 'todos') {
        productsToDisplay = productsToDisplay.filter(p =>
            filters.some(f => p.categories && p.categories.includes(f))
        );
    }

    // Filtrar por búsqueda (sin tildes, incluye código de producto, multi-palabra)
    if (currentSearchQuery) {
        const queryNorm = removeAccents(currentSearchQuery.trim());
        const queryWords = queryNorm.split(/\s+/);
        productsToDisplay = productsToDisplay.filter(p => {
            const text = removeAccents(p.name + ' ' + p.description + ' ' + (p.categories ? p.categories.join(' ') : '') + ' ' + getProductCode(p.id));
            return queryWords.every(word => text.includes(word));
        });
    }

    if (limit) {
        productsToDisplay = productsToDisplay.slice(0, limit);
    }

    updateResultsCount(productsToDisplay.length);

    // Vista general (sin filtro ni búsqueda): filas económico / medio / costoso,
    // y al fondo los de menos de $60.000 y los de flores eternas
    if ((!filters.length || filters[0] === 'todos') && !currentSearchQuery) {
        productsToDisplay = ordenarCatalogoGeneral(productsToDisplay, LANDING_PRIORITY_TAG);
    }

    container.innerHTML = '';
    productsToDisplay.forEach(product => {
        const escapedName = product.name.replace(/'/g, "\\'");
        const code = getProductCode(product.id);
        const imageList = product.images && product.images.length ? product.images : [product.image];
        const firstImage = imageList[0];
        const hasCarousel = imageList.length > 1;
        const carouselId = `landing-carousel-${product.id}`;
        const slidesHtml = imageList.map((img, idx) => `<img src="${img}" alt="${product.name} - vista ${idx+1}" class="landing-carousel-slide${idx===0?' active':''}" loading="lazy">`).join('');
        const dotsHtml = hasCarousel ? `
            <div class="landing-carousel-dots">
                ${imageList.map((_, idx) => `<span class="landing-carousel-dot${idx===0?' active':''}" onclick="event.stopPropagation(); landingGoToSlide('${carouselId}', ${idx})"></span>`).join('')}
            </div>
            <button class="landing-carousel-arrow landing-carousel-prev" onclick="event.stopPropagation(); landingPrevSlide('${carouselId}')" aria-label="Anterior">&#8249;</button>
            <button class="landing-carousel-arrow landing-carousel-next" onclick="event.stopPropagation(); landingNextSlide('${carouselId}')" aria-label="Siguiente">&#8250;</button>
            <span class="landing-carousel-badge">${imageList.length} variaciones</span>
        ` : '';
        const productHTML = `
            <div class="product-item">
                <div class="product-image${hasCarousel?' has-carousel':''}" id="${carouselId}" style="position:relative;">
                    <span class="product-code-badge" style="position:absolute;top:0.7rem;left:0.7rem;background:rgba(0,0,0,0.65);color:#fff;padding:0.3rem 0.7rem;border-radius:6px;font-size:0.75rem;font-weight:700;letter-spacing:0.5px;z-index:2;font-family:'Poppins',sans-serif;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);">${code}</span>
                    ${slidesHtml}
                    ${dotsHtml}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    ${isArtificialTulip(product) ? `<div class="product-notice product-notice-artificial"><span class="product-notice-icon">\u{1F337}</span><span><strong>Tulipanes artificiales:</strong> los tulipanes de este arreglo son eternos (artificiales), no son flores naturales.</span></div>` : ''}
                    ${product.categories.includes('funebre') ? `<div class="product-notice"><span class="product-notice-icon">\u{2139}\u{FE0F}</span>Este arreglo se elabora con la flor disponible del día, logrando un diseño lo más similar posible a la imagen.</div>` : `<div class="product-notice"><span class="product-notice-icon">\u{2139}\u{FE0F}</span>Las flores, colores y detalles decorativos pueden variar según la disponibilidad del día. Conservamos el estilo, el tamaño y el valor del arreglo.</div>`}
                    ${product.gift ? `<div class="product-gift"><span class="product-gift-icon">\u{1F381}</span>${product.gift}</div>` : ''}
                    <div class="product-footer">
                        <span class="price">${formatCOP(product.price)}</span>
                        <button class="btn-order" onclick="orderWA('${code} - ${escapedName}', '${product.price}', '${firstImage.replace(/'/g, "\\'")}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

// ========== CARRUSEL LANDING ==========
function landingGoToSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    const slides = carousel.querySelectorAll('.landing-carousel-slide');
    const dots = carousel.querySelectorAll('.landing-carousel-dot');
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    if (slides[index]) slides[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
}
function landingNextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    const slides = carousel.querySelectorAll('.landing-carousel-slide');
    const current = carousel.querySelector('.landing-carousel-slide.active');
    const idx = Array.from(slides).indexOf(current);
    landingGoToSlide(carouselId, (idx + 1) % slides.length);
}
function landingPrevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;
    const slides = carousel.querySelectorAll('.landing-carousel-slide');
    const current = carousel.querySelector('.landing-carousel-slide.active');
    const idx = Array.from(slides).indexOf(current);
    landingGoToSlide(carouselId, (idx - 1 + slides.length) % slides.length);
}
setInterval(() => {
    document.querySelectorAll('.product-image.has-carousel').forEach(c => {
        if (c.id) landingNextSlide(c.id);
    });
}, 3500);

// --- FUNCIONES DE WHATSAPP ---
function contactWA() {
    const url = 'https://wa.me/573151100609?text=Hola,%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20flores.%20%C2%BFPodr%C3%ADan%20ayudarme%3F';
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17976527804/eNHaCKmS7v4bELyX8PtC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

function orderWA(productName, price, image) {
    let message = `Hola, me interesa ${productName} (${formatCOP(parseFloat(price))}). ¿Podrías darme más información?`;
    if (image) {
        const photoUrl = 'https://floristeriaibague.dondeseria.com/' + String(image).replace('../', '');
        message = `Hola, me interesa el producto: ${productName} - ${formatCOP(parseFloat(price))}\nFoto: ${photoUrl}`;
    }
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/573151100609?text=${encodedMessage}`;
    try {
        gtag('event', 'conversion', {
            'send_to': 'AW-17976527804/eNHaCKmS7v4bELyX8PtC',
            'value': 1.0,
            'currency': 'COP',
            'event_callback': function () {
                window.open(url, '_blank');
            }
        });
    } catch (e) {
        window.open(url, '_blank');
    }
}

// --- FILTRADO DE PRODUCTOS ---
function filterProducts(tag) {
    currentLandingFilter = tag;
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === tag) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (tag === 'todos') {
        renderProducts();
    } else {
        renderProducts([tag]);
    }
}

// --- INICIALIZAR CATÁLOGO COMPLETO ---
function initCatalog() {
    window._catalogInitialized = true;
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterProducts(this.getAttribute('data-filter'));
        });
    });

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearchQuery = this.value.trim();
            if (searchClear) searchClear.style.display = currentSearchQuery ? 'block' : 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            searchInput.value = '';
            currentSearchQuery = '';
            this.style.display = 'none';
            if (currentLandingFilter === 'todos') {
                renderProducts();
            } else {
                renderProducts([currentLandingFilter]);
            }
        });
    }

    // Render inicial con todos los productos
    renderProducts();

    // Soporte #dia-madre en URL
    checkHashMadres();
}

// Animación de corazones al activar filtro Día de las Madres
function spawnHearts() {
    let container = document.querySelector('.hearts-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'hearts-container';
        document.body.appendChild(container);
    }
    const hearts = ['♥', '❤', '♡', '❣'];
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
        heart.style.color = ['#e91e63', '#ec407a', '#f06292', '#ff4081', '#ff80ab'][Math.floor(Math.random() * 5)];
        container.appendChild(heart);
        setTimeout(function() { heart.remove(); }, 5000);
    }
}

// Soporte #dia-madre en URL
// SEGURO: Auto-filtro por hash desactivado para que SIEMPRE muestre todos los productos al entrar
function checkHashMadres() {
    // Comportamiento original deshabilitado:
    // if (window.location.hash === '#dia-madre' || window.location.hash === '#dia-madres') {
    //     filterProducts('dia-madres');
    //     spawnHearts();
    //     setTimeout(function() {
    //         var section = document.getElementById('productos');
    //         if (section) section.scrollIntoView({ behavior: 'smooth' });
    //     }, 300);
    // }
    // Agregar lanzamiento de corazones al hacer clic en botón Madres (mantiene el efecto al hacer clic)
    var madresBtn = document.querySelector('.filter-btn-madres');
    if (madresBtn) {
        madresBtn.addEventListener('click', function() {
            spawnHearts();
        });
    }
}

// Inicializar automáticamente si no se define LANDING_PRIORITY_TAG manualmente
document.addEventListener('DOMContentLoaded', function() {
    // Solo inicializar si no hay un script en la página que lo haga
    setTimeout(function() {
        if (!window._catalogInitialized) {
            initCatalog();
        }
    }, 50);
});
