# ChocAra - Sitio Web

Landing page estática de ChocAra (restaurante y pastelería sin TACC), construida con HTML, CSS y JavaScript vanilla.

## Stack

- HTML5 semántico
- CSS3 (animaciones, layout responsive, diseño visual)
- JavaScript vanilla
- Lenis (vía CDN) para smooth scroll

No usa npm, bundlers ni build step.

## Estado actual del sitio

Incluye:

- Hero con logo SVG blanco, overlay, CTA principal y CTA secundario.
- Navbar fija con estado shrink en scroll y menú responsive.
- Promo strip de novedades persistente bajo la navbar.
- Quick facts encima del contenido principal (dirección, horarios, WhatsApp).
- Sección Como Queres Pedir con accesos a Tienda, Viandas e Instagram.
- Sección Productos con fotos reales optimizadas.
- Sección Premios con medallas reales (Golden Chef, Mundial del Alfajor, Feria Internacional).
- Secciones Nosotros, Local/Contacto y medios de pago.
- SEO técnico base (canonical, Open Graph, Twitter Card y JSON-LD tipo Restaurant).

## Estructura del proyecto

```text
chocara-website/
├── index.html
├── style.css
├── script.js
├── README.md
├── chocara-logo-white.svg
├── assets/
│   ├── hero.jpg
│   ├── favicon-sello.png
│   ├── chocara-pointer.png
│   ├── products/
│   │   ├── alfajores.jpg
│   │   ├── postres.jpg
│   │   ├── almuerzo.jpg
│   │   └── congelados.jpg
│   ├── awards/
│   │   ├── alfabrownie.jpg
│   │   ├── golden-chef-dulce.png
│   │   ├── golden-chef-restaurant.png
│   │   ├── mejor-textura-bronce.png
│   │   └── feria-internacional-2025.png
│   ├── gallery/
│   ├── space/
│   └── logos...
└── images/
      ├── alfajores/
      ├── desserts/
      └── dishes/
```

Notas:

- assets/ contiene archivos optimizados para producción web.
- images/ contiene material fuente de fotos (insumo para futuras optimizaciones).
- En la raíz también hay algunos assets originales importados durante iteraciones de diseño.

## Vista previa local

1. Abrí index.html en el navegador.
2. Opcional: usá Live Server en VS Code para recarga automática.

## Deploy en GitHub Pages

1. Subí el contenido a la rama main.
2. En GitHub: Settings > Pages.
3. En Build and deployment:
    - Source: Deploy from a branch
    - Branch: main y carpeta /(root)
4. Guardá y esperá la publicación.

## Mantenimiento rápido

- Cambiar logo del hero:
   - Editar el source SVG en el bloque picture dentro de index.html.
- Cambiar novedad de la promo strip:
   - Editar el texto y link en el bloque .promo-strip de index.html.
- Cambiar productos o premios:
   - Reemplazar imágenes en assets/products y assets/awards manteniendo nombres.
- Revisar SEO:
   - Validar canonical/OG/Twitter y el JSON-LD en head de index.html.

## Recomendaciones de assets

- Hero: 1920x1080 aproximado, JPG progresivo.
- Productos: alrededor de 1200x800, compresión visualmente limpia.
- Medallas: PNG con transparencia, entre 500px y 700px de lado.
- Logo hero SVG: preferido cuando haya versión vectorial disponible.
