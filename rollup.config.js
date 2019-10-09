import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

module.exports = {
    input: 'src/download-polyfill.js',
    output: {
        file: 'dist/index.js',
        format: 'iife'
    },
    plugins: [
        babel({
          exclude: 'node_modules/**'
        }),
        terser()
    ]
};
