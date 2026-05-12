/**
 * Exclude node_modules from source-map-loader. Packages like rxjs (via
 * @sanity/client) ship sourceMappingURL paths to .ts files not in the tarball,
 * which floods the dev server with harmless warnings.
 */
function patchSourceMapLoaderExclude(rules) {
  if (!Array.isArray(rules)) return
  for (const rule of rules) {
    if (!rule) continue
    if (
      rule.enforce === 'pre' &&
      rule.loader &&
      String(rule.loader).includes('source-map-loader')
    ) {
      rule.exclude = /node_modules/
      return
    }
    if (Array.isArray(rule.oneOf)) {
      patchSourceMapLoaderExclude(rule.oneOf)
    }
    if (Array.isArray(rule.rules)) {
      patchSourceMapLoaderExclude(rule.rules)
    }
  }
}

module.exports = {
  webpack: {
    configure(config) {
      patchSourceMapLoaderExclude(config.module.rules)
      return config
    },
  },
}
