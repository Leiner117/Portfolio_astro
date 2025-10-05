import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://leineralvarado.dev',
    server: {
        host: true,
        port: 4321
    },
    vite: {
        server: {
            allowedHosts: ['leineralvarado.dev', 'localhost', '127.0.0.1']
        }
    }
});
