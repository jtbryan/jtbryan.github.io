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
    var $elem = $('.tech');

    $elem.each(function(i, cur){
        if(!$(cur).hasClass("seen")){
            if (isElementInViewport($(cur))) {
                console.log($(cur).find('#icon').length)
                // Start the animation
                $(cur).addClass('seen');
                time = 150;
                if($(cur).attr("id") == "front"){
                    $(cur).find('i').each(function (i, el) {
                        setTimeout( 
                            function(){ 
                                $(el).addClass('animated')
                            }, 
                        i*time)
                    });
                }
                else{
                    $(cur).find('#icon').each(function (i, el) {
                        setTimeout( 
                            function(){ 
                                $(el).addClass('animated')
                            }, 
                        i*time)
                    });
                }
            }
        }
    })
}