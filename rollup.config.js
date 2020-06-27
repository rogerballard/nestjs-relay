import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import ts from 'typescript'

const input = 'src/nestjs-relay.ts'

const plugins = [
  typescript({
    typescript: ts
  })
]

const external = [
  '@nestjs/graphql',
  'graphql-relay',
  'graphql'
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    plugins,
    external
  },
  {
    input,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    plugins,
    external
  }
]
