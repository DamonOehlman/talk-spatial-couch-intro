window.addEventListener('load', function() {
  $('section[data-bg]').each(function() {
    var el = $(this);
    var bgImage = el.data('bg') || el.attr('data-bg');
    
    el.css('background-image', 'url(' + bgImage + ')');
  });
});