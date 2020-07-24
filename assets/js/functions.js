$(document).ready(function() {
    checkAboutAnimation();
    if(checkContactAnimation()){
        window.scrollTo(0,document.body.scrollHeight);
    }
})

// Capture scroll events
$(window).scroll(function(){
    checkAboutAnimation();
    checkContactAnimation();
});

function isElementInViewport(elem) {
    var elementTop = $(elem).offset().top;
    var elementBottom = parseInt(elementTop + $(elem).outerHeight());
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return ((elementBottom > viewportTop) && (elementTop < viewportBottom));
}

// Check if it's time to start the animation.
function checkAboutAnimation() {
    var $elem = $('.tech');

    $elem.each(function(i, cur){
        if(!$(cur).hasClass("seen")){
            if (isElementInViewport($(cur))) {
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

// Check if it's time to start the animation.
function checkContactAnimation() {
    var $elem = $('#contact-info');

    $elem.each(function(i, cur){
        if(!$(cur).hasClass("seen")){
            if (isElementInViewport($(cur))) {
                // Start the animation
                $(cur).addClass('seen');
                time = 350;
                $(cur).find('form').each(function (i, el) {
                    setTimeout( 
                        function(){ 
                            $(el).addClass('animated')
                            $('#info').addClass('animated')
                        }, 
                    i*time)
                });
                return true;
            }
        }
    })

    return false;
}