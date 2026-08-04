# Portfolio profesional — Gabriel Ivan Ferreyra

Portfolio estático bilingüe (ES/EN) desarrollado con HTML, CSS y JavaScript puro.

## Características

- Diseño **Neumorphism** responsive.
- Selector de idioma ES / EN con persistencia en `localStorage`.
- Navegación móvil accesible.
- SEO: Open Graph, Twitter Card, canonical, JSON-LD, `robots.txt` y `sitemap.xml`.
- Accesibilidad: enlace para saltar al contenido, foco visible, ARIA, navegación por teclado y soporte para `prefers-reduced-motion`.
- Descarga de CV.
- Vista ampliada del certificado de Microsoft 365.

## Estructura

```text
portfolio-ivan/
├── index.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
└── assets/
    ├── favicon.svg
    ├── social-preview.png
    ├── Gabriel-Ivan-Ferreyra-CV.pdf
    └── certificado-microsoft-365.png
```

## Publicación en GitHub Pages

1. Reemplazar los archivos de la rama `main` por los incluidos en este paquete.
2. Mantener exactamente los nombres y la estructura de carpetas.
3. En GitHub: **Settings → Pages → Deploy from a branch → main / root**.
4. Esperar unos minutos y recargar `https://mrscrlk.github.io/portfolio-ivan/`.

## Actualizar el CV o certificado

Para actualizar esos documentos sin tocar el código, reemplazar los archivos dentro de `assets/` conservando los nombres:

- `Gabriel-Ivan-Ferreyra-CV.pdf`
- `certificado-microsoft-365.png`

## Editar traducciones

Todos los textos bilingües están en el objeto `translations` dentro de `script.js`.
