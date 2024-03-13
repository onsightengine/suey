import cleanup from 'rollup-plugin-cleanup';                // Remove comments, supports sourcemap
import postcss from 'rollup-plugin-postcss';                // Include CSS
import image from '@rollup/plugin-image';                   // Include Images
import json from '@rollup/plugin-json';                     // Import JSON
import terser from '@rollup/plugin-terser';                 // Remove comments, minify

import pkg from './package.json';

function header() {
    return {
        renderChunk(code) {
            return `/**
 * @description Suey
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/suey
 * @version     v${pkg.version}
 */
${code}`;
        }
    };
}

const builds = [

    { // Standard
        input: './src/Suey.js',
        treeshake: false,

        plugins: [
            cleanup({
                comments: 'none',
                extensions: [ 'js', 'ts' ],
                sourcemap: false,
            }),
            header(),
            json(),
            postcss({
                extensions: [ '.css' ],
            }),
            image(),
        ],

        output: [{
            format: 'esm',
            file: './build/suey.module.js',
            sourcemap: false,
        }],
    },

    { // Minified
        input: './src/Suey.js',
        treeshake: false,

        plugins: [
            header(),
            json(),
            postcss({
                extensions: [ '.css' ],
            }),
            image(),
        ],

        output: [{
            format: 'esm',
            file: './build/suey.min.js',
            sourcemap: false,
            plugins: [
                terser({ format: { comments: false } }),
            ],
        }],
    },

];

export default builds;
