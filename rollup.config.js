import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import postcss from 'rollup-plugin-postcss'
import pkg from "./package.json";
import path from 'path'
export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs(),
    postcss({
      minimize: true,
      extensions: ['.css'],
      extract: path.resolve('dist/my-faceapi-js-lib.css'),
    }),
    resolve(), // so Rollup can find `ms`
    commonjs() // so Rollup can convert `ms` to an ES module
  ]
};
