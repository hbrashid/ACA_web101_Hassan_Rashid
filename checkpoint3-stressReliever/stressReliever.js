$(document).ready(function() {

// Set two variables, one for clicks, other for incremental clicks.

  var clicks = 0;
  var increment = 1;

// Below is the event Listener. Which will listen for clicks on the cookie

  $(".cookie").click(clickTracker);
  
// Below is the audio for when you click on the cookie
  $(".cookie").click(playSound);

  function playSound() {
    $('audio#eat')[0].play();
  }

// Here is the function for tracking the clicks. It adds the increment on each click. Then I have a series of 'if' statements. These statements are true at certain click milestones. The color will change and statements will appear and animations will take place.
  function clickTracker() {
    clicks += increment;
    $("p").html("You have "+clicks+" cookies");
    $(".cookie").addClass('animated bounce').one('animationend',
    function(){
        $(".cookie").removeClass('animated bounce');
    })
    if (clicks >= 20) {
        $("p").css('color', 'pink');
        $("p").css('font-size', '2.5rem');
        increment = 4;
    }
    if (clicks >= 100) {
        $("h1").html("You are a COOKIE MONSTER!!!!!!");
        $("h1").css('color', 'blue');
        $("body").css('background-color', 'cyan');
        $(".monster").css('display', 'block');
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
