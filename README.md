# 🌐 Portal de Transparencia  
**Asociación Solidaria Infinity**

Este repositorio contiene el **código fuente abierto del Portal de Transparencia** de la [Asociación Solidaria Infinity](https://transparencia.asinfinity.org), una entidad sin ánimo de lucro comprometida con la inclusión, la ética y el buen gobierno.

El portal facilita el acceso público a la información institucional, organizativa, económica y de gestión de la Asociación, en cumplimiento de la [Ley 19/2013, de Transparencia, Acceso a la Información Pública y Buen Gobierno](https://www.boe.es/buscar/doc.php?id=BOE-A-2013-12887) y la [Ley Canaria 12/2014, de Transparencia y Acceso a la Información Pública](https://www.boe.es/eli/es-cn/l/2014/12/26/12).

---

## 🧩 Tecnologías utilizadas

El portal está desarrollado utilizando un conjunto de tecnologías modernas, accesibles y sostenibles:

- ⚡ **[Astro](https://astro.build/)** — Framework de desarrollo estático, rápido y ligero.  
- 📘 **[Starlight](https://starlight.astro.build/)** — Sistema de documentación basado en Astro, diseñado para sitios claros, accesibles y bien estructurados.  
- 💠 **[Rapide Theme](https://github.com/HiDeoo/starlight-theme-rapide)** — Tema visual optimizado para Starlight, con componentes modernos y alta legibilidad.  
- 🧱 **Markdown / MDX** — Lenguaje de contenido que permite mezclar texto y componentes interactivos.  
- 🚀 **[GitHub Pages](https://pages.github.com/)** — Entorno de despliegue continuo y gratuito.  

El portal sigue las **pautas de accesibilidad WCAG 2.1** y cumple el **Real Decreto 1112/2018** sobre accesibilidad web en el sector público.

---

## ⚙️ Entorno de desarrollo

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** versión 20 o superior  
- **pnpm** como gestor de paquetes

Si deseas adaptar el portal a tu organización o colaborar en su mejora, realiza un **fork** de este repositorio y utiliza los siguientes comandos:

```bash
pnpm install     # Instala las dependencias
pnpm dev         # Inicia el servidor de desarrollo
```

Podrás acceder al sitio en: http://localhost:4321
Para compilar la versión de producción:
bashpnpm build
El resultado se genera en la carpeta dist/, lista para desplegarse en GitHub Pages o cualquier otro hosting estático.

💡 Reutilización y colaboración
Este proyecto es de código abierto.
Cualquier entidad sin ánimo de lucro, fundación u organización social puede reutilizar, adaptar o mejorar este portal como modelo para su propio sistema de transparencia.

🧩 Realiza un fork para adaptarlo a tu entidad.
💬 Envía Pull Requests con mejoras o correcciones.
📄 Consulta la estructura de contenidos en la carpeta /src/content/docs.
📫 Contacta con el equipo técnico en coders@asinfinity.org.

Tu participación contribuye a fortalecer la cultura de rendición de cuentas y gobierno abierto.

🔗 Enlaces útiles

🌍 Portal en producción: https://transparencia.asinfinity.org
⚡ Astro Framework: https://astro.build
📘 Starlight: https://starlight.astro.build
💠 Rapide Theme: https://github.com/HiDeoo/starlight-theme-rapide
🔎 Accesibilidad WCAG 2.1 (W3C): https://www.w3.org/WAI/standards-guidelines/wcag