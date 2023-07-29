import p from 'path';

import type { Config as SvgoOptimizeOptions } from 'svgo';
import type { Plugin } from 'vite';

const { stringify } = JSON;

export type { SvgoOptimizeOptions };
export interface SvgSpriteOptions {
    icons: string;
    outputUrlPath: string;
}

export default (options: SvgSpriteOptions) => {
    const match = options.icons;
    const plugin: Plugin = {
        name: 'svg-sprite',

        async transform(src, filepath) {
            if (!filepath.includes(match)) {
                return undefined;
            }
            const { name } = p.parse(filepath);
            const codeToReturn = `
            export default {
                id: ${stringify(name)},
                viewBox: "0 0 20 20",
                url: "${options.outputUrlPath}/sprite.svg#${name}"
            };`;

            return {
                code: codeToReturn,
                map: { mappings: '' },
            };
        },
    };

    return plugin;
};

