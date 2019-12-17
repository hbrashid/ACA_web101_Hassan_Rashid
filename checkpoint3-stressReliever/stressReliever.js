$(document).ready(function() {

// Set two variables, one for clicks, other for incremental clicks. To make a counter

  var clicks = 0;
  var increment = 1;

  $(".cookie").click(clickTracker);
  

  $(".cookie").click(playSound);

  function playSound() {
    $('audio#eat')[0].play();
  }

  function clickTracker() {
    clicks += increment;
    $("p").html("You have "+clicks+" cookies");
    if (clicks >= 20) {
        $("p").css('color', 'pink');
        $("p").css('font-size', '2.5rem');
        increment = 4;
    }
    if (clicks >= 100) {
        $("h1").html("You are a COOKIE MONSTER!!!!!!");
        $("h1").css('color', 'blue');
        $("body").css('background-color', 'cyan');
    }
    if (clicks >= 200) {
        $("p").remove();
        $("h1").remove();
        $("h2").html("You are now stress free!");
        $("h2").css('color', 'pink');
        $("h2").css('font-size', '3.0rem');
        $("h2").animate( {
            fontSize: "5.0rem", 
        })
        $("h2").addClass('animated rubberBand').one('animationend',
        function(){
            $("h2").removeClass('animated rubberBand');
        })

    }
    


    
    
}

  
  






});
