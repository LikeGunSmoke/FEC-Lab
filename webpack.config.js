const path = require('path');
const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    filename: 'app.js',
    path: OUT_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

/*  ATTENTION: may be of concern, cur. node version 5.14

Notice that Proxy is enabled in Node 6 by default. If you are not on Node 6 yet, make sure you invoke Jest using node --harmony_proxies node_modules/.bin/jest.

If need be use Jest Transform config option
https://jestjs.io/docs/en/webpack

*/

/*  Notes:

https://webpack.js.org/guides/getting-started/
https://webpack.js.org/configuration/

  entry: path.join(SRC_DIR, 'index.js'), // start compiling here
  output: {
    filename: 'app.js',   // file created to hold compiled data
    path: OUT_DIR,       // dir to output compile file to
  },

  // This module is a loader, pre-process files on load
  //  https://webpack.js.org/concepts/loaders/

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,            // what to look for
        exclude: /(node_modules)/,      // don't look here
        use: {
          loader: 'babel-loader',       // use this loader
          options: {                    // should use these to compile
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },

    mode: 'development',  // runs webpack in development mode

  resolve: {                    // resolves file extensions in this order
    extensions: ['.js', '.jsx'] // file extensions list
  }

  https://webpack.js.org/configuration/resolve/#resolveextensions

  **  If multiple files share the same name but have different extensions, webpack will resolve the one with the extension listed first in the array and skip the rest.

  **  __dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.

*/