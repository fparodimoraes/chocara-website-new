# ChocAra - Sitio Web

Sitio estático de ChocAra, restaurante y pastelería 100% sin TACC en Montevideo.

## Stack

- HTML5 semántico
- CSS3 responsive
- JavaScript vanilla
- Lenis vía CDN para smooth scroll

No usa npm, bundlers ni build step.

## Contenido actual

- Hero principal con CTA de compra y acceso rápido a opciones de pedido
- Navegación responsive con barra fija
- Promo strip de novedades
- Sección de plataformas de compra
- Productos destacados
- Premios internacionales
- Secciones institucionales, local, contacto y pagos
- Metadatos SEO base: canonical, Open Graph, Twitter Card y JSON-LD

## Estructura

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
├── assets/
│   ├── awards/
│   ├── gallery/
│   ├── products/
│   └── space/
└── images/
```

`assets/` contiene los archivos optimizados usados por el sitio.

`images/` está ignorado por git y puede usarse para material fuente local.

## Vista previa local

1. Abrí `index.html` en el navegador.
2. Opcional: usá Live Server en VS Code para recarga automática.

## Deploy en GitHub Pages

1. Publicá el contenido en la rama `main`.
2. En GitHub, abrí `Settings > Pages`.
3. En `Build and deployment`:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` y carpeta `/(root)`
4. Si usás dominio propio, configurá `chocara.com` en Pages y activá `Enforce HTTPS`.

## Mantenimiento rápido

- Cambiar el logo del hero: editar el bloque `picture` en `index.html`.
- Cambiar la promo strip: editar el texto y link en `.promo-strip` dentro de `index.html`.
- Cambiar productos o premios: reemplazar archivos en `assets/products/` o `assets/awards/` manteniendo nombres o actualizar las referencias HTML.
- Revisar SEO: validar canonical, Open Graph, Twitter y el bloque JSON-LD en `index.html`.

## Licencia

Este repositorio es propietario. Ver `LICENSE`.
