# ChocAra - Sitio Web Estático

Sitio web de una sola página para ChocAra, desarrollado con HTML, CSS y JavaScript puro.

## Estructura del proyecto

```text
chocara-website/
├── index.html
├── style.css
├── script.js
└── assets/
   ├── logo-name-only.png
   ├── logo-leaves-only.png
   ├── chocara-pointer.png
    ├── hero.jpg
    ├── products/
    │   ├── alfajores.jpg
    │   ├── postres.jpg
   │   ├── almuerzo.jpg
   │   └── congelados.jpg
    └── space/
        ├── espacio1.jpg
        ├── espacio2.jpg
        └── espacio3.jpg
```

## Reemplazo de imágenes placeholder

1. Mantené los mismos nombres de archivo indicados en `assets/`.
2. Reemplazá cada imagen por tu archivo final sin cambiar rutas ni nombres.
3. Recomendación de tamaños:
   - `hero.jpg`: mínimo 1920x1080.
   - `products/*.jpg`: alrededor de 1200x800.
   - `space/*.jpg`: alrededor de 1400x1000.
   - `logo-name-only.png`: alrededor de 760x200, fondo transparente.
   - `logo-leaves-only.png`: alrededor de 128x128 para favicon.
   - `chocara-pointer.png`: 32x32 para cursor personalizado.

## Vista previa local

1. Abrí `index.html` directamente en el navegador.
2. Opcional: usá una extensión de servidor local en VS Code para recarga automática.

## Deploy en GitHub Pages

1. Creá un repositorio en GitHub y subí estos archivos a la rama principal (`main`).
2. En GitHub, abrí `Settings` > `Pages`.
3. En `Build and deployment`, seleccioná:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` y carpeta `/ (root)`
4. Guardá los cambios.
5. Esperá a que GitHub publique el sitio y abrí la URL generada por Pages.

## Notas

- No requiere npm, build tools ni dependencias adicionales.
- Compatible con hosting estático, incluyendo GitHub Pages.
