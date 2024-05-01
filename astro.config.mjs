import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
    site: "https://everiuss.github.io/Yerena/",
<<<<<<< HEAD
    output: 'static',
    outDir: './docs',
    build: {
        assets: 'astro'
    },
    //base: '/Yerena/', // Establece la ruta base
=======
    base: '/Yerena/', // Establece la ruta base
>>>>>>> 9d02985d421ac1eea077da39c1fb5248dcd2f2ed
    vite: {
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"]
        },
        ssr: {
            external: ["svgo"]
        }
    },
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp"
        }),
        prefetch(),
        react()
    ]
});
