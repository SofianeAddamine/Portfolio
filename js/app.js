
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

    new WOW().init();