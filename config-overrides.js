const { alias } = require('react-app-rewire-alias')

module.exports = function override (config) {
  alias({
    '@features': 'src/features',
    '@routes': 'src/routes',
    '@store': 'src/store'
  })(config)

  return config
}
