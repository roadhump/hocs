
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        file: 'build/cjs.js',
        format: 'cjs'
    },
    external: ['recompose'],
    plugins: [
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        })
    ],
};