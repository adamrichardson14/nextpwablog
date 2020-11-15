const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  images: {
    domains: ['res-3.cloudinary.com', 'res-2.cloudinary.com'],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
});
