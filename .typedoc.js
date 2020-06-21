module.exports = {
  entryPoint: '"nestjs-relay"',
  exclude: '**/*+(index|.spec|.e2e).ts',
  excludeExternals: true,
  excludeNotExported: true,
  inputFiles: ['src'],
  out: 'public',
  theme: 'minimal'
};
