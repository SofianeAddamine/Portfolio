$(document).ready(function() {

    
    $("#toggle").click(function(){
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    })
    
    $("#resize ul li a").click(function(){
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    })
    
    $(".close-btn").click(function(){
        $(this).toggleClass('on');
        $("#resize").toggleClass("active");
    })
    
    // nav end 
    
    
    // nav animation 
    
    
    TweenMax.from("#brand", 1,{
        delay: 1,
        opacity:0,
        ease: Expo.easeInOut
    })
    
    TweenMax.staggerFrom("#menu li a",1,{
        delay: 1,
        opacity:0,
        ease: Expo.easeInOut
    }, 0.1);
    // anim end
    
    $('nav.d-none').removeClass("d-none");
    
    // scroll animation

    function juizScrollTo(element){            
        $(element).click(function(){
            var goscroll = false;
            var the_hash = $(this).attr("href");
            var regex = new RegExp("\#(.*)","gi");
            var the_element = '';
     
            if(the_hash.match("\#(.+)")) {
                the_hash = the_hash.replace(regex,"$1");
     
                if($("#"+the_hash).length>0) {
                    the_element = "#" + the_hash;
                    goscroll = true;
                }
                else if($("a[name=" + the_hash + "]").length>0) {
                    the_element = "a[name=" + the_hash + "]";
                    goscroll = true;
                }
     
                if(goscroll) {
                    $('html, body').animate({
                        scrollTop:$(the_element).offset().top
                    }, 'slow');
                    return false;
                }
            }
        });                    
    };
    
    juizScrollTo('a[href^="#"]');


    // end scroll animation
    new WOW().init();
});
