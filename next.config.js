const path = require('path')

module.exports = {
  async redirects() {
    return [{
      source: '/admin',
      permanent: false,
      destination: '/admin/dashboard',
    }]
  },
  images: {
    unoptimized: true,
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
