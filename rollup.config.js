import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'src/index.js',
    exports: 'named',
    plugins: [
        babel({
            babelrc: false,
            presets: [
                [
                    'es2015',
                    {
                        modules: false,
                    },
                ],
            ],
            plugins: ['external-helpers'],
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true,
        })
    ],
    targets: [{
            format: 'umd',
            moduleName: 'reactRenderWatch',
            dest: 'dist/react-render-watch.js',
        },
        {
            format: 'es',
            dest: 'dist/react-render-watch.es.js'
        }
    ]
};
