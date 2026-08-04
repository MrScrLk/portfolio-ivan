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

## Actualizar el CV o certificado

Para actualizar esos documentos sin tocar el código, debo reemplazar los archivos dentro de `assets/` conservando los nombres:

- `Gabriel-Ivan-Ferreyra-CV.pdf`
- `certificado-microsoft-365.png`

## Editar traducciones

Todos los textos bilingües están en el objeto `translations` dentro de `script.js`.
