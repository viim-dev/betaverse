const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
module.exports = (config) => {

  config.addPassthroughCopy({ 'src/arconfig.json': './arconfig.json' })
  config.addPassthroughCopy('src/assets/*.js');
  config.addPassthroughCopy({'src/assets/aframe-v1.2.0.min.js':'./assets/aframe-v1.2.0.min.js'});
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  })
  config.setDataDeepMerge(true)
  
  config.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    postcss([tailwindcss(require('./tailwind.config.js')), autoprefixer()])
      .process(cssCode)
      .then(
        (r) => done(null, r.css),
        (e) => done(e, null)
      );
  });
  config.addWatchTarget('styles/**/*.css');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
