// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';
import sitemap from '@astrojs/sitemap';

const googleAnalyticsId = import.meta.env.PUBLIC_GOOGLE_ANALYTICS_ID || 'G-7FBCL4YV9X';

export default defineConfig({
  site: 'https://transparencia.asinfinity.org',
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: 'Transparencia y Buen Gobierno',
      logo: {
        replacesTitle: true,
        light: './src/assets/logo-light.svg',
        dark: './src/assets/logo-dark.svg',
        alt: 'Logotipo Infinity Transparencia'
      },
      defaultLocale: 'root',
      locales: {
        root: {
          lang: 'es',
          label: 'Español',
        },
      },
      social: [
        { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/asociacion.infinity/' },
        { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/ASOInfinity/' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://es.linkedin.com/company/asociaci%C3%B3n-solidaria-infinity' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/InfinitySourceCode/transparencia' },
      ],
      sidebar: [
        {
          label: 'Información institucional',
          items: [
            { label: '¿Quiénes somos?', link: '/informacion-institucional/quienes-somos/' },
            { label: 'Certificaciones Oficiales', link: '/informacion-institucional/certificaciones-oficiales/' },
          ],
        },
        {
          label: 'Información organizativa',
          items: [
            { label: 'Organigrama y Estatutos', link: '/informacion-organizativa/organigrama-y-estatutos/' },
            { label: 'Normativa aplicable a la entidad', link: '/informacion-organizativa/normativa-aplicable/' },
            { label: 'Funciones y competencias', link: '/informacion-organizativa/funciones-y-competencias/' },
          ],
        },
        {
          label: 'Administradores y directivos',
          items: [
            { label: 'Administradores y cargos directivos', link: '/informacion-sobre-administradores-y-directivos/administradores-y-cargos-directivos' },
            { label: 'Nombramientos y retribuciones', link: '/informacion-sobre-administradores-y-directivos/nombramientos-y-retribuciones' },
          ],
        },
        {
          label: 'Servicios y procedimientos',
          items: [
            { label: 'Política de transparencia', link: '/informacion-de-servicios-y-procedimientos/politica-de-transparencia/' },
            { label: 'Política de accesibilidad', link: '/informacion-de-servicios-y-procedimientos/politica-de-accesibilidad/' },
            { label: 'Política anticorrupción', link: '/informacion-de-servicios-y-procedimientos/politica-anticorrupcion/' },
            { label: 'Código de ética y conducta', link: '/informacion-de-servicios-y-procedimientos/codigo-de-etica-y-conducta/' },
            { label: 'Canal de Denuncia', link: '/informacion-de-servicios-y-procedimientos/canal-de-denuncia' },
          ],
        },
        {
          label: 'Información económica y financiera',
          items: [
            { label: 'Resultados económicos', link: '/informacion-economica-y-financiera/resultados-economicos' },
          ],
        },
        {
          label: 'Información de contratos y convenios',
          items: [
            { label: 'Información de contratos', link: '/informacion-de-contratos-y-convenios/informacion-de-contratos' },
            { label: 'Información de convenios', link: '/informacion-de-contratos-y-convenios/informacion-de-convenios' },
          ],
        },
        {
          label: 'Información de ayudas y subvenciones',
          items: [
            { label: 'Ayudas y subvenciones', link: '/informacion-de-ayudas-y-subvenciones/ayudas-y-subvenciones', badge: 'WIP' },
          ],
        },
      ],
      head: [
        // Google Analytics con categoría para bloqueo
        {
          tag: 'script',
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
            async: true,
            'data-cookiecategory': 'analytics',
          },
        },
        {
          tag: 'script',
          attrs: {
            'data-cookiecategory': 'analytics',
          },
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `,
        },
      ],
      customCss: ['/src/styles/custom.css'],
      components: {
        SiteTitle: './src/components/SiteTitle.astro', // Sobrescribe solo SiteTitle
      },
    }),
    sitemap(),
  ],
});