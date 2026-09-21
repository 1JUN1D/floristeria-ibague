/* =====================================================================
   FLORES AMARILLAS - 21 DE SEPTIEMBRE
   Flyer flotante (autocierre 5 s) + mini sección destacada con contador.
   Se usa en catalogo.html y en todas las páginas de /landing.
   Requiere que exista el arreglo global `products`.
   ---------------------------------------------------------------------
   Ventana de exhibición: del 1 al 21 de septiembre (inclusive) de cada año.
   Fuera de esas fechas no se muestra nada (a menos que
   window.FLORES_AMARILLAS_FORCE = true).
   ===================================================================== */
(function () {
    'use strict';

    var CONFIG = {
        startMonth: 8,   // septiembre (0 = enero)
        startDay: 1,
        targetMonth: 8,
        targetDay: 21,
        flyerSeconds: 5,
        // Productos del flyer (máx. 4) y de la mini sección, por nombre
        flyerNames: ['Treinta Soles con Mariposas', 'Reina Dorada 50 Rosas', 'Luna Dorada 20 Rosas', 'Campo de Lirios Amarillos'],
        sectionNames: [
            'Treinta Soles con Mariposas', 'Amanecer Amarillo y Rosa', 'Reina Dorada 50 Rosas',
            'Dulzura Amarilla', 'Luna Dorada 20 Rosas', 'Rayos de Sol en Blanco',
            'Lirio de Sol', 'Campo de Lirios Amarillos'
        ],
        whatsapp: '573151100609',
        siteUrl: 'https://floristeriaibague.dondeseria.com/'
    };

    function pad(n) { return String(n).padStart(2, '0'); }

    function money(n) { return '$' + Number(n).toLocaleString('es-CO'); }

    function escapeHtml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function findByNames(names) {
        if (typeof products === 'undefined') return [];
        var out = [];
        names.forEach(function (n) {
            var p = products.find(function (x) { return x.name === n; });
            if (p) out.push(p);
        });
        return out;
    }

    function firstImage(p) {
        return (p.images && p.images.length) ? p.images[0] : p.image;
    }

    function orderLink(p) {
        var code = 'COD-' + String(p.id).padStart(3, '0');
        var photo = CONFIG.siteUrl + String(firstImage(p)).replace('../', '');
        var msg = 'Hola, me interesa el producto: ' + code + ' - ' + p.name + ' - ' + money(p.price) + '\nFoto: ' + photo;
        return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
    }

    function activeWindow() {
        if (window.FLORES_AMARILLAS_FORCE) return true;
        var now = new Date();
        var y = now.getFullYear();
        var start = new Date(y, CONFIG.startMonth, CONFIG.startDay, 0, 0, 0);
        var end = new Date(y, CONFIG.targetMonth, CONFIG.targetDay, 23, 59, 59);
        return now >= start && now <= end;
    }

    function targetDate() {
        var y = new Date().getFullYear();
        return new Date(y, CONFIG.targetMonth, CONFIG.targetDay, 0, 0, 0);
    }

    function clickAmarillasFilter() {
        var btn = document.querySelector('.filter-btn-amarillas');
        if (btn) {
            btn.click();
            return;
        }
        if (typeof filterProducts === 'function') filterProducts('flores-amarillas');
        else if (typeof renderProducts === 'function') renderProducts('flores-amarillas');
    }

    /* ---------------------------------------------------------------
       FLYER FLOTANTE
       --------------------------------------------------------------- */
    function buildFlyer() {
        var items = findByNames(CONFIG.flyerNames).slice(0, 4);
        var photos = items.map(function (p) {
            return '<figure class="amarillas-flyer-photo">' +
                '<img src="' + escapeHtml(firstImage(p)) + '" alt="' + escapeHtml(p.name) + '" loading="eager">' +
                '<figcaption><span>' + escapeHtml(p.name) + '</span><strong>' + money(p.price) + '</strong></figcaption>' +
                '</figure>';
        }).join('');

        var overlay = document.createElement('div');
        overlay.className = 'amarillas-flyer-overlay';
        overlay.id = 'amarillas-flyer';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-label', 'Flores amarillas 21 de septiembre');
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML =
            '<div class="amarillas-flyer">' +
                '<button class="amarillas-flyer-close" id="amarillas-flyer-close" aria-label="Cerrar">&times;</button>' +
                '<div class="amarillas-flyer-badge">&#10024; 21 de septiembre</div>' +
                '<h3 class="amarillas-flyer-title"><span>&#127803;</span> Flores Amarillas <span>&#127803;</span></h3>' +
                '<p class="amarillas-flyer-text">Regala alegr&iacute;a, buena energ&iacute;a y un nuevo comienzo. Girasoles, pompones y m&aacute;s con entrega en Ibagu&eacute;.</p>' +
                '<div class="amarillas-flyer-photos">' + photos + '</div>' +
                '<button class="amarillas-flyer-cta" id="amarillas-flyer-cta">Ver flores amarillas &#127803;</button>' +
                '<div class="amarillas-flyer-bar"><span></span></div>' +
            '</div>';
        document.body.appendChild(overlay);

        var timer = null;
        function closeFlyer() {
            if (timer) { clearTimeout(timer); timer = null; }
            overlay.classList.remove('visible');
            overlay.setAttribute('aria-hidden', 'true');
            setTimeout(function () { overlay.style.display = 'none'; }, 500);
        }
        function openFlyer() {
            overlay.classList.add('visible');
            overlay.setAttribute('aria-hidden', 'false');
            timer = setTimeout(closeFlyer, CONFIG.flyerSeconds * 1000);
        }

        overlay.querySelector('#amarillas-flyer-close').addEventListener('click', closeFlyer);
        overlay.addEventListener('click', function (e) { if (e.target === overlay) closeFlyer(); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeFlyer(); });
        overlay.querySelector('#amarillas-flyer-cta').addEventListener('click', function () {
            closeFlyer();
            clickAmarillasFilter();
        });

        setTimeout(openFlyer, 700);
    }

    /* ---------------------------------------------------------------
       MINI SECCIÓN DESTACADA + CONTADOR
       --------------------------------------------------------------- */
    function buildSection() {
        var section = document.getElementById('amarillas-special');
        if (!section) {
            section = document.createElement('section');
            section.id = 'amarillas-special';
            var anchor = document.querySelector('.catalog-filters');
            if (!anchor) return;
            anchor.parentNode.insertBefore(section, anchor);
        }
        section.className = 'amarillas-special';

        var items = findByNames(CONFIG.sectionNames);
        var useOrderWA = (typeof orderWA === 'function');
        var cards = items.map(function (p, idx) {
            var btn = useOrderWA
                ? '<button class="amarillas-mini-btn" type="button" data-idx="' + idx + '">Pedir por WhatsApp</button>'
                : '<a class="amarillas-mini-btn" href="' + orderLink(p) + '" target="_blank" rel="noopener">Pedir por WhatsApp</a>';
            return '<div class="amarillas-mini-card">' +
                '<span class="amarillas-mini-ribbon">21 sept</span>' +
                '<img src="' + escapeHtml(firstImage(p)) + '" alt="' + escapeHtml(p.name) + '" loading="lazy">' +
                '<div class="amarillas-mini-info">' +
                    '<p class="amarillas-mini-name" title="' + escapeHtml(p.name) + '">' + escapeHtml(p.name) + '</p>' +
                    '<div class="amarillas-mini-price">' + money(p.price) + '</div>' +
                    btn +
                '</div>' +
            '</div>';
        }).join('');

        section.innerHTML =
            '<div class="container">' +
                '<div class="amarillas-special-head">' +
                    '<div class="amarillas-special-copy">' +
                        '<span class="amarillas-special-badge">&#10024; Especial 21 de septiembre</span>' +
                        '<h2 class="amarillas-special-title"><span>&#127803;</span> Flores Amarillas</h2>' +
                        '<p class="amarillas-special-sub">La tradici&oacute;n de regalar flores amarillas el 21 de septiembre: alegr&iacute;a, buena suerte y amor que florece. Pide con anticipaci&oacute;n y aseg&uacute;ralas.</p>' +
                    '</div>' +
                    '<div class="amarillas-countdown" id="amarillas-countdown" aria-live="polite">' +
                        '<span class="amarillas-countdown-label">Faltan</span>' +
                        '<div class="amarillas-countdown-box"><strong data-unit="d">00</strong><small>d&iacute;as</small></div>' +
                        '<div class="amarillas-countdown-box"><strong data-unit="h">00</strong><small>horas</small></div>' +
                        '<div class="amarillas-countdown-box"><strong data-unit="m">00</strong><small>min</small></div>' +
                        '<div class="amarillas-countdown-box"><strong data-unit="s">00</strong><small>seg</small></div>' +
                    '</div>' +
                '</div>' +
                '<div class="amarillas-special-products">' + cards + '</div>' +
                '<div class="amarillas-special-foot">' +
                    '<button class="amarillas-special-all" type="button" id="amarillas-special-all">Ver todas las flores amarillas &#127803;</button>' +
                '</div>' +
            '</div>';

        if (useOrderWA) {
            section.querySelectorAll('.amarillas-mini-btn[data-idx]').forEach(function (b) {
                b.addEventListener('click', function () {
                    var p = items[parseInt(b.getAttribute('data-idx'), 10)];
                    if (!p) return;
                    var code = 'COD-' + String(p.id).padStart(3, '0');
                    orderWA(code + ' - ' + p.name, String(p.price), firstImage(p));
                });
            });
        }

        section.querySelector('#amarillas-special-all').addEventListener('click', function () {
            clickAmarillasFilter();
            var target = document.querySelector('.catalog-filters') || section;
            setTimeout(function () { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50);
        });

        startCountdown(section.querySelector('#amarillas-countdown'));
    }

    function startCountdown(el) {
        if (!el) return;
        var target = targetDate();
        var d = el.querySelector('[data-unit="d"]');
        var h = el.querySelector('[data-unit="h"]');
        var m = el.querySelector('[data-unit="m"]');
        var s = el.querySelector('[data-unit="s"]');

        function tick() {
            var diff = target - new Date();
            if (diff <= 0) {
                el.classList.add('today');
                el.innerHTML = '<span class="amarillas-countdown-today">&#127803; &iexcl;Hoy es el d&iacute;a de las flores amarillas! Entregamos hoy mismo en Ibagu&eacute;.</span>';
                clearInterval(iv);
                return;
            }
            var sec = Math.floor(diff / 1000);
            d.textContent = pad(Math.floor(sec / 86400));
            h.textContent = pad(Math.floor((sec % 86400) / 3600));
            m.textContent = pad(Math.floor((sec % 3600) / 60));
            s.textContent = pad(sec % 60);
        }
        tick();
        var iv = setInterval(tick, 1000);
    }

    /* ---------------------------------------------------------------
       INIT
       --------------------------------------------------------------- */
    function init() {
        if (window._floresAmarillasInit) return;
        window._floresAmarillasInit = true;
        if (!activeWindow()) {
            var placeholder = document.getElementById('amarillas-special');
            if (placeholder) placeholder.style.display = 'none';
            return;
        }
        buildSection();
        buildFlyer();
    }

    window.FloresAmarillas = { init: init, config: CONFIG };
})();
