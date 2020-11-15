const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  images: {
    domains: [
      'res-1.cloudinary.com',
      'res-2.cloudinary.com',
      'res-3.cloudinary.com',
      'res-4.cloudinary.com',
      'res-5.cloudinary.com',
      'res-6.cloudinary.com',
      'res-7.cloudinary.com',
      'res-8.cloudinary.com',
      'res-9.cloudinary.com',
      'res-10.cloudinary.com',
    ],
    deviceSizes: [320, 420, 768, 1024, 1200],
  },
});
