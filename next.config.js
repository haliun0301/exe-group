const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['i18next'],
    experimental: {
        newNextLinkBehavior: false,
    },
    swcMinify: true,
    i18n: {
        locales: ['jp', 'en'],
        defaultLocale: 'jp',
        localeDetection: false,
    },
    trailingSlash: true,
}

module.exports = nextConfig