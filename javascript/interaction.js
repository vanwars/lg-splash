var $animation_elements = $('.animation-element');
var $window = $(window);


/*Check position of animated elements*/
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
    var element_delay = $element.index();

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {

      setTimeout(function() {
        $element.addClass('in-view');
      }, element_delay * 160);
    }
  });
}


/*Navigation Invert*/
function toggle_scroll() {
  var window_height = $window.scrollTop();
  var navBar = $( "#topNavbar");
  console.log(window_height);
  if (window_height > 120){
    navBar.addClass('bg-light navbar-light border-bottom');
    navBar.removeClass('navbar-dark');
  } else{
    navBar.removeClass('bg-light navbar-light border-bottom');
    navBar.addClass('navbar-dark');
  }
}

$window.on('scroll resize', check_if_in_view);
$window.on('scroll resize', toggle_scroll);
$window.trigger('scroll');