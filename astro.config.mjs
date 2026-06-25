// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ursa Major',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kaeden-bryer/Ursa-Major' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'getting-started'} }]
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'Timeline', slug: 'guides/timeline'}
					],
				},
				{
					label: 'Logistics',
					items: [
						'logistics/about-logistics'
					],
				},
				{
					label: 'Sponsorship',
					items: [
						'sponsorship/about-sponsorships',
						'sponsorship/warm-leads',
						'sponsorship/previous-sponsors'
					],
				},
				{
					label: 'Budgeting',
					items: [
						'budgeting/about-budgeting'
					],
				},
				{
					label: 'Marketing',
					items: [
						'marketing/about-marketing'
					],
				},
				{
					label: 'Design',
					items: [
						'design/about-design'
					],
				},
				{
					label: 'Tech',
					items: [
						'tech/about-tech'
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
