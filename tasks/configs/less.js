module.exports = {
  development: {
    options: {
      sourceMap: true,
      sourceMapFilename: 'app/css/style.css.map',
      sourceMapURL: '/css/style.css.map',
      sourceMapBasepath: 'app',
      sourceMapRootpath: '/',
      plugins: [
        new (require('less-plugin-autoprefix'))({browsers: ["Firefox >= 20, Chrome >= 40, Safari > 6, last 2 versions"]})
      ]
    },
    files: {
      "app/css/style.css": "app/css/sources/main.less"
    }
  },
  production: {
    options: {
      plugins: [
        new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions, Firefox >= 20, Chrome >= 40, Safari > 6"]})
      ]
    },
    files: {
      "app/css/style.css": "app/css/sources/main.less"
    }
  }
};
