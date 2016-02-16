module.exports = {
  dev: {
    options: {
      server: './app',
      watchTask: true
    },
    bsFiles: {
      src : [
        'app/css/style.css',
        'app/js-es6/__bundle.js',
        'app/**/*.html'
      ]
    }
  }
};
