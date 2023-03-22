const path = require('path')

module.exports = {
  async redirects() {
    return [{
      source: '/',
      permanent: false,
      destination: '/resume'
    }]
  },
  images: {
    domains: ["firebasestorage.googleapis.com"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets', 'styles')],
  },
  reactStrictMode: false,
  webpack(config, options) {
    config.resolve.alias['@root'] = path.join(__dirname, './')
    return config
  },
}
