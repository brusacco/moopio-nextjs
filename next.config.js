module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.moopio.com'],
  },
  async rewrites() {
    return [
      {
        source: "/:slug*.html",  // Old url with .html
        destination: "/:slug*", // Redirect without .html
      },
    ];
  },
}

