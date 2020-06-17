import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/nestjs-relay.ts',
    output: {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
    // output: [
    //   { file: pkg.main, format: 'cjs', dir: 'dist' },
    //   { file: pkg.module, format: 'es', dir: 'dist' },
    // ],
    external: [
      'apollo-server-express',
      '@nestjs/common',
      '@nestjs/core',
      '@nestjs/graphql',
      '@nestjs/testing',
      'graphql-relay',
      'graphql-tools',
      'graphql',
      'reflect-metadata',
      'supertest'
    ],
    plugins: [
      typescript()
    ],
  },
];
