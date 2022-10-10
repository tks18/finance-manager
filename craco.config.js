const path = require('path');

const BASEPATH = path.resolve(__dirname, 'src');

module.exports = {
  webpack: {
    alias: {
      '@': BASEPATH,
      '@app': path.join(BASEPATH, 'app/index.tsx'),
      '@components': path.join(BASEPATH, 'components'),
      '@router': path.join(BASEPATH, 'router'),
      '@routes': path.join(BASEPATH, 'routes'),
      '@styles': path.join(BASEPATH, 'styles', 'index.scss'),
    },
  },
};
