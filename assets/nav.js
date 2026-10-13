// ONE canonical header/footer for the whole site.
// Edit THIS file once — every page that includes nav.js updates.
// This replaces the old per-page nav wave problem from the Muse artifacts.
(function(){
  // Works from root or from /pages/<slug>/ — adjust base if you move things
  var inPages = location.pathname.includes('/pages/');
  var base = inPages ? '../../' : './';
  var header = document.querySelector('header.site');
  if(header){
    header.innerHTML = '<nav class="main">' +
      '<a href="'+base+'index.html">Home</a>' +
      '<a href="'+base+'pages/example-page/">Example Page</a>' +
      '<a href="'+base+'index.html#add">Add a page</a>' +
      '</nav>';
  }
  var footer = document.querySelector('footer.site');
  if(footer){
    footer.innerHTML = 'Journey to the End of the Universe &middot; Hosted free on GitHub Pages &middot; Edit any page in your browser at github.dev';
  }
})();
