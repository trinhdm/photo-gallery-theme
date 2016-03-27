function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
    'img/alley.jpg',
    'img/beach.jpg',
    'img/bridge.jpg',
    'img/castle.jpg',
    'img/cliff.jpg',
    'img/desert.jpg',
    'img/forest.jpg',
    'img/forest2.jpg',
    'img/forest3.jpg',
    'img/girl+river.jpg',
    'img/guy+dog.jpg',
    'img/hills.jpg',
    'img/lake.jpg',
    'img/mountains.jpg',
    'img/ocean-cliffs.jpg',
    'img/pug.jpg',
    'img/river.jpg',
    'img/shoes.jpg',
    'img/snow.jpg',
    'img/waves.jpg',
    'img/woods.jpg'
]);



var $grid = $('.grid').isotope({
  // options...
  itemSelector: '.pic-grid',
  getSortData: {
    name: '.name',
    category: '[data-category]'
  },
});

$('.sort-by-button-group').on( 'click', 'button', function() {
    var sortValue = $(this).attr('data-sort-value');
    $grid.isotope({ sortBy: sortValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
