// Smooth fade-in logic
document.addEventListener("DOMContentLoaded", function() {
    // Cat loading logic
    setTimeout(function() {
    $(".boxL").animate({
      'opacity': '0'
      }, 700);
    }, 1500);
    setTimeout(function() {
    $(".boxL").css({
      'display': 'none'
      });
    }, 2000);
    // Fade in form after loading logic (fixes hiccup in view)
    setTimeout(function() {
      $(".onLoading").animate({
          'opacity': '1'
      }, 700);
    }, 2200);
    setTimeout(function() {
    $(".onLoading").css({
      'display': 'block'
      });
    }, 2200);
});