const concat = require('concat');

(async function build() {
  const files = [
    './dist/demo/runtime.js',
    './dist/demo/polyfills.js',
    './dist/demo/scripts.js',
    './dist/demo/main.js'
  ];
  await concat(files, './dist/demo/bundle.js');
})();
