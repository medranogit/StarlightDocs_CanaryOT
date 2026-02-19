// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import orama from '@orama/plugin-astro';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [
        mermaid(),
        starlight({
        title: 'My Docs',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Introdução',
                autogenerate: { directory: 'introducao' },
            },
            {
                label: 'Building',
                autogenerate: { directory: 'building' },
            },
            {
                label: 'Funções Globais',
                autogenerate: { directory: 'funcoesGlobais' },
            },
            {
                label: 'OTCanary',
                autogenerate: { directory: 'otcanary' },
            },
        ],
		}), mdx()],
});