import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';
import transformSvg from './svg/transform';

import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit(),
        ViteSvgSpriteWrapper({
            icons: './src/icons/*.svg',
            outputDir: './src/sprite/',
        }),
        transformSvg({
            icons: './src/sprite/sprite.svg',
            outputUrlPath: '/src/icons',
        }),
    ],
});

