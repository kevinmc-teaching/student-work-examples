

// $('.grid').isotope({
//   // set itemSelector so .grid-sizer is not used in layout
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   masonry: {
//     // use element for option
//     columnWidth: '.grid-sizer'
//   }
// })




// MASONRY BLOG SETTINGS

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-sizer'
  }
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

