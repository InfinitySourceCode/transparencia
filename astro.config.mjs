// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					lang: 'es',
					label: 'Español',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Bienvenidos',
					autogenerate: { directory: 'bienvenidos' },
				},
				{
					label: 'Información institucional',
					autogenerate: { directory: 'informacion-institucional' },
				},
				{
					label: 'Información Organizativa',
					autogenerate: { directory: 'informacion-organizativa' },
				},
				{
					label: 'Administradores y directivos',
					autogenerate: { directory: 'informacion-administradores-y-directivos' },
				},
				{
					label: 'Servicios y procedimientos',
					autogenerate: { directory: 'informacion-de-servicios-y-procedimientos' },
				},
				{
					label: 'Información económica y financiera',
					autogenerate: { directory: 'informacion-economica-y-financiera' },
				},
				{
					label: 'Información de contratos',
					autogenerate: { directory: 'informacion-de-contratos'},
				},
				{
					label: 'Información de ayudas y subvenciones',
					autogenerate: { directory: 'informacion-de-ayudas-y-subvenciones' },
				}
			],
		}),
	],
});
