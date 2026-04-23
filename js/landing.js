// ===================================
// LANDING PAGE JS - Flore Ibagué
// Catálogo con prioridad por categoría + Conversiones Google Ads
// ===================================

// --- DATOS DEL CATÁLOGO COMPLETO ---
const products = [
            {
                id: 1,
                name: "Para Ti con Cariño",
                price: 18750,
                image: "../assets/foto81.webp",
                description: "Mini bouquet de margaritas amarillas en cartulina negra con mensaje 'Para Ti' escrito a mano y lazo dorado. El detalle más económico y tierno. Pequeño en tamaño pero grande en significado. Perfecto para sorpresas rápidas y emotivas.",
                categories: ["bouquets", "precio-bajo"]
            },
            {
                id: 2,
                name: "Rosa Eterna Mini",
                price: 18750,
                image: "../assets/foto84.webp",
                description: "Mini bouquet con 1 rosa eterna amarilla dorada envuelta en papel blanco con lazo amarillo y texto personalizado. El detalle más económico y duradero. Perfecto para expresar cariño con un regalo que nunca se marchita.",
                categories: ["rosas-eternas", "precio-bajo"]
            },
            {
                id: 3,
                name: "Te Quiero Solar",
                price: 22500,
                image: "../assets/foto60.webp",
                description: "Mini bouquet con 1 girasol envuelto en cartulina negra con mensaje 'Te Quiero' y lazo amarillo. El detalle más económico y tierno para expresar amor. Incluye tarjeta personalizada. Pequeño en tamaño, grande en significado.",
                categories: ["girasoles", "precio-bajo"]
            },
            {
                id: 4,
                name: "Girasol Poético",
                price: 31250,
                image: "../assets/foto83.webp",
                description: "1 girasol presentado en cartulina negra con texto personalizado escrito a mano y lazo dorado. Detalle artístico y sentimental que combina la belleza del girasol con palabras desde el corazón. Regalo original y emotivo.",
                categories: ["girasoles", "precio-bajo"]
            },
            {
                id: 5,
                name: "Poema Amarillo",
                price: 43750,
                image: "../assets/foto69.webp",
                description: "Bouquet de pompones amarillos envuelto en cartulina negra con texto poético escrito a mano y lazo amarillo. Detalle artístico y sentimental que combina flores con palabras de amor. Regalo original y económico cargado de significado.",
                categories: ["pompones", "precio-bajo"]
            },
            {
                id: 6,
                name: "Frescura Amarilla",
                price: 47500,
                image: "../assets/foto78.webp",
                description: "Bouquet sencillo y fresco de margaritas amarillas con follaje verde envuelto en papel durazno. Detalle económico y alegre que transmite optimismo y buenos deseos. Perfecto para gestos espontáneos llenos de color y vitalidad.",
                categories: ["bouquets", "precio-bajo"]
            },
            {
                id: 7,
                name: "Sol Amarillo",
                price: 52500,
                image: "../assets/foto53.webp",
                description: "Bouquet alegre de pompones amarillos abundantes envueltos en papel turquesa. Incluye tarjeta personalizada. Detalle fresco, vibrante y económico que transmite energía positiva y alegría pura. Perfecto para iluminar cualquier momento.",
                categories: ["pompones", "precio-bajo"]
            },
            {
                id: 8,
                name: "Dulce Sorpresa Solar",
                price: 56250,
                image: "../assets/foto74.webp",
                description: "Bouquet divertido con girasoles, margaritas de color fucsia, gomitas y quipitos envuelto en cartulina negra. Incluye tarjeta personalizada. Combinación creativa de flores y dulces perfecta para sorprender con alegría y sabor.",
                categories: ["girasoles", "chocolates", "precio-bajo"]
            },
            {
                id: 9,
                name: "Elegancia Soleada",
                price: 68750,
                image: "../assets/foto27.webp",
                description: "Bouquet encantador con 3 girasoles, nubes (gypsophila) y follaje verde. Envuelto en papel coreano rosa y blanco con lazo. Detalle sencillo pero luminoso que transmite alegría y admiración con estilo delicado.",
                categories: ["girasoles", "coreano", "precio-bajo"]
            },
            {
                id: 10,
                name: "Ramillete del Sol",
                price: 68750,
                image: "../assets/foto38.webp",
                description: "Bouquet compacto y colorido con 1 girasol central, rosas rosadas, flores surtidas en tonos vibrantes. Envuelto en papel coreano rosa con lazo. Detalle económico pero lleno de vida y alegría, perfecto para sorpresas espontáneas.",
                categories: ["girasoles", "bouquets", "precio-bajo"]
            },
            {
                id: 11,
                name: "Rosas Eternas Doradas",
                price: 68750,
                image: "../assets/foto65.webp",
                description: "Elegante caja redonda negra con 4 rosas eternas doradas, follaje verde y tarjeta personalizada con mensaje especial. Diseño sofisticado con lazo dorado. Un regalo duradero que simboliza amor eterno e inmortal.",
                categories: ["rosas-eternas", "cajas", "precio-bajo"]
            },
            {
                id: 12,
                name: "Giras en Mi Mente",
                price: 72500,
                image: "../assets/foto20.webp",
                description: "Detalle especial con 1 girasol central rodeado de flores surtidas en tonos rosa y blanco, acompañado de 4 chocolates Ferrero Rocher y tarjeta personalizada. Envuelto en papel coreano rosa. Regalo dulce y encantador.",
                categories: ["girasoles", "chocolates", "precio-bajo"]
            },
            {
                id: 13,
                name: "Trío Nocturno",
                price: 72500,
                image: "../assets/foto73.webp",
                description: "Bouquet elegante con 3 girasoles grandes y follaje verde envuelto en cartulina negra. Incluye tarjeta personalizada. Contraste sofisticado entre el amarillo dorado y el negro que transmite distinción y carácter. Detalle con personalidad.",
                categories: ["girasoles", "precio-bajo"]
            },
            {
                id: 14,
                name: "Corazón Floral con Nutella",
                price: 75000,
                image: "../assets/foto33.webp",
                description: "Bouquet en forma de corazón con 3 girasoles, manzanilla y follaje en papel negro elegante. Incluye Nutella y tarjeta personalizada. Detalle creativo y original que combina flores, dulzura y amor en una presentación única.",
                categories: ["girasoles", "chocolates", "precio-bajo"]
            },
            {
                id: 15,
                name: "Dulce Serenidad",
                price: 81250,
                image: "../assets/foto4.webp",
                description: "Bouquet delicado con gerberas rosadas, claveles suaves y follaje verde natural. Envuelto en elegante papel coreano bicolor rosa y blanco con lazo decorativo. Detalle tierno perfecto para gestos espontáneos llenos de cariño.",
                categories: ["gerberas", "coreano", "precio-bajo"]
            },
            {
                id: 16,
                name: "Tres Veces Te Amo",
                price: 81250,
                image: "../assets/foto21.webp",
                description: "Elegante bouquet con 3 girasoles envueltos en cartulina negra con dulce incluido y lazo amarillo. Presentación moderna y sofisticada que contrasta la calidez del girasol con la elegancia del negro. Detalle con personalidad.",
                categories: ["girasoles", "precio-bajo"]
            },
            {
                id: 17,
                name: "Brillo Natural",
                price: 81250,
                image: "../assets/foto55.webp",
                description: "Bouquet encantador con 3 girasoles, astromelias blancas y clavellinas en papel coreano bicolor blanco y negro. Combinación fresca y luminosa con tarjeta personalizada. Detalle sencillo pero elegante que transmite calidez y admiración.",
                categories: ["girasoles", "coreano", "precio-bajo"]
            },
            {
                id: 18,
                name: "Bouquet Rústico Solar",
                price: 81250,
                image: "../assets/foto66.webp",
                description: "Bouquet con 3 girasoles, eucalipto, manzanilla y decoración natural envuelto en papel kraft con lazo lavanda. Estilo rústico y elegante con tarjeta de la marca. Combinación campestre que transmite calidez y autenticidad.",
                categories: ["girasoles", "bouquets", "precio-bajo"]
            },
            {
                id: 19,
                name: "Girasol Poético con Ferrero",
                price: 81250,
                image: "../assets/foto70.webp",
                description: "Bouquet con girasoles, margaritas y 3 chocolates Ferrero Rocher en cartulina negra con texto poético escrito a mano. Combinación de flores, dulzura y sentimiento. Detalle creativo y romántico que habla directo al corazón.",
                categories: ["girasoles", "chocolates", "precio-bajo"]
            },
            {
                id: 20,
                name: "Girasol con Globo Especial",
                price: 81250,
                image: "../assets/foto82.webp",
                description: "Bouquet con girasol, astromelias blancas y eucalipto envuelto en papel blanco elegante. Incluye globo corazón dorado personalizado. Detalle encantador y festivo ideal para celebraciones especiales y sorpresas con mucho cariño.",
                categories: ["girasoles", "bouquets", "precio-bajo"]
            },
            {
                id: 21,
                name: "Te Quiero Rosado",
                price: 81250,
                image: "../assets/foto85.webp",
                description: "Delicado bouquet de rosas rosadas con abundante gypsophila (nube) envuelto en papel blanco estilo coreano. Un detalle romántico y tierno ideal para expresar amor con suavidad y elegancia. Incluye tarjeta personalizada.",
                categories: ["bouquets", "coreano", "precio-bajo"]
            },
            {
                id: 22,
                name: "Te Amo Rosado",
                price: 81250,
                image: "../assets/foto104.webp",
                description: "Delicado bouquet de rosas rosadas con eucalipto envuelto en papel blanco estilo minimalista. Sencillo, fresco y romántico. El detalle perfecto para decir 'te amo' con elegancia y naturalidad sin necesidad de excesos.",
                categories: ["bouquets", "coreano", "precio-bajo"]
            },
            {
                id: 23,
                name: "Detalle Natural",
                price: 85000,
                image: "../assets/foto15.webp",
                description: "Ramo fresco con 3 gerberas moradas, astromelias y margaritas blancas acompañadas de solidago verde. Envuelto en papel decorativo con tarjeta de la marca. Detalle económico y bonito perfecto para expresar gratitud y cariño sincero.",
                categories: ["gerberas", "bouquets", "precio-bajo"]
            },
            {
                id: 24,
                name: "Rosas Eternas Bouquet",
                price: 85000,
                image: "../assets/foto79.webp",
                description: "Bouquet de 8 rosas eternas amarillas doradas con moñito blanco decorado en papel fotográfico con corazones. Diseño delicado y duradero que simboliza amor imperecedero. Regalo sofisticado que no se marchita y perdura en el tiempo.",
                categories: ["rosas-eternas", "precio-bajo"]
            },
            {
                id: 25,
                name: "Cuatro Soles con Margarita",
                price: 97500,
                image: "../assets/foto57.webp",
                description: "Bouquet delicado con 4 girasoles y margaritas blancas decorado en papel coreano rosa. Combinación fresca y alegre que equilibra la calidez del girasol con la pureza de la margarita. Detalle encantador para cualquier ocasión.",
                categories: ["girasoles", "coreano", "precio-bajo"]
            },
            {
                id: 26,
                name: "Elegancia Oscura",
                price: 97500,
                image: "../assets/foto59.webp",
                description: "Bouquet de 4 girasoles grandes con follaje verde y solidago envuelto en elegante cartulina negra con tarjeta personalizada. Contraste sofisticado entre el amarillo radiante y el negro que transmite distinción y carácter único.",
                categories: ["girasoles", "precio-bajo"]
            },
            {
                id: 27,
                name: "Cuarteto con Ferrero",
                price: 97500,
                image: "../assets/foto63.webp",
                description: "Bouquet festivo con 4 girasoles grandes, 4 chocolates Ferrero Rocher, tarjeta de feliz día y lazo naranja en papel negro. Combinación perfecta entre flores y dulzura para celebrar momentos especiales con estilo y sabor.",
                categories: ["girasoles", "chocolates", "precio-bajo"]
            },
            {
                id: 28,
                name: "Elegancia en Negro",
                price: 97500,
                image: "../assets/foto86.webp",
                description: "Bouquet premium de rosas rojas intensas con follaje de eucalipto, envuelto en papel negro elegante con lazo de cinta negra. Presentación sofisticada y moderna que combina pasión y distinción. El regalo perfecto para impresionar.",
                categories: ["bouquets", "coreano", "precio-bajo"]
            },
            {
                id: 29,
                name: "Encanto Sencillo",
                price: 106250,
                image: "../assets/foto14.webp",
                description: "Bouquet compacto y encantador con gerberas rosadas y clavellinas blancas envueltas en papel coreano rosa. Detalle sencillo pero impactante que demuestra cariño con estilo. Ideal para sorpresas espontáneas y gestos del corazón.",
                categories: ["gerberas", "coreano", "precio-bajo"]
            },
            {
                id: 30,
                name: "Trío Ferrero Solar",
                price: 106250,
                image: "../assets/foto61.webp",
                description: "Bouquet con 3 girasoles coronados con 3 chocolates Ferrero Rocher, decoración de follaje y lazo rojo en papel negro elegante. Combinación irresistible de flores y dulzura con tarjeta personalizada. Regalo con carácter y sabor.",
                categories: ["girasoles", "chocolates", "precio-bajo"]
            },
            {
                id: 31,
                name: "Sorpresa con Globo",
                price: 110000,
                image: "../assets/foto68.webp",
                description: "Arreglo en caja con 3 girasoles, yicsu (gypsophila) y globo personalizado dorado. Presentación festiva con lazo amarillo y tarjeta. Detalle especial ideal para esposas, madres y personas queridas que merecen un regalo con significado.",
                categories: ["girasoles", "cajas", "precio-bajo"]
            },
            {
                id: 32,
                name: "Elegancia en Cartuchos",
                price: 118750,
                image: "../assets/foto45.webp",
                description: "Bouquet nupcial con 10 cartuchos blancos (calas) atados con cinta de encaje y perlas. Diseño minimalista y refinado que transmite sofisticación absoluta. Perfecto para novias con estilo moderno y elegante.",
                categories: ["novia", "precio-bajo"]
            },
            {
                id: 33,
                name: "Dulzura Rosada",
                price: 118750,
                image: "../assets/foto48.webp",
                description: "Bouquet de novia con rosas rosadas y blancas acompañadas de yicsu delicado. Envuelto con cinta dorada satinada. Obsequio incluido: ramillete del novio a juego. Detalle tierno y romántico para parejas que combinan sus accesorios.",
                categories: ["novia", "precio-bajo"]
            },
            {
                id: 34,
                name: "Reina de Pompones",
                price: 118750,
                image: "../assets/foto54.webp",
                description: "Ramo grande con 4 paquetes de pompones amarillos en decoración tipo reina. Envuelto en papel blanco elegante. Arreglo voluminoso y llamativo que irradia alegría y positivismo. Ideal para sorprender con abundancia y color dorado.",
                categories: ["pompones", "precio-bajo"]
            },
            {
                id: 35,
                name: "Corazón de Pompones",
                price: 118750,
                image: "../assets/foto71.webp",
                description: "Caja en forma de corazón rosa repleta de pompones amarillos decorados con 2 mariposas doradas. Incluye tarjeta personalizada. Diseño romántico y original que combina la calidez del amarillo con la forma del amor. Regalo encantador.",
                categories: ["pompones", "cajas", "precio-bajo"]
            },
            {
                id: 36,
                name: "Pureza Solar",
                price: 121250,
                image: "../assets/foto64.webp",
                description: "Bouquet delicado con 5 girasoles y margaritas blancas envuelto en papel coreano rosa. Incluye tarjeta personalizada. Combinación luminosa y fresca que transmite paz, alegría y buenos deseos. Ideal para sorpresas con encanto natural.",
                categories: ["girasoles", "bouquets", "precio-bajo"]
            },
            {
                id: 37,
                name: "Ternura Rosada",
                price: 122500,
                image: "../assets/foto50.webp",
                description: "Bouquet compacto y redondo con claveles rosados, rosas en tonos pastel y yicsu. Diseño esférico delicado que transmite dulzura y romanticismo. Perfecto para novias que aman los tonos suaves y la feminidad.",
                categories: ["novia", "precio-bajo"]
            },
            {
                id: 38,
                name: "Coral y Nieve",
                price: 122500,
                image: "../assets/foto51.webp",
                description: "Bouquet nupcial con rosas coral, claveles blancos, yicsu y eucalipto. Decorado con elegante lazo lavanda. Incluye ramillete del novio. Combinación fresca y moderna que aporta un toque de color sin perder la elegancia nupcial.",
                categories: ["novia", "precio-bajo"]
            },
            {
                id: 39,
                name: "Mi Niña Bella",
                price: 122500,
                image: "../assets/foto97.webp",
                description: "Bouquet clásico de rosas rojas intensas envueltas en papel crema/beige con lazo rojo de cinta satinada. Presentación limpia, elegante y atemporal. El ramo perfecto para decir 'te quiero' con estilo y sencillez.",
                categories: ["bouquets", "coreano", "precio-bajo"]
            },
            {
                id: 40,
                name: "Rosas y Ferrero Dorado",
                price: 122500,
                image: "../assets/foto101.webp",
                description: "Bouquet de rosas rojas con 5 Ferrero Rocher, gypsophila y abundante follaje verde, envuelto en papel negro con interior dorado y lazo rojo. La combinación perfecta de flores y chocolate para un regalo irresistible y delicioso.",
                categories: ["bouquets", "chocolates", "precio-bajo"]
            },
            {
                id: 41,
                name: "Vestido Campestre",
                price: 131250,
                image: "../assets/foto18.webp",
                description: "Ramo encantador con 3 girasoles, margaritas, claveles rosados, rosas y follaje verde. Envuelto en papel kraft natural con lazo rojo. Combinación campestre y alegre que transmite frescura y buenos deseos.",
                categories: ["girasoles", "bouquets", "precio-bajo"]
            },
            {
                id: 42,
                name: "Princesa Rosada",
                price: 131250,
                image: "../assets/foto88.webp",
                description: "Elegante bouquet de rosas rosadas con ramas de eucalipto, envuelto en papel blanco y rosa con lazo delicado. Estilo coreano fresco y romántico con tarjeta decorativa. Perfecto para sorprender a alguien especial con dulzura y estilo.",
                categories: ["bouquets", "coreano", "precio-bajo"]
            },
            {
                id: 43,
                name: "Jardín de Primavera",
                price: 137500,
                image: "../assets/foto1.webp",
                description: "Bouquet fresco y encantador con gerberas rosadas, pompones, manzanilla, rosas y claveles. Combinación delicada que transmite alegría y ternura. Envuelto en papel decorativo con tarjeta de la marca. Ideal para sorprender con frescura y color.",
                categories: ["gerberas", "bouquets", "precio-bajo"]
            },
            {
                id: 44,
                name: "Alegría Campestre",
                price: 137500,
                image: "../assets/foto16.webp",
                description: "Bouquet colorido con gerberas rosadas, rosas, follaje verde y pompones en tonos variados. Presentación envuelta con tarjeta personalizada. Arreglo fresco y vibrante que transmite felicidad, vitalidad y buenos deseos para cualquier ocasión.",
                categories: ["gerberas", "bouquets", "precio-bajo"]
            },
            {
                id: 45,
                name: "Dulzura Floral",
                price: 137500,
                image: "../assets/foto91.webp",
                description: "Hermoso bouquet con hortensia rosada, rosas en tonos pastel, mini rosas blancas y claveles verdes, envuelto en papel crema y lila con lazo suave. Una mezcla delicada y sofisticada que transmite ternura y cariño sincero.",
                categories: ["bouquets", "premium", "precio-bajo"]
            },
            {
                id: 46,
                name: "Blancura Celestial",
                price: 143750,
                image: "../assets/foto42.webp",
                description: "Bouquet nupcial de rosas blancas con yicsu (gypsophila) abundante. Clásico y delicado, perfecto para ceremonias tradicionales. Transmite inocencia y amor puro. Presentación compacta y elegante con acabado impecable.",
                categories: ["novia", "precio-bajo"]
            },
            {
                id: 47,
                name: "Siete Soles con Ferrero",
                price: 143750,
                image: "../assets/foto76.webp",
                description: "Bouquet generoso con 7 girasoles y 3 chocolates Ferrero Rocher envuelto en papel negro y amarillo con follaje. Incluye tarjeta personalizada. Combinación perfecta entre flores radiantes y dulzura para un regalo memorable.",
                categories: ["girasoles", "chocolates", "precio-bajo"]
            },
            {
                id: 48,
                name: "Perfección en Rosa y Lirios",
                price: 143750,
                image: "../assets/foto89.webp",
                description: "Bouquet mixto de rosas rosadas con lirios blancos, gypsophila y follaje verde, envuelto en papel verde menta con lazo rosa. Una combinación exquisita de texturas y aromas que transmite amor puro y perfección.",
                categories: ["bouquets", "premium", "precio-bajo"]
            },
            {
                id: 49,
                name: "Terroncito de Amor",
                price: 147500,
                image: "../assets/foto102.webp",
                description: "Bouquet encantador de rosas rojas con gerberas rosadas y ramas de eucalipto, envuelto en papel rosa y crema con lazo rojo satinado y tarjeta personalizada. La mezcla perfecta entre dulzura y pasión en un solo ramo.",
                categories: ["bouquets", "gerberas", "coreano", "precio-bajo"]
            },
            {
                id: 50,
                name: "Pasión con Perlas",
                price: 150000,
                image: "../assets/foto52.webp",
                description: "Bouquet de novia con rosas rojas, blancas y rosadas decoradas con perlas y yicsu. Incluye ramillete del novio a juego. Diseño romántico que combina colores intensos con detalles delicados. Perfecto para bodas llenas de amor.",
                categories: ["novia", "precio-medio"]
            },
            {
                id: 51,
                name: "Siete Soles",
                price: 150000,
                image: "../assets/foto56.webp",
                description: "Bouquet espectacular con 7 girasoles grandes acompañados de nubes (gypsophila). Decorado en papel coreano rosa con estampado 'Love'. Arreglo luminoso y generoso que transmite admiración y amor sincero. Tarjeta incluida.",
                categories: ["girasoles", "coreano", "precio-medio"]
            },
            {
                id: 52,
                name: "Mi Corazón Derretido",
                price: 150000,
                image: "../assets/foto109.webp",
                description: "Bouquet de rosas rojas con gypsophila y caja de Ferrero Rocher, envuelto en papel rosa con diseño mármol dorado y lazo rosa satinado. Un regalo que combina romance y dulzura en una presentación moderna y llamativa.",
                categories: ["bouquets", "chocolates", "coreano", "precio-medio"]
            },
            {
                id: 53,
                name: "Brisa Lavanda",
                price: 156250,
                image: "../assets/foto8.webp",
                description: "Bouquet armonioso que combina hortensias moradas, rosas, gerberas rosadas y astromelias. Envuelto en delicado papel lavanda con lazo. Combinación única de colores que transmite elegancia, misterio y romanticismo.",
                categories: ["gerberas", "bouquets", "precio-medio"]
            },
            {
                id: 54,
                name: "Amanecer Dorado",
                price: 156250,
                image: "../assets/foto24.webp",
                description: "Bouquet delicado con 3 girasoles, clavellinas, rosas en tonos durazno y nubes (gypsophila). Envuelto en papel blanco con lazo. Combinación suave y luminosa que transmite paz, esperanza y cariño genuino.",
                categories: ["girasoles", "bouquets", "precio-medio"]
            },
            {
                id: 55,
                name: "Sol y Pasión",
                price: 156250,
                image: "../assets/foto29.webp",
                description: "Bouquet impactante con 3 girasoles, rosas rojas, follaje verde y nubes. Envuelto en papel blanco y negro elegante. Combinación clásica que fusiona la energía del sol con la intensidad del amor. Tarjeta personalizada incluida.",
                categories: ["girasoles", "bouquets", "precio-medio"]
            },
            {
                id: 56,
                name: "Pureza Natural",
                price: 156250,
                image: "../assets/foto41.webp",
                description: "Bouquet de novia con rosas blancas y eucalipto verde. Diseño elegante y minimalista con tallos envueltos en cinta blanca. Transmite frescura, pureza y sofisticación. Ideal para novias que buscan un estilo natural y romántico.",
                categories: ["novia", "precio-medio"]
            },
            {
                id: 57,
                name: "Romance Bicolor",
                price: 156250,
                image: "../assets/foto46.webp",
                description: "Bouquet de novia con rosas rojas y blancas entrelazadas con yicsu abundante. Combinación clásica que simboliza amor apasionado y pureza. Diseño redondo y compacto con acabado impecable para una boda memorable.",
                categories: ["novia", "precio-medio"]
            },
            {
                id: 58,
                name: "Serenidad Blanca",
                price: 156250,
                image: "../assets/foto47.webp",
                description: "Bouquet nupcial con astromelias blancas y rosas en tonos crema con follaje verde. Atado con cuerda natural estilo rústico. Combinación fresca y delicada que transmite paz y armonía. Ideal para bodas al aire libre.",
                categories: ["novia", "precio-medio"]
            },
            {
                id: 59,
                name: "Explosión de Color",
                price: 160000,
                image: "../assets/foto19.webp",
                description: "Bouquet vibrante con 2 girasoles, 2 gerberas, boca de dragón, nubes, margaritas y solidago. Envuelto en papel coreano rosa. Mezcla multicolor llena de vida y alegría que celebra cada momento con intensidad.",
                categories: ["girasoles", "gerberas", "bouquets", "precio-medio"]
            },
            {
                id: 60,
                name: "Mi Amor Bonito",
                price: 162500,
                image: "../assets/foto110.webp",
                description: "Bouquet de rosas rojas con eucalipto envuelto en papel rosa suave con lazo rojo y tarjeta personalizada. Estilo coreano elegante y romántico con un toque natural. El equilibrio perfecto entre sencillez y sofisticación para expresar amor.",
                categories: ["bouquets", "coreano", "precio-medio"]
            },
            {
                id: 61,
                name: "Canasta Dulce Rosa",
                price: 168750,
                image: "../assets/foto13.webp",
                description: "Canasta decorativa con gerberas rosadas intensas, nubes (gypsophila) y margaritas blancas sobre follaje verde. Combinación tierna y fresca que transmite cariño y delicadeza. Perfecta para regalar en cualquier ocasión especial.",
                categories: ["gerberas", "canastas", "precio-medio"]
            },
            {
                id: 62,
                name: "Jardín del Sol",
                price: 168750,
                image: "../assets/foto22.webp",
                description: "Ramo abundante con 3 girasoles, 3 rosas rosadas, 4 gerberas y margaritas con follaje. Envuelto en papel coreano rosa. Combinación exuberante que fusiona la alegría del girasol con la delicadeza de las gerberas y rosas.",
                categories: ["girasoles", "gerberas", "bouquets", "precio-medio"]
            },
            {
                id: 63,
                name: "Nube de Rosas",
                price: 168750,
                image: "../assets/foto43.webp",
                description: "Bouquet redondo de rosas blancas con base de yicsu (gypsophila). Diseño esférico compacto y sofisticado. Cada rosa transmite elegancia y distinción. Perfecto para novias que desean un ramo clásico con presencia imponente.",
                categories: ["novia", "precio-medio"]
            },
            {
                id: 64,
                name: "Soleado con Dulzura",
                price: 173750,
                image: "../assets/foto36.webp",
                description: "Bouquet encantador con 6 girasoles rodeados de clavellinas rosadas en papel coreano decorado con margaritas. Incluye dulce y tarjeta personalizada. Combinación fresca y tierna perfecta para expresar cariño con un toque especial.",
                categories: ["girasoles", "coreano", "chocolates", "precio-medio"]
            },
            {
                id: 65,
                name: "Te Amaré Para Siempre",
                price: 173750,
                image: "../assets/foto87.webp",
                description: "Espectacular ramo redondo de abundantes rosas rojas rodeadas de gypsophila, con cinta personalizada 'Te Amo' y envoltura rosa translúcida estilo coreano. Un regalo grandioso que grita amor eterno. Ideal para aniversarios y declaraciones.",
                categories: ["bouquets", "coreano", "premium", "precio-medio"]
            },
            {
                id: 66,
                name: "Cálido Amor",
                price: 181250,
                image: "../assets/foto17.webp",
                description: "Bouquet radiante con 5 girasoles protagonistas acompañados de astromelias, claveles y eucalipto. Envuelto en elegante papel verde menta con lazo. Transmite calidez, energía positiva y amor sincero. Ideal para iluminar cualquier día.",
                categories: ["girasoles", "bouquets", "precio-medio"]
            },
            {
                id: 67,
                name: "Jardín de Ensueño",
                price: 185000,
                image: "../assets/foto90.webp",
                description: "Lujoso bouquet mixto con hortensia lila, rosas rosadas, mini rosas, claveles y alstroemeria, envuelto en papel azul turquesa con lazo elegante. Una explosión de color y frescura que evoca un jardín de fantasía. Arreglo premium para ocasiones especiales.",
                categories: ["bouquets", "premium", "precio-medio"]
            },
            {
                id: 68,
                name: "Corazón Solar Hermoso",
                price: 187500,
                image: "../assets/foto72.webp",
                description: "Caja corazón blanca con 9 girasoles, follaje y nubes. Incluye cartel decorativo 'Para la más hermosa'. Diseño romántico y luminoso que combina la calidez del girasol con el símbolo del amor. Regalo premium para momentos especiales.",
                categories: ["girasoles", "cajas", "precio-medio"]
            },
            {
                id: 69,
                name: "Fusión Silvestre",
                price: 193750,
                image: "../assets/foto3.webp",
                description: "Ramo exuberante y llamativo con gerberas en tonos rosa y fucsia, margaritas y rosas. Presentación abundante envuelta en papel periódico decorativo con lazo rosado. Diseño moderno con personalidad que transmite energía y pasión.",
                categories: ["gerberas", "bouquets", "precio-medio"]
            },
            {
                id: 70,
                name: "Romance Coreano",
                price: 193750,
                image: "../assets/foto9.webp",
                description: "Hermoso bouquet con rosas en tonos pastel, gerbera, margaritas, tulipán y alelís. Decorado en elegante estilo coreano con papel rosa suave. Combinación romántica y delicada perfecta para enamorar desde la primera mirada.",
                categories: ["gerberas", "bouquets", "coreano", "precio-medio"]
            },
            {
                id: 71,
                name: "Cumpleaños Radiante",
                price: 193750,
                image: "../assets/foto37.webp",
                description: "Caja elegante repleta de girasoles con globo burbuja personalizado 'Feliz Cumpleaños Amor'. Arreglo festivo y luminoso ideal para celebraciones especiales. Presentación premium con tarjeta incluida que hace de cada cumpleaños un momento mágico.",
                categories: ["girasoles", "cajas", "precio-medio"]
            },
            {
                id: 72,
                name: "Gracia Nupcial",
                price: 193750,
                image: "../assets/foto44.webp",
                description: "Bouquet de novia con rosas blancas, lirios elegantes y yicsu. Combinación sofisticada que aporta volumen y textura. Los lirios añaden un toque de distinción y fragancia. Ideal para ceremonias formales y elegantes.",
                categories: ["novia", "premium", "precio-medio"]
            },
            {
                id: 73,
                name: "Caja Noir de Girasoles",
                price: 193750,
                image: "../assets/foto67.webp",
                description: "Caja redonda negra elegante con 7 girasoles, moño decorativo y tarjeta personalizada. Diseño moderno y sofisticado que combina la calidez del girasol con la elegancia del negro. Pieza central perfecta para decorar con distinción.",
                categories: ["girasoles", "cajas", "precio-medio"]
            },
            {
                id: 74,
                name: "Nube de Amor",
                price: 193750,
                image: "../assets/foto106.webp",
                description: "Abundante bouquet mixto de rosas rojas, rosas rosadas, claveles rosados y eucalipto, envuelto en papel blanco con lazo rosa. Una nube de flores llena de color y romanticismo que transmite amor en cada pétalo. Perfecto para ocasiones especiales.",
                categories: ["bouquets", "premium", "precio-medio"]
            },
            {
                id: 75,
                name: "Caja Elegancia Negra",
                price: 197500,
                image: "../assets/foto40.webp",
                description: "Caja redonda negra con girasoles abundantes y follaje verde, decorada con lazo de cinta amarilla dorada. Contraste elegante y moderno entre el negro y el amarillo radiante. Arreglo sofisticado ideal para quienes buscan un regalo con estilo único.",
                categories: ["girasoles", "cajas", "precio-medio"]
            },
            {
                id: 76,
                name: "Queen of My Heart",
                price: 197500,
                image: "../assets/foto100.webp",
                description: "Elegante arreglo de rosas rojas de tallo largo con eucalipto en jarrón de vidrio transparente con cinta negra. Estilo moderno y sofisticado que realza la belleza natural de las rosas. Un regalo con presencia que perdura por días.",
                categories: ["bouquets", "premium", "precio-medio"]
            },
            {
                id: 77,
                name: "Esplendor Dorado",
                price: 200000,
                image: "../assets/foto32.webp",
                description: "Ramo espectacular con 10 girasoles grandes rodeados de nubes (gypsophila) y follaje verde. Envuelto en papel blanco elegante. Arreglo generoso y luminoso que transmite admiración, gratitud y energía positiva desbordante.",
                categories: ["girasoles", "bouquets", "premium", "precio-medio"]
            },
            {
                id: 78,
                name: "Rosa Perfecta Escalera",
                price: 200000,
                image: "../assets/foto105.webp",
                description: "Espectacular ramo de rosas rojas dispuestas en forma escalonada con papel negro transparente y mensaje personalizado de feliz cumpleaños. Presentación única tipo escalera que impacta visualmente. Ideal para cumpleaños y celebraciones especiales.",
                categories: ["bouquets", "coreano", "premium", "precio-medio"]
            },
            {
                id: 79,
                name: "Rosas y Lirios en Jarrón",
                price: 200000,
                image: "../assets/foto108.webp",
                description: "Elegante arreglo de rosas rojas con lirios amarillos, helechos y follaje verde en jarrón de vidrio con lazo rojo. Combinación clásica y sofisticada con aroma exquisito que llena cualquier espacio de vida y color. Ideal para decorar y regalar.",
                categories: ["bouquets", "premium", "precio-medio"]
            },
            {
                id: 80,
                name: "Corazón Eterno Aniversario",
                price: 206250,
                image: "../assets/foto77.webp",
                description: "Caja corazón grande con rosas eternas doradas y blancas rodeadas de nubes. Cartel 'Feliz Aniversario' en forma de corazón. Diseño lujoso y duradero que simboliza amor eterno. Regalo perfecto para celebrar años de amor.",
                categories: ["rosas-eternas", "cajas", "premium", "precio-medio"]
            },
            {
                id: 81,
                name: "Enamoradito de Ti",
                price: 206250,
                image: "../assets/foto92.webp",
                description: "Caja cilíndrica rosa con abundantes rosas fucsia frescas perfectamente acomodadas, decorada con lazo de cinta rosa. Presentación elegante tipo hat box que impacta a primera vista. Un regalo lleno de color y romance.",
                categories: ["cajas", "premium", "precio-medio"]
            },
            {
                id: 82,
                name: "Corazón de Gerberas",
                price: 210000,
                image: "../assets/foto2.webp",
                description: "Espectacular arreglo en forma de corazón con abundantes gerberas rosadas rodeadas de nubes (gypsophila). Presentación en elegante papel coreano rosa. Un regalo romántico e impactante que roba suspiros y deja huella.",
                categories: ["gerberas", "coreano", "premium", "precio-medio"]
            },
            {
                id: 83,
                name: "Rosas y Sol",
                price: 210000,
                image: "../assets/foto23.webp",
                description: "Bouquet premium con 4 girasoles, 12 rosas rosadas, follaje verde y boca de dragón. Envuelto en papel blanco elegante con lazo rosa. Arreglo sofisticado y generoso que combina romance y luminosidad en perfecta armonía.",
                categories: ["girasoles", "bouquets", "premium", "precio-medio"]
            },
            {
                id: 84,
                name: "Celebración Dorada",
                price: 210000,
                image: "../assets/foto26.webp",
                description: "Caja blanca con 6 girasoles, 4 chocolates Ferrero Rocher, nubes y globo de aniversario dorado. Presentación festiva con lazo dorado. Regalo completo que combina flores, dulzura y celebración en un solo detalle inolvidable.",
                categories: ["girasoles", "cajas", "chocolates", "precio-medio"]
            },
            {
                id: 85,
                name: "Canasta Preciosa",
                price: 210000,
                image: "../assets/foto28.webp",
                description: "Canasta de mimbre natural con 3 girasoles, rosas rojas, follaje verde abundante y nubes. Arreglo clásico y elegante que combina la pasión de las rosas con la calidez del girasol. Perfecto para sorprender con estilo rústico.",
                categories: ["girasoles", "canastas", "precio-medio"]
            },
            {
                id: 86,
                name: "Canasta Perfección Roja",
                price: 210000,
                image: "../assets/foto99.webp",
                description: "Hermosa canasta blanca de mimbre repleta de rosas rojas de tallo largo con lazo rojo y cinta personalizada. Presentación clásica y abundante que transmite amor y generosidad. Ideal para decorar y regalar en cualquier ocasión especial.",
                categories: ["canastas", "premium", "precio-medio"]
            },
            {
                id: 87,
                name: "Docena Dorada Premium",
                price: 212500,
                image: "../assets/foto75.webp",
                description: "Bouquet espectacular con 12 girasoles grandes, mariposas decorativas, follaje verde y 8 chocolates Ferrero Rocher. Envuelto en papel negro y amarillo con lazo rojo. Arreglo de alto impacto que combina abundancia, belleza y dulzura.",
                categories: ["girasoles", "chocolates", "premium", "precio-medio"]
            },
            {
                id: 88,
                name: "Galaxia de Girasoles",
                price: 218750,
                image: "../assets/foto34.webp",
                description: "Impresionante ramo circular con 13 girasoles decorados con mariposas doradas en papel negro. Diseño espectacular y moderno que transmite poder, admiración y grandeza. Presentación de alto impacto con tarjeta personalizada.",
                categories: ["girasoles", "premium", "precio-medio"]
            },
            {
                id: 89,
                name: "Cascada Imperial",
                price: 225000,
                image: "../assets/foto49.webp",
                description: "Bouquet de novia en cascada con rosas blancas, yicsu y follaje verde cayendo en forma de lágrima. Diseño clásico y majestuoso que transmite elegancia suprema. Ideal para novias que buscan un ramo con presencia y dramatismo.",
                categories: ["novia", "premium", "precio-medio"]
            },
            {
                id: 90,
                name: "Elegancia con Tulipanes",
                price: 231250,
                image: "../assets/foto6.webp",
                description: "Bouquet sofisticado que combina gerberas con tulipanes rosados, pompones blancos y alelís. Presentación en papel coreano bicolor con lazo. Mezcla exclusiva de texturas y tonos que transmite distinción y romanticismo.",
                categories: ["gerberas", "bouquets", "coreano", "premium", "precio-medio"]
            },
            {
                id: 91,
                name: "Fiesta Floral",
                price: 231250,
                image: "../assets/foto11.webp",
                description: "Ramo abundante y festivo con gerberas, margaritas, rosas, claveles y corona decorativa. Incluye 2 globos de helio que añaden un toque celebratorio. Envuelto en papel coreano rosa con corazones. Ideal para cumpleaños y celebraciones.",
                categories: ["gerberas", "bouquets", "coreano", "precio-medio"]
            },
            {
                id: 92,
                name: "Canasta Primaveral",
                price: 231250,
                image: "../assets/foto30.webp",
                description: "Canasta decorativa con 3 girasoles, rosas en tonos durazno, lisianthus verde, nubes y follaje. Presentación con lazo naranja. Arreglo fresco y armonioso que llena cualquier espacio de vida, color y elegancia natural.",
                categories: ["girasoles", "canastas", "precio-medio"]
            },
            {
                id: 93,
                name: "Festival Floral con Ferrero",
                price: 231250,
                image: "../assets/foto39.webp",
                description: "Ramo generoso con girasoles, gerberas rosadas y fucsia, rosas rojas y amarillas, claveles y pompones. Incluye caja de Ferrero Rocher. Envuelto en papel coreano rosa. Combinación festiva de flores y dulzura para momentos inolvidables.",
                categories: ["girasoles", "gerberas", "bouquets", "chocolates", "premium", "precio-medio"]
            },
            {
                id: 94,
                name: "Mariposas Doradas",
                price: 231250,
                image: "../assets/foto62.webp",
                description: "Impresionante ramo con 13 girasoles decorados con 4 mariposas doradas y moño elegante en papel negro. Incluye tarjeta del día de las flores amarillas. Diseño espectacular y simbólico que transmite admiración y grandeza.",
                categories: ["girasoles", "premium", "precio-medio"]
            },
            {
                id: 95,
                name: "Canasta Arcoíris",
                price: 235000,
                image: "../assets/foto12.webp",
                description: "Canasta de mimbre natural repleta de gerberas multicolores en tonos rojo, naranja, amarillo, rosa y blanco con follaje verde abundante. Arreglo vibrante y alegre que llena de vida cualquier espacio. Presentación rústica y elegante.",
                categories: ["gerberas", "canastas", "precio-medio"]
            },
            {
                id: 96,
                name: "Tierno Amor Bicolor",
                price: 235000,
                image: "../assets/foto96.webp",
                description: "Bouquet romántico de rosas rojas con claveles rosados y abundante gypsophila, envuelto en papel negro con corte decorativo y mariposa dorada. Combinación clásica y tierna que mezcla pasión con dulzura en una presentación moderna.",
                categories: ["bouquets", "coreano", "precio-medio"]
            },
            {
                id: 97,
                name: "Corazón Multicolor",
                price: 256250,
                image: "../assets/foto5.webp",
                description: "Impresionante caja negra en forma de corazón repleta de gerberas multicolores: fucsia, naranja, amarillo, blanco y rosa. Arreglo vibrante y alegre que irradia felicidad. Incluye tarjeta personalizada y lazo decorativo.",
                categories: ["gerberas", "cajas", "premium", "precio-alto"]
            },
            {
                id: 98,
                name: "Esplendor en Base",
                price: 262500,
                image: "../assets/foto7.webp",
                description: "Arreglo floral premium en elegante base cilíndrica blanca con gerberas, rosas, margaritas, astromelias, eucalipto, rosas mini y claveles. Diseño abundante y sofisticado con lazo fucsia que decora cualquier espacio con lujo.",
                categories: ["gerberas", "cajas", "premium", "precio-alto"]
            },
            {
                id: 99,
                name: "Torre de Pasión",
                price: 275000,
                image: "../assets/foto10.webp",
                description: "Lujoso arreglo en caja cilíndrica blanca con gerberas, pompones, rosas naturales rojas y rosadas, y clavellinas. Coronado con elegante lazo fucsia. Diseño imponente que combina dulzura y pasión en un solo detalle memorable.",
                categories: ["gerberas", "cajas", "premium", "precio-alto"]
            },
            {
                id: 100,
                name: "Reina de las Rosas",
                price: 287500,
                image: "../assets/foto93.webp",
                description: "Imponente hat box rosa repleta de más de 40 rosas en tonos rosa intenso y rojo. Una presentación de lujo que desborda romance y elegancia. El regalo más impactante para demostrar un amor grande e inolvidable.",
                categories: ["cajas", "premium", "precio-alto"]
            },
            {
                id: 101,
                name: "Corazón de Rosas",
                price: 297500,
                image: "../assets/foto98.webp",
                description: "Espectacular bouquet con rosas rojas formando un corazón en el centro, rodeadas de rosas blancas y gypsophila, con mariposa decorativa. Envuelto en papel blanco y negro con diseño geométrico. Una declaración de amor hecha arte floral.",
                categories: ["bouquets", "premium", "precio-alto"]
            },
            {
                id: 102,
                name: "Corazón de Sol",
                price: 300000,
                image: "../assets/foto31.webp",
                description: "Caja corazón blanca repleta de girasoles con nubes y cartel decorativo 'Para la más hermosa'. Diseño romántico y luminoso que combina amor y alegría. Regalo premium perfecto para declaraciones especiales y momentos únicos.",
                categories: ["girasoles", "cajas", "premium", "precio-alto"]
            },
            {
                id: 103,
                name: "Celebración Completa",
                price: 300000,
                image: "../assets/foto58.webp",
                description: "Arreglo premium en caja con 6 girasoles, chocolates Ferrero Rocher, globo burbuja 'Feliz Día' y peluche de gato. Regalo completo que combina flores, dulzura, diversión y ternura. Perfecto para cumpleaños y celebraciones especiales.",
                categories: ["girasoles", "cajas", "chocolates", "premium", "precio-alto"]
            },
            {
                id: 104,
                name: "Para la Más Bonita",
                price: 300000,
                image: "../assets/foto107.webp",
                description: "Gran bouquet de lujo con abundantes rosas rojas, claveles, alstroemeria rosada y cinta personalizada 'Por Bonita', envuelto en papel kraft dorado. Un homenaje floral imponente para la mujer más especial. Arreglo premium de máxima elegancia.",
                categories: ["bouquets", "premium", "precio-alto"]
            },
            {
                id: 105,
                name: "Sinfonía Multicolor",
                price: 362500,
                image: "../assets/foto35.webp",
                description: "Ramo espectacular y abundante con girasoles, gerberas rosadas y fucsia, rosas rojas y claveles. Envuelto en elegante papel coreano rosa con estampado decorativo. Explosión de color y alegría que deja sin palabras. Un regalo de alto impacto.",
                categories: ["girasoles", "gerberas", "bouquets", "premium", "precio-alto"]
            },
            {
                id: 106,
                name: "Majestuosidad de Girasoles",
                price: 393750,
                image: "../assets/foto80.webp",
                description: "Bouquet premium con 12 girasoles grandes, rosas blancas, follaje y tarjeta personalizada. Disponible en papel coreano. Reservar con 2 días de anticipación. Arreglo majestuoso e imponente para ocasiones que merecen lo mejor.",
                categories: ["girasoles", "bouquets", "premium", "precio-alto"]
            },
            {
                id: 107,
                name: "Amor de Mi Vida",
                price: 462500,
                image: "../assets/foto103.webp",
                description: "Impresionante mega bouquet redondo con más de 100 rosas rojas intensas envueltas en papel blanco con elegante lazo de cinta crema. Una declaración de amor absoluta que deja sin palabras. El regalo más grandioso para el amor de tu vida.",
                categories: ["bouquets", "premium", "precio-alto"]
            },
            {
                id: 108,
                name: "Majestuosidad Solar",
                price: 475000,
                image: "../assets/foto25.webp",
                description: "Arreglo premium de girasoles abundantes con follaje verde en elegante base cilíndrica blanca con iniciales. Diseño lujoso y sofisticado que irradia energía y positivismo. Pieza central perfecta para decorar espacios con distinción.",
                categories: ["girasoles", "cajas", "premium", "precio-alto"]
            },
            {
                id: 109,
                name: "Dulce Amor con Peluche",
                price: 512500,
                image: "../assets/foto94.webp",
                description: "Combo especial que incluye arreglo de rosas rojas y rosadas en base decorativa, peluche grande de Lotso (oso rosa), caja de Ferrero Rocher y chocolate Jet. El regalo más completo y tierno para enamorar. Ideal para cumpleaños y fechas especiales.",
                categories: ["cajas", "chocolates", "premium", "precio-alto"]
            },
            {
                id: 110,
                name: "Besos Hechos en Flor",
                price: 537500,
                image: "../assets/foto95.webp",
                description: "Mega bouquet de lujo con abundantes rosas rojas, Ferrero Rocher intercalados, corona decorativa y cinta personalizada, envuelto en papel negro y gris con bordes dorados. Una obra maestra floral para la persona más importante de tu vida.",
                categories: ["bouquets", "chocolates", "premium", "precio-alto"]
            },
            {
                id: 111,
                name: "Dulce Amor",
                price: 218750,
                description: "Hermosa canasta de mimbre con gerberas rosadas, rosas en tonos rosa y blanco, claveles y follaje verde con lazo rosa. Un arreglo tierno y romántico que transmite dulzura y cariño. Ideal para cumpleaños, aniversarios o sorpresas especiales.",
                image: "../assets/foto111.webp",
                categories: ["canastas", "gerberas", "precio-medio"]
            },
            {
                id: 112,
                name: "Color de Amor",
                price: 237500,
                description: "Caja decorativa blanca con arreglo multicolor de girasoles, gerberas fucsia, baby rose, hortensias verdes y lilas. Explosión de color y alegría perfecta para cumpleaños. Un regalo vibrante que ilumina cualquier espacio.",
                image: "../assets/foto112.webp",
                categories: ["cajas", "girasoles", "gerberas", "precio-medio"]
            },
            {
                id: 113,
                name: "Unidos por Siempre",
                price: 193750,
                description: "Elegante caja blanca con rosas rosadas y blancas acompañadas de delicado gypsophila. Arreglo clásico y romántico que simboliza amor eterno. Perfecto para aniversarios, pedidas de mano o declaraciones de amor.",
                image: "../assets/foto113.webp",
                categories: ["cajas", "precio-medio"]
            },
            {
                id: 114,
                name: "Mujer Elegante",
                price: 387500,
                description: "Imponente arreglo en base gris con girasoles, rosas en tonos durazno y crema, eucalipto, claveles y follaje verde. Diseño alto y sofisticado ideal para mujeres elegantes. Perfecto para ocasiones especiales y celebraciones importantes.",
                image: "../assets/foto114.webp",
                categories: ["girasoles", "premium", "precio-alto"]
            },
            {
                id: 115,
                name: "Tierno Amor",
                price: 222500,
                description: "Caja rosada con rosas blancas y rosadas, 6 Ferrero Rocher intercalados y globo burbuja personalizado con nombre. Un detalle completo y especial que combina flores, chocolates y personalización. Ideal para cumpleaños memorables.",
                image: "../assets/foto115.webp",
                categories: ["cajas", "chocolates", "precio-medio"]
            },
            {
                id: 116,
                name: "Tierno Amor Campestre",
                price: 210000,
                description: "Caja blanca rectangular con arreglo campestre de rosas rosadas, lirios blancos, gerberas, girasoles y abundante follaje verde. Combinación fresca y natural con variedad de flores. Perfecto para transmitir amor y ternura.",
                image: "../assets/foto116.webp",
                categories: ["cajas", "girasoles", "gerberas", "precio-medio"]
            },
            {
                id: 117,
                name: "Un Cumpleaños Inolvidable",
                price: 193750,
                description: "Arreglo de cumpleaños con rosas coral y rosadas, gerberas, margaritas blancas, follaje verde, tul blanco decorativo, globo corazón rosado de 'Feliz Cumpleaños' y tarjeta personalizada. Todo lo que necesitas para un cumpleaños perfecto.",
                image: "../assets/foto117.webp",
                categories: ["gerberas", "precio-medio"]
            },
            {
                id: 118,
                name: "Cariñito",
                price: 243750,
                description: "Detalle exclusivo en caja gris con rosas rosadas, lirio oriental, gypsophila y globo burbuja transparente con globos internos rosados y mensaje de 'Feliz Cumpleaños'. Un regalo espectacular para la persona que amas.",
                image: "../assets/foto118.webp",
                categories: ["cajas", "precio-medio"]
            },
            {
                id: 119,
                name: "Jardín Floral",
                price: 262500,
                description: "Canasta de mimbre con lirios orientales fucsia, rosas en tonos rosa, gypsophila rosada y abundante follaje verde con cinta rosada personalizada. Un jardín de flores naturales lleno de color y fragancia. Arreglo premium y elegante.",
                image: "../assets/foto119.webp",
                categories: ["canastas", "precio-alto"]
            },
            {
                id: 120,
                name: "Mon Amour",
                price: 181250,
                description: "Caja blanca con surtido de flores en tonos rosa y verde, acompañado de globo burbuja con globitos rosados internos y mensaje de 'Happy Birthday' personalizado con nombre. Incluye Ferrero Rocher. Un regalo completo y encantador.",
                image: "../assets/foto120.webp",
                categories: ["cajas", "chocolates", "precio-medio"]
            },
            {
                id: 121,
                name: "Pétalos de Amor",
                price: 162500,
                description: "Delicada caja blanca con rosas blancas, gerberas rosadas y globo burbuja personalizado con globitos rosados internos y mensaje especial. Arreglo tierno y romántico. Perfecto para sorpresas de cumpleaños y fechas especiales.",
                image: "../assets/foto121.webp",
                categories: ["cajas", "gerberas", "precio-medio"]
            },
            {
                id: 122,
                name: "Belleza Floral",
                price: 121250,
                description: "Caja rosada con rosas rojas intensas, astromelias rosadas, clavellinas y eucalipto. Arreglo compacto pero lleno de color y elegancia. La opción más accesible sin sacrificar belleza. Perfecto para sorpresas cotidianas y detalles espontáneos.",
                image: "../assets/foto122.webp",
                categories: ["cajas", "precio-bajo"]
            },
            {
                id: 123,
                name: "Un Amor tan Dulce",
                price: 150000,
                description: "Canasta de mimbre con rosas rosadas, margaritas, gypsophila abundante y lazo rosa decorativo. Un arreglo dulce y delicado que expresa amor tierno. Perfecto para enamorar, sorprender o simplemente alegrar el día de alguien especial.",
                image: "../assets/foto123.webp",
                categories: ["canastas", "precio-medio"]
            },
            {
                id: 124,
                name: "Un Amour Élégant",
                price: 185000,
                description: "Caja rosada elegante con rosas en tonos rosa claro, decoración especial y globo burbuja con globitos rosados y dorados internos personalizado con nombre. Estilo francés sofisticado. Un detalle premium para personas con gusto exquisito.",
                image: "../assets/foto124.webp",
                categories: ["cajas", "precio-medio"]
            },
            {
                id: 125,
                name: "Arreglo Amalia",
                price: 200000,
                description: "Caja blanca estilo 'Maison des Fleurs' con rose baby y claveles blancos, envueltos en papel tissue con lazo rosa satinado. Arreglo elegante y sofisticado con estilo europeo. Perfecto para mujeres con gusto refinado.",
                image: "../assets/foto125.webp",
                categories: ["cajas", "coreano", "precio-medio"]
            },
            {
                id: 126,
                name: "Re Enamorado de Ti",
                price: 175000,
                description: "Caja rosada con rosas en tonos rosa y fucsia, claveles, pompones blancos, nubes (gypsophila) y follaje verde con lazo rosa y lila. Un arreglo romántico que grita amor. Ideal para reconquistar, aniversarios y fechas especiales.",
                image: "../assets/foto126.webp",
                categories: ["cajas", "precio-medio"]
            },
            {
                id: 127,
                name: "Mujer Bonita",
                price: 393750,
                description: "Espectacular canasta de mimbre rebosante de girasoles, rosas en tonos rosa y lila, claveles rosados, follaje verde y tarjeta personalizada. Arreglo en su máximo esplendor con combinación exuberante de flores. Un regalo premium que deja sin palabras.",
                image: "../assets/foto127.webp",
                categories: ["canastas", "girasoles", "premium", "precio-alto"]
            },
            {
                id: 128,
                name: "Romántico Amor",
                price: 325000,
                description: "Caja premium estilo 'Maison des Fleurs' con rosas rojas intensas acompañadas de bouquet de globos en tonos rosados, plateados y con confeti. Rosas premium para enamorar. Un detalle lujoso y romántico que impacta desde el primer momento.",
                image: "../assets/foto128.webp",
                categories: ["cajas", "premium", "precio-alto"]
            },
            {
                id: 129,
                name: "Cute You",
                price: 218750,
                description: "Arreglo con rosas lilas, claveles rosados y globo burbuja personalizado con globitos internos lilas y mariposas decorativas. Tonos púrpura y rosa que transmiten dulzura y ternura. Perfecto para cumpleaños especiales.",
                image: "../assets/foto129.webp",
                categories: ["cajas", "precio-medio"]
            },
            {
                id: 130,
                name: "Love Explosion",
                price: 237500,
                description: "Imponente caja blanca rebosante de rosas premium abiertas en tonos rosa y blanco. Arreglo XXL perfecto para dar un detalle único e inolvidable. La abundancia de rosas crea un efecto visual espectacular que transmite amor a lo grande.",
                image: "../assets/foto130.webp",
                categories: ["cajas", "premium", "precio-medio"]
            },
            {
                id: 131,
                name: "Clouds in Love",
                price: 111250,
                description: "Caja rosada con pompones blancos y gypsophila abundante que crean un efecto de nube romántica. Arreglo delicado y etéreo en tonos blancos puros. Perfecto para transmitir paz, amor y ternura. Sencillo pero encantador.",
                image: "../assets/foto131.webp",
                categories: ["cajas", "pompones", "precio-bajo"]
            },
            {
                id: 132,
                name: "For You the Best Love",
                price: 347500,
                description: "Elegante caja negra con rosas rojas, girasoles y globo burbuja personalizado con mensaje especial y globitos internos. Arreglo sofisticado que combina la pasión de las rosas con la alegría de los girasoles. Un regalo premium inolvidable.",
                image: "../assets/foto132.webp",
                categories: ["cajas", "girasoles", "premium", "precio-alto"]
            },
            {
                id: 133,
                name: "I Will Always Be There for You",
                price: 235000,
                description: "Caja con rosas rosadas, gypsophila y globo burbuja personalizado con globitos rosados internos y mensaje especial. Incluye foto personalizada. Un detalle emotivo ideal para hermanas, amigas y personas especiales en tu vida.",
                image: "../assets/foto133.webp",
                categories: ["cajas", "precio-medio"]
            },
            {
                id: 134,
                name: "Mi Brillito de Sol",
                price: 210000,
                description: "Arreglo alegre con girasoles, astromelias, Ferrero Rocher y globo burbuja personalizado con globitos amarillos y dorados internos. Combinación vibrante que irradia felicidad y energía positiva. Perfecto para cumpleaños llenos de alegría.",
                image: "../assets/foto134.webp",
                categories: ["girasoles", "chocolates", "precio-medio"]
            },
            {
                id: 135,
                name: "Expresión de Amor",
                price: 150000,
                description: "Caja blanca elegante con claveles, astromelias, rosas rosadas, manzanilla y variedad de flores en tonos pasteles. Arreglo fresco y delicado que expresa amor con sutileza y elegancia. Perfecto para sorpresas cotidianas y fechas especiales.",
                image: "../assets/foto135.webp",
                categories: ["cajas", "precio-medio"]
            },
            {
                id: 136,
                name: "Amor a la Vista",
                price: 230000,
                description: "Caja con abundantes rosas rosadas, astromelias y flores en tonos rosa intenso con globo burbuja personalizado con globitos rosados metálicos internos. Arreglo exuberante y llamativo que conquista a primera vista. Ideal para cumpleaños memorables.",
                image: "../assets/foto136.webp",
                categories: ["cajas", "precio-medio"]
            },
            {
                id: 137,
                name: "Arreglo Fúnebre Sencillo",
                price: 68750,
                description: "Arreglo fúnebre sencillo con surtido de flores blancas incluyendo pompones, claveles, gypsophila y abundante follaje verde. Listón personalizado incluido. Un homenaje respetuoso y elegante en su sencillez.",
                image: "../assets/foto137.webp",
                categories: ["funebre", "precio-bajo"]
            },
            {
                id: 138,
                name: "Corona Fúnebre Te Amaré para Siempre",
                price: 337500,
                description: "Majestuosa corona fúnebre en trípode con base de pompones y claveles blancos, decorada con lirios orientales, rosas blancas y abundante follaje verde. Un tributo solemne y elegante que honra la memoria de quien partió.",
                image: "../assets/foto138.webp",
                categories: ["funebre", "premium", "precio-alto"]
            },
            {
                id: 139,
                name: "Corona Fúnebre Rosada",
                price: 312500,
                description: "Hermosa corona fúnebre en trípode con rosas rosadas, claveles rosados, pompones blancos, margaritas y lazo rosa decorativo. Una despedida llena de dulzura y amor. Ideal para honrar a mujeres especiales.",
                image: "../assets/foto139.webp",
                categories: ["funebre", "premium", "precio-alto"]
            },
            {
                id: 140,
                name: "Arreglo Fúnebre Surtido",
                price: 118750,
                description: "Arreglo fúnebre con surtido de flores amarillas y blancas incluyendo crisantemos, pompones y gypsophila con follaje verde y listón personalizado. Un homenaje cálido y luminoso que transmite paz y esperanza.",
                image: "../assets/foto140.webp",
                categories: ["funebre", "precio-bajo"]
            },
            {
                id: 141,
                name: "Cubre Caja en Forma de Cruz",
                price: 175000,
                description: "Elegante cubre caja en forma de cruz elaborado con rosas blancas, lirios orientales, claveles blancos y follaje verde. Un símbolo de fe y esperanza. Homenaje solemne y espiritual para despedir a un ser querido.",
                image: "../assets/foto141.webp",
                categories: ["funebre", "precio-medio"]
            },
            {
                id: 142,
                name: "Brillante a la Vista del Sol",
                price: 193750,
                description: "Arreglo fúnebre con girasoles radiantes, margaritas blancas y abundante follaje verde. Un tributo lleno de luz y esperanza que celebra la vida. Los girasoles simbolizan admiración y lealtad eterna.",
                image: "../assets/foto142.webp",
                categories: ["funebre", "girasoles", "precio-medio"]
            },
            {
                id: 143,
                name: "Siempre Estarás en Mi Corazón",
                price: 362500,
                description: "Elaborado arreglo fúnebre de dos niveles con portarretrato, rosas rosadas, lirios, gerberas, eucalipto y variedad de flores en tonos rosa, lila y amarillo. Un homenaje personalizado y emotivo que honra la memoria con amor.",
                image: "../assets/foto143.webp",
                categories: ["funebre", "premium", "precio-alto"]
            },
            {
                id: 144,
                name: "Luz de Paz",
                price: 368750,
                description: "Imponente corona fúnebre en trípode con pompones blancos, rosas blancas, claveles y gypsophila abundante. Toda en tonos blancos puros que transmiten paz y serenidad. Un tributo elegante y solemne.",
                image: "../assets/foto144.webp",
                categories: ["funebre", "pompones", "premium", "precio-alto"]
            },
            {
                id: 145,
                name: "Eterno Recuerdo",
                price: 247500,
                description: "Trípode fúnebre con rosas naranjas, lirios blancos, hortensias verdes y variedad de flores con listón personalizado. Combinación de colores cálidos que celebran la vida. Un homenaje distinguido y memorable.",
                image: "../assets/foto145.webp",
                categories: ["funebre", "precio-medio"]
            },
            {
                id: 146,
                name: "Cubre Caja 20 Rosas Blancas",
                price: 218750,
                description: "Elegante cubre caja con 20 rosas blancas, claveles blancos y abundante follaje verde. Diseño clásico y sobrio que transmite respeto y pureza. Un homenaje digno para despedir a un ser querido.",
                image: "../assets/foto146.webp",
                categories: ["funebre", "precio-medio"]
            },
            {
                id: 147,
                name: "Cubre Caja 50 Rosas Blancas",
                price: 243750,
                description: "Majestuoso cubre caja con 50 rosas blancas premium y follaje verde con lazo blanco. Un manto de pureza y elegancia que cubre con amor. El tributo más distinguido para una despedida solemne.",
                image: "../assets/foto147.webp",
                categories: ["funebre", "premium", "precio-medio"]
            },
            {
                id: 148,
                name: "Arreglo Fúnebre 40 Rosas",
                price: 231250,
                description: "Arreglo fúnebre con 40 rosas blancas, follaje verde abundante, palmas y lazo blanco con tarjeta personalizada. Un tributo elegante y generoso que expresa profundo respeto y cariño.",
                image: "../assets/foto148.webp",
                categories: ["funebre", "precio-medio"]
            },
            {
                id: 149,
                name: "Trípode Fúnebre",
                price: 262500,
                description: "Trípode fúnebre con lirios blancos, rosas blancas, claveles, pompones y follaje verde con listón personalizado y lazo blanco. Un tributo clásico y solemne que honra con dignidad y respeto.",
                image: "../assets/foto149.webp",
                categories: ["funebre", "precio-alto"]
            },
            {
                id: 150,
                name: "Fúnebre Elegante",
                price: 400000,
                description: "Imponente trípode fúnebre de gran tamaño con abundantes rosas blancas, gypsophila, palmas y follaje verde en cascada. El arreglo fúnebre más elegante y majestuoso. Un tributo premium para una despedida inolvidable.",
                image: "../assets/foto150.webp",
                categories: ["funebre", "premium", "precio-alto"]
            },
            {
                id: 151,
                name: "Corona Fúnebre Clásica",
                price: 275000,
                description: "Corona fúnebre clásica en trípode con base de pompones blancos, rosas blancas en la parte superior, gypsophila y follaje verde. Diseño tradicional y solemne que transmite respeto y paz eterna.",
                image: "../assets/foto151.webp",
                categories: ["funebre", "precio-alto"]
            },
            {
                id: 152,
                name: "Para Siempre en Mi Corazón",
                price: 312500,
                description: "Espectacular corona fúnebre en trípode con diseño yin-yang combinando pompones blancos y amarillos con gerberas rosadas y fucsia, rosas rojas, girasol y lirios. Una corona única y colorida que celebra la vida con amor.",
                image: "../assets/foto152.webp",
                categories: ["funebre", "gerberas", "premium", "precio-alto"]
            },
            {
                id: 153,
                name: "Corona Fúnebre sin Trípode",
                price: 225000,
                description: "Corona fúnebre sin trípode con base de pompones blancos y amarillos, rosas amarillas en la parte superior, follaje verde y listón personalizado. Diseño clásico y versátil para colocar sobre cualquier superficie.",
                image: "../assets/foto153.webp",
                categories: ["funebre", "precio-medio"],
                hidden: true
            },
            {
                id: 154,
                name: "Corona Fúnebre con Trípode",
                price: 262500,
                description: "Corona fúnebre tricolor en trípode con secciones de crisantemos amarillos, pompones blancos y rosas rojas con gypsophila, rodeada de abundante follaje verde y listón personalizado. Un tributo colorido y solemne.",
                image: "../assets/foto154.webp",
                categories: ["funebre", "precio-alto"]
            },
            {
                id: 155,
                name: "Cubre Caja Blanco",
                price: 122500,
                description: "Cubre caja fúnebre con pompones blancos, crisantemos, lirios y gypsophila abundante con listón personalizado. Arreglo sencillo y elegante en tonos blancos puros que transmite paz y serenidad.",
                image: "../assets/foto155.webp",
                categories: ["funebre", "precio-bajo"]
            },
            {
                id: 156,
                name: "Corona Fúnebre Premium",
                price: 437500,
                description: "Espectacular corona fúnebre en trípode con rosas blancas, orquídeas, girasoles, lirios amarillos y gypsophila. Combinación premium de flores selectas que honra con distinción y elegancia. Un tributo majestuoso e inolvidable.",
                image: "../assets/foto156.webp",
                categories: ["funebre", "girasoles", "premium", "precio-alto"]
            },
            {
                id: 157,
                name: "Arreglo Fúnebre Rojo y Blanco",
                price: 143750,
                description: "Arreglo fúnebre con crisantemos blancos, claveles rojos, palmas y follaje verde con listón personalizado. Combinación clásica de rojo y blanco que expresa amor y respeto eterno.",
                image: "../assets/foto157.webp",
                categories: ["funebre", "precio-bajo"]
            },
            {
                id: 158,
                name: "Cubre Caja Amarillo",
                price: 106250,
                description: "Cubre caja fúnebre con crisantemos amarillos, pompones blancos y follaje verde con listón personalizado. Un arreglo cálido y luminoso que transmite esperanza y recuerdos alegres.",
                image: "../assets/foto158.webp",
                categories: ["funebre", "precio-bajo"]
            },
            {
                id: 159,
                name: "Cruz Fúnebre con Rosas Rojas",
                price: 243750,
                description: "Imponente cruz fúnebre en trípode elaborada con pompones blancos, rosas rojas, gypsophila, eucalipto y follaje verde con lazo blanco. Símbolo de fe y amor eterno. Un tributo solemne y espiritual.",
                image: "../assets/foto159.webp",
                categories: ["funebre", "precio-medio"]
            },
            {
                id: 160,
                name: "Corona Corazón Rojo y Blanco",
                price: 247500,
                description: "Corona fúnebre en forma de corazón con rosas rojas, pompones blancos, gypsophila y lazo rojo decorativo en trípode. Un símbolo de amor eterno que honra la memoria con pasión y ternura.",
                image: "../assets/foto160.webp",
                categories: ["funebre", "precio-medio"]
            },
            {
                id: 161,
                name: "Corona Fúnebre de Rosas Rojas",
                price: 197500,
                description: "Corona fúnebre en trípode con rosas rojas, gypsophila y abundante follaje verde natural. Diseño orgánico y elegante que combina la pasión de las rosas con la frescura del verde. Un tributo único y distinguido.",
                image: "../assets/foto161.webp",
                categories: ["funebre", "precio-medio"]
            },
            {
                id: 162,
                name: "Trípode Fúnebre Surtido Blanco",
                price: 235000,
                description: "Elegante trípode fúnebre con hortensias blancas, rosas blancas, lirios, cartuchos, snapdragons y variedad de flores blancas premium con abundante follaje verde. Un homenaje distinguido y sofisticado.",
                image: "../assets/foto162.webp",
                categories: ["funebre", "premium", "precio-medio"]
            },
            {
                id: 163,
                name: "Bouquet 9 Tulipanes Eternos Amor",
                price: 119000,
                description: "Hermoso bouquet de 9 tulipanes eternos en tonos rosados y amarillos con letrero 'Amor', envuelto en papel coreano rosa con estampado de rosas. Incluye tarjeta personalizada. Un regalo duradero y romántico que nunca se marchita.",
                image: "../assets/foto163.webp",
                categories: ["tulipanes", "coreano", "precio-bajo"]
            },
            {
                id: 164,
                name: "Bouquet 16 Tulipanes Eternos Multicolor",
                price: 207000,
                description: "Espectacular bouquet de 16 tulipanes eternos en colores variados: rosados, amarillos, naranjas, morados, rojos, blancos y verdes. Envuelto en papel coreano rosa con lazo. Incluye tarjeta personalizada. Un arcoíris de tulipanes que dura para siempre.",
                image: "../assets/foto164.webp",
                categories: ["tulipanes", "premium", "coreano", "precio-medio"]
            },
            {
                id: 165,
                name: "Bouquet 5 Tulipanes Naturales Amarillos",
                price: 207000,
                description: "Elegante bouquet de 5 tulipanes naturales amarillos con gypsophila (nubes), envuelto en papel coreano rosa con detalles dorados de corazones. Incluye tarjeta personalizada. La frescura y belleza de los tulipanes naturales en su máxima expresión.",
                image: "../assets/foto165.webp",
                categories: ["tulipanes", "coreano", "precio-medio"],
                hidden: true
            },
            {
                id: 166,
                name: "Mini Bouquet 3 Tulipanes Eternos",
                price: 48000,
                description: "Encantador mini bouquet de 3 tulipanes eternos amarillos envueltos en papel negro con estampado dorado de corazones y la palabra 'Love'. Lazo amarillo decorativo. Detalle económico, elegante y duradero perfecto para sorprender.",
                image: "../assets/foto166.webp",
                categories: ["tulipanes", "precio-bajo"]
            },
            {
                id: 167,
                name: "Bouquet 9 Tulipanes Eternos Blancos",
                price: 122000,
                description: "Delicado bouquet de 9 tulipanes eternos blancos puros envueltos en papel coreano rosa con estampado de rosas y lazo blanco de satín. Elegancia y pureza en un arreglo que perdura en el tiempo. Perfecto para expresar amor sincero.",
                image: "../assets/foto167.webp",
                categories: ["tulipanes", "coreano", "precio-bajo"]
            },
            {
                id: 168,
                name: "Tulipanes Naturales con Clavel Rosado",
                price: 219000,
                description: "Bouquet sofisticado de 5 tulipanes naturales blancos combinados con abundantes claveles rosados, envuelto en papel coreano rosa con lazo de satín. Mezcla delicada de texturas y tonos que transmite ternura y distinción.",
                image: "../assets/foto168.webp",
                categories: ["tulipanes", "bouquets", "precio-medio"]
            },
            {
                id: 169,
                name: "Bouquet 10 Tulipanes Naturales Lila y Blanco",
                price: 257000,
                description: "Impresionante bouquet de 10 tulipanes naturales en tonos lila y blanco, envuelto en papel blanco con diseño exclusivo de la marca Flore y lazo lila. Frescura y elegancia premium en cada pétalo. Un regalo inolvidable.",
                image: "../assets/foto169.webp",
                categories: ["tulipanes", "premium", "precio-alto"]
            },
            {
                id: 170,
                name: "Tulipanes con Rosas y Hortensia",
                price: 232000,
                description: "Exquisito bouquet de 5 tulipanes rosados combinados con rosas rosadas y hortensia azul, envuelto en papel coreano lila. Una combinación única de colores pastel que transmite romanticismo y sofisticación. Arreglo premium para ocasiones especiales.",
                image: "../assets/foto170.webp",
                categories: ["tulipanes", "bouquets", "premium", "precio-medio"]
            },
            {
                id: 171,
                name: "Gran Bouquet Tulipanes y Flores Premium",
                price: 475000,
                description: "Majestuoso bouquet de 8 tulipanes eternos combinados con gerberas, rosas en tonos rosa, clavel rosado y abundante follaje. Envuelto en papel coreano rosa premium. El arreglo más completo y espectacular con tulipanes. Un regalo que deja sin palabras.",
                image: "../assets/foto171.webp",
                categories: ["tulipanes", "gerberas", "premium", "precio-alto"]
            },
            {
                id: 172,
                name: "Tulipanes con Rosas Rojas",
                price: 125000,
                description: "Bouquet romántico de 3 tulipanes rojos combinados con rosas rojas, follaje verde y tarjeta personalizada. Envuelto en papel coreano rosa con lazo rojo de satín. La pasión de las rosas y la elegancia de los tulipanes en un solo arreglo.",
                image: "../assets/foto172.webp",
                categories: ["tulipanes", "bouquets", "precio-bajo"],
                hidden: true
            },
            {
                id: 173,
                name: "Bouquet Tulipanes y Gerberas Rosadas",
                price: 175000,
                description: "Bouquet encantador de 2 tulipanes con gerberas y flores surtidas en tonalidades rosadas. Envuelto en papel coreano rosa y dorado con lazo rojo. Una explosión de color en tonos rosa que transmite alegría y cariño.",
                image: "../assets/foto173.webp",
                categories: ["tulipanes", "gerberas", "bouquets", "precio-medio"]
            },
            {
                id: 174,
                name: "Bouquet Tulipanes, Lirios y Gerberas",
                price: 188000,
                description: "Bouquet mixto espectacular de 2 tulipanes con 1 vara de lirios, gerberas, rosas y flores surtidas en tonos rosa. Envuelto en papel coreano rosa con lazo. Incluye tarjeta personalizada. Variedad floral premium en tonos cálidos.",
                image: "../assets/foto174.webp",
                categories: ["tulipanes", "lirios", "gerberas", "bouquets", "precio-medio"]
            },
            {
                id: 175,
                name: "Lirio con Rosas Rosadas y Fucsia",
                price: 100000,
                description: "Bouquet elegante con 1 vara de lirio rosado combinada con rosas en tonos rosados y fucsia. Envuelto en papel coreano rosa y dorado. Incluye tarjeta personalizada. Aroma exquisito y colores vibrantes en un arreglo compacto y sofisticado.",
                image: "../assets/foto175.webp",
                categories: ["lirios", "bouquets", "precio-bajo"]
            },
            {
                id: 176,
                name: "Gran Bouquet de Lirios y Flores Surtidas",
                price: 275000,
                description: "Impresionante bouquet de 5 lirios combinados con gerberas y flores surtidas en tonos rosa. Envuelto en papel coreano rosa. Un arreglo grande, fragante y espectacular que llena cualquier espacio de color y aroma. Regalo premium inolvidable.",
                image: "../assets/foto176.webp",
                categories: ["lirios", "gerberas", "premium", "precio-alto"]
            },
            {
                id: 177,
                name: "Bouquet 2 Varas de Lirio Surtido Rosa",
                price: 98000,
                description: "Bouquet fresco con 2 varas de lirio combinadas con flores surtidas en tono rosa, envuelto en papel coreano rosa y dorado con lazo fucsia. Incluye tarjeta personalizada. Aroma delicioso y colores vibrantes a un precio accesible.",
                image: "../assets/foto177.webp",
                categories: ["lirios", "bouquets", "precio-bajo"]
            },
            {
                id: 178,
                name: "Lirios con Clavel, Gerberas y Follaje",
                price: 125000,
                description: "Bouquet mixto de 2 varas de lirios rosados con clavel rosado, gerberas fucsia, gypsophila y abundante follaje verde. Envuelto en papel coreano rosa con lazo rosa. Variedad de texturas y colores en un arreglo fresco y aromático.",
                image: "../assets/foto178.webp",
                categories: ["lirios", "gerberas", "bouquets", "precio-bajo"]
            },
            {
                id: 179,
                name: "Lirios con Clavel Rosado",
                price: 82000,
                description: "Bouquet delicado de 2 lirios rosados combinados con clavel rosado, envuelto en papel coreano rosa y mármol dorado con lazo rosa. Un arreglo fragante y romántico a un precio accesible. Perfecto para detalles espontáneos llenos de aroma.",
                image: "../assets/foto179.webp",
                categories: ["lirios", "bouquets", "precio-bajo"]
            },
            {
                id: 180,
                name: "Bouquet 3 Varas de Lirios y Rosas",
                price: 110000,
                description: "Elegante bouquet de 3 varas de lirios blancos y rosados con rosas rosadas y flores surtidas en tonos rosados. Envuelto en papel coreano rosa. Combinación aromática y delicada que transmite amor y dulzura con estilo.",
                image: "../assets/foto180.webp",
                categories: ["lirios", "bouquets", "precio-bajo"]
            },
            {
                id: 181,
                name: "Gran Bouquet 8 Lirios y 40 Rosas con Listón",
                price: 343000,
                description: "Espectacular bouquet de 8 varas de lirios rosados con 40 rosas en tonos rosa y blanco, listón personalizado '¿Quieres ser mi novia?'. Envuelto en papel coreano rosa con margaritas. El arreglo más impactante para propuestas y declaraciones de amor.",
                image: "../assets/foto181.webp",
                categories: ["lirios", "premium", "precio-alto"]
            },
            {
                id: 182,
                name: "Bouquet 24 Rosas y 5 Lirios con Listón",
                price: 244000,
                description: "Majestuoso bouquet de 24 rosas en tonos rosados y fucsia con 5 lirios rosados y listón personalizado '¿Quieres ser mi san valentín?'. Envuelto en papel con mariposas. Arreglo romántico perfecto para declaraciones de amor y ocasiones inolvidables.",
                image: "../assets/foto182.webp",
                categories: ["lirios", "premium", "precio-medio"]
            },
            {
                id: 183,
                name: "Lirios y Girasoles con Globo Cumpleaños",
                price: 175000,
                description: "Espectacular arreglo de 4 varas de lirios blancos con 2 girasoles, rosas mini rosadas y flores surtidas, envuelto en papel coreano rosa y dorado. Incluye globo corazón personalizado 'Feliz Cumpleaños' y tarjeta. El regalo perfecto para celebrar.",
                image: "../assets/foto183.webp",
                categories: ["lirios", "girasoles", "bouquets", "precio-medio"]
            },
            {
                id: 184,
                name: "Gran Bouquet 10 Lirios y Clavel Rosado",
                price: 275000,
                description: "Impresionante bouquet de 10 lirios en tonos blancos, amarillos y rosados combinados con claveles rojos y rosados, gypsophila y abundante follaje. Envuelto en papel coreano rosa y dorado con lazo rosa. Un arreglo majestuoso y fragante.",
                image: "../assets/foto184.webp",
                categories: ["lirios", "premium", "precio-alto"]
            },
            {
                id: 185,
                name: "Bouquet Lirios y Clavel Surtido",
                price: 85000,
                description: "Bouquet fresco de 2 varas de lirios blancos con claveles rosados y fucsia, alstroemerias y flores surtidas. Envuelto en papel coreano rosa y dorado con lazo rosa. Incluye tarjeta personalizada. Variedad floral a un precio accesible.",
                image: "../assets/foto185.webp",
                categories: ["lirios", "bouquets", "precio-bajo"]
            },
            {
                id: 186,
                name: "Caja Lirios y Rosas con Globo Aniversario",
                price: 182000,
                description: "Elegante caja rosa con 6 varas de lirios rosados, rosas rosadas, 4 Ferrero Rocher, gypsophila y follaje verde. Coronada con globo burbuja personalizado 'Feliz Aniversario'. Un regalo romántico y completo para celebrar el amor.",
                image: "../assets/foto186.webp",
                categories: ["lirios", "cajas", "chocolates", "precio-medio"]
            },
            {
                id: 187,
                name: "Bouquet Lirios, Gerberas y Ferrero",
                price: 157000,
                description: "Bouquet colorido de 2 varas de lirios rosados con gerberas fucsia, claveles, gladiolos, flores moradas y 3 Ferrero Rocher. Envuelto en papel rosa y dorado con lazo rosa. Incluye tarjeta personalizada. Flores y chocolates en un solo detalle.",
                image: "../assets/foto187.webp",
                categories: ["lirios", "gerberas", "chocolates", "bouquets", "precio-medio"]
            },
            {
                id: 188,
                name: "Bouquet Graduación Lirios y Gerberas",
                price: 98000,
                description: "Bouquet especial de graduación con 2 varas de lirios, gerbera, claveles, alstroemerias y flores surtidas en tonos rosa. Incluye birrete decorativo. Envuelto en papel coreano rosa con lazo. El detalle ideal para celebrar logros académicos.",
                image: "../assets/foto188.webp",
                categories: ["lirios", "gerberas", "bouquets", "precio-bajo"]
            },
            {
                id: 189,
                name: "Bouquet Lirios y Rosas con Peluche Stitch Graduado",
                price: 219000,
                description: "Bouquet encantador de 2 varas de lirios blancos con rosas rosadas, gypsophila, eucalipto y follaje verde. Incluye peluche Stitch con birrete de graduación. Envuelto en papel coreano rosa. Regalo tierno y especial para graduaciones.",
                image: "../assets/foto189.webp",
                categories: ["lirios", "bouquets", "premium", "precio-medio"]
            },
            {
                id: 190,
                name: "Gran Bouquet Lirios Premium con Peluche Snoopy",
                price: 288000,
                description: "Majestuoso bouquet de 4 varas de lirios blancos con gerberas, claveles, rosas y flores surtidas en tonos rosa. Incluye peluche Snoopy con lazo rosa. Envuelto en papel coreano rosa. El regalo más completo y tierno para sorprender.",
                image: "../assets/foto190.webp",
                categories: ["lirios", "gerberas", "premium", "precio-alto"]
            },
            {
                id: 191,
                name: "Mini Bouquet Lirios con Globo Cumpleaños",
                price: 82000,
                description: "Delicado mini bouquet de 2 lirios blancos con clavel rosado, envuelto en papel coreano rosa con lazo. Incluye globo metalizado 'Feliz Cumpleaños' y tarjeta personalizada. Un detalle dulce y accesible para celebrar con cariño.",
                image: "../assets/foto191.webp",
                categories: ["lirios", "bouquets", "precio-bajo"]
            },
            {
                id: 192,
                name: "Encanto Primaveral",
                price: 218750,
                description: "Hermoso bouquet mixto con rosas rosadas, tulipanes naranjas y amarillos, lirio rosado, rosa blanca, mini rosas y bayas rojas decorativas. Envuelto en papel coreano rosa con lazo satinado. Incluye tarjeta personalizada. Combinación fresca y vibrante que transmite alegría y romanticismo.",
                image: "../assets/foto192.webp",
                categories: ["bouquets", "tulipanes", "lirios", "coreano", "precio-medio"]
            },
            {
                id: 193,
                name: "Mini Bouquet Tulipanes y Claveles",
                price: 100000,
                description: "Delicado mini bouquet con 2 tulipanes rosados acompañados de mini claveles blancos con detalles burdeos y eucalipto fresco. Envuelto en elegante papel crema con lazo blanco satinado. Un detalle sencillo, fresco y romántico perfecto para sorpresas espontáneas.",
                image: "../assets/foto193.webp",
                categories: ["tulipanes", "bouquets", "precio-bajo"]
            },
            {
                id: 194,
                name: "Romance en Tonos Pastel",
                price: 243750,
                description: "Exquisito bouquet premium con rosas en tono durazno y salmón, tulipanes en tonos vino y blancos, hortensia lila, claveles rosados y abundante follaje verde. Envuelto en papel coreano rosa con tarjeta personalizada. Una combinación sofisticada de texturas y tonos pastel ideal para ocasiones especiales.",
                image: "../assets/foto194.webp",
                categories: ["bouquets", "tulipanes", "premium", "precio-medio"]
            }
        ];

// --- VARIABLES GLOBALES ---
let currentLandingFilter = 'todos';
let currentSearchQuery = '';
let LANDING_PRIORITY_TAG = '';

// --- GENERAR CÓDIGO DE PRODUCTO ---
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
    products.filter(p => !p.hidden).forEach(p => {
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
    let productsToDisplay = products.filter(p => !p.hidden);

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

    // Intercalar productos para variedad visual (solo en vista general sin búsqueda)
    if ((!filters.length || filters[0] === 'todos') && !currentSearchQuery) {
        const funebre = productsToDisplay.filter(p => p.categories.includes('funebre'));
        const noFunebre = productsToDisplay.filter(p => !p.categories.includes('funebre'));

        const categoryGroups = {};
        const categoryOrder = ['bouquets', 'cajas', 'canastas', 'girasoles', 'gerberas', 'pompones', 'rosas-eternas', 'coreano', 'novia', 'chocolates', 'premium'];

        noFunebre.forEach(p => {
            const mainCat = categoryOrder.find(c => p.categories.includes(c)) || 'otros';
            if (!categoryGroups[mainCat]) categoryGroups[mainCat] = [];
            categoryGroups[mainCat].push(p);
        });

        Object.values(categoryGroups).forEach(group => {
            group.sort((a, b) => a.price - b.price);
            const temp = [];
            let lo = 0, hi = group.length - 1;
            let pickHigh = true;
            while (lo <= hi) {
                if (pickHigh) { temp.push(group[hi--]); }
                else { temp.push(group[lo++]); }
                pickHigh = !pickHigh;
            }
            group.length = 0;
            group.push(...temp);
        });

        const interleaved = [];
        const activeCats = categoryOrder.filter(c => categoryGroups[c] && categoryGroups[c].length > 0);
        if (categoryGroups['otros'] && categoryGroups['otros'].length > 0) activeCats.push('otros');

        let maxLen = Math.max(...activeCats.map(c => categoryGroups[c].length));
        for (let i = 0; i < maxLen; i++) {
            for (const cat of activeCats) {
                if (categoryGroups[cat] && i < categoryGroups[cat].length) {
                    interleaved.push(categoryGroups[cat][i]);
                }
            }
        }

        productsToDisplay = [...interleaved, ...funebre];
    }

    container.innerHTML = '';
    productsToDisplay.forEach(product => {
        const escapedName = product.name.replace(/'/g, "\\'");
        const code = getProductCode(product.id);
        const productHTML = `
            <div class="product-item">
                <div class="product-image" style="position:relative;">
                    <span class="product-code-badge" style="position:absolute;top:0.7rem;left:0.7rem;background:rgba(0,0,0,0.65);color:#fff;padding:0.3rem 0.7rem;border-radius:6px;font-size:0.75rem;font-weight:700;letter-spacing:0.5px;z-index:2;font-family:'Poppins',sans-serif;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);">${code}</span>
                    <img src="${product.image}" alt="${product.name} - Flores a domicilio Ibagué" loading="lazy">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-footer">
                        <span class="price">${formatCOP(product.price)}</span>
                        <button class="btn-order" onclick="orderWA('${code} - ${escapedName}', '${product.price}')">
                            Pedir por WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}

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

function orderWA(productName, price) {
    const message = `Hola, me interesa ${productName} (${formatCOP(parseFloat(price))}). ¿Podrías darme más información?`;
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
