// ONE canonical header/footer for the whole site — same links as the static header in every page.
// Edit THIS file and the static headers together.
(function(){
  var base='./';
  var header=document.querySelector('header.site');
  if(header && !header.querySelector('nav.main')){
    header.innerHTML='<div class="site-inner"><a class="brand" href="'+base+'index.html">Journey to the End of the Universe</a><nav class="main" aria-label="Site">'
      +'<a href="'+base+'index.html">Home</a><a href="'+base+'who-knows.html">Who Knows?</a><a href="'+base+'about.html">About</a>'
      +'<a href="'+base+'project-84.html">Project 84</a><a href="'+base+'omega42.html">Omega42</a><a href="'+base+'new-eden.html">Plan #42</a>'
      +'<a href="'+base+'main-site-pages.html">All Pages</a></nav></div>';
  }
  var footer=document.querySelector('footer.site');
  if(footer && !footer.querySelector('.site-inner')){
    footer.innerHTML='<div class="site-inner">Journey to the End of the Universe &middot; Matthew Joseph Nahas &middot; Hosted on GitHub Pages &middot; <a href="'+base+'index.html">All pages</a></div>';
  }
})();
