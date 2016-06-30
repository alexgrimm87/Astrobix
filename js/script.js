$(document).ready(function(){
  $('.astro-signs-link').on('click', function(e){
  e.preventDefault();

  var item = $(this).closest('.astro-signs-item'),
      contentItem = $('.signs-info-item'),
      itemPosition = item.index();

  contentItem.eq(itemPosition)
    .add(item)
    .addClass('active')
    .siblings()
    .removeClass('active');
  });

  $('.signs-tab-link').on('click', function(e){
  e.preventDefault();

  var signs = $(this).closest('.signs-tab-item'),
      signsItem = $('.signs-list-item'),
      signsPosition = signs.data('class');

  signsItem.filter('.signs-list-item-' + signsPosition)
    .add(signs)
    .addClass('active')
    .siblings()
    .removeClass('active');
  });

}); //end
