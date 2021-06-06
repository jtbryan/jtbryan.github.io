$(document).ready(function() {
    checkAboutAnimation();
    checkContactAnimation();
    if($(".active").attr("id") == "academic"){
        $("#academic-view").css("visibility", "visible")
        $("#personal-view").css("display", "none")
    }
    else{
        $("#personal-view").css("visibility", "visible")
        $("#academic-view").css("display", "none")
    }

    $('#email-submit-form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url : $(this).attr('action') || window.location.pathname,
            type: "POST",
            data: $(this).serialize(),
            success: function (data) {
                $("#email-submit").css("background-color", "#4bb543")
                $("#email-submit").css("box-shadow", "1px 1px 2px 0px #000000");
                $("#email-submit").attr("disabled", true)
                setTimeout(() => {
                    $("#email-submit").css("background-color", "#67d5fd")
                    $("#email-submit").css("box-shadow", "1px 1px 2px 0px #2bc1f7");
                    $("#email-submit").attr("disabled", false)
                }, 1500);
            },
            error: function (jXHR, textStatus, errorThrown) {
                $("#email-submit").css("background-color", "#ff0033")
                $("#email-submit").css("box-shadow", "1px 1px 2px 0px #000000");
                $("#email-submit").attr("disabled", true)
                setTimeout(() => {
                    $("#email-submit").css("background-color", "#67d5fd")
                    $("#email-submit").css("box-shadow", "1px 1px 2px 0px #2bc1f7");
                    $("#email-submit").attr("disabled", false)
                }, 1500);
                console.log(errorThrown)
            }
        });
    })
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

function displayAcademic(){
    $("#academic-view").toggle("normal",function(){
        $("#academic-view .academic").each()
    })
}

function displayPersonal(){

}

$(".project-button").on("click", function(){
    if($(this).hasClass('active')){
        return
    }
    else{
        $(".project-button.active").removeClass("active")
        $(this).addClass("active")
        if($(this).attr("id") == "academic"){
            $("#personal-view").css("display", "none")
            $("#personal-view").css("visibility", "hidden")
            $("#academic-view").css("visibility", "visible")
            $("#academic-view").css("display", "block")
        }
        else{
            $("#academic-view").css("display", "none")
            $("#academic-view").css("visibility", "hidden")
            $("#personal-view").css("visibility", "visible")
            $("#personal-view").css("display", "block")
        }
    }
})