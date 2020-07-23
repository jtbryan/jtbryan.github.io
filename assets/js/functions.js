$(document).ready(function() {
    checkAnimation();
})

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});

function isElementInViewport(elem) {
    var elementTop = $(elem).offset().top;
    var elementBottom = parseInt(elementTop + $(elem).outerHeight());
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return ((elementBottom > viewportTop) && (elementTop < viewportBottom));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.user');

    if(!$elem.hasClass("seen")){
        if (isElementInViewport($elem)) {
            // Start the animation
            $elem.addClass('seen');
            time = 150;
            $('.user #icon').each(function (i, el) {
                setTimeout( 
                    function(){ 
                        $(el).addClass('animated')
                    }, 
                i*time)
            });
        }
    }
}