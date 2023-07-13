import { terser } from 'rollup-plugin-terser';              // Remove comments, minify
import { visualizer } from 'rollup-plugin-visualizer';      // Visualize
import cleanup from 'rollup-plugin-cleanup';                // Remove comments, supports sourcemap
import postcss from 'rollup-plugin-postcss';                // Include CSS
import image from '@rollup/plugin-image';                   // Include Images

function header() {
	return {
		renderChunk(code) {
			return `/**
 * @description Osui
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2021-2023 Stephens Nunnally
 * @source      https://github.com/onsightengine/osui
 * @version     v0.1.18
 */
${code}`;
        }
    };
}

const builds = [

    { // Standard
        input: './src/Osui.js',
        treeshake: false,
        external: p => /^three/.test(p),

        plugins: [
            cleanup({
                comments: "none",
                extensions: [ "js", "ts" ],
                sourcemap: false,
            }),
            header(),
            postcss({
                extensions: [ '.css' ],
            }),
            image(),
        ],

        output: [{
            format: 'esm',
            file: './build/osui.module.js',
            sourcemap: false,
        }],
    },

    { // Minified
        input: './src/Osui.js',
        treeshake: false,
        external: p => /^three/.test(p),

        plugins: [
            header(),
            visualizer(),
            postcss({
                extensions: [ '.css' ],
            }),
            image(),
        ],

        output: [{
            format: 'esm',
            file: './build/osui.min.js',
            sourcemap: false,
            plugins: [
                terser({ format: { comments: false } }),
            ],
        }],
    },

];

export default builds;
