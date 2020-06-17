module.exports = {
  excludeExternals: true,
  excludeNotExported: true,
  inputFiles: ['src'],
  out: 'docs',
  plugin: 'typedoc-plugin-markdown'
};
