function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
    'img/alley.jpg',
    'img/beach.jpg',
    'img/bears.jpg',
    'img/bridge.jpg',
    'img/cabin.jpg',
    'img/castle.jpg',
    'img/cliff.jpg',
    'img/deer.jpg',
    'img/desert.jpg',
    'img/desert2.jpg',
    'img/escalator.jpg',
    'img/food.jpg',
    'img/forest.jpg',
    'img/frost.jpg',
    'img/girl+river.jpg',
    'img/guy+dog.jpg',
    'img/hills.jpg',
    'img/kiss.jpg',
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


$(function() {
  var $grid = $('#grid').isotope({
    itemSelector: '.pic-grid',
    percentPosition: true,
    filter: '*',
    transitionDuration: '0.8s',
    // only opacity for reveal/hide transition
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    }
  });

  $('.cat').click(function(){
    var selector = $(this).attr('data-filter');
    $grid.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });
  return false;
});
});
