$(document).ready(function() {
    var myElement = $('.images-right');
    $(window).on('scroll', function () {
      var st = $(this).scrollTop();
      myElement.css({
         'opacity': 1 - st / 600
      });
   });
 });