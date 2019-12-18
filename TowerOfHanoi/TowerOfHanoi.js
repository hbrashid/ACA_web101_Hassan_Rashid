// Moving pieces around by clicking on them and then on the place you want to move them. We need 4 rows and 4 blocks of colors.


$(document).ready(function() {
    var piece = null;

    $('.row').click(function() {
        if (piece) {
            $(this).append(piece);
            piece = null;
        } else {
            piece = $(this).children().last().detach();
            }
    });
       

});

// After much experimentation, it seems as though I had to modify my HTML code, thus giving way for the jQuery function to work. I modeled my jQuery code after the example, and input my own elements. It still took some time, because I had to adjust my HTML. Null is an object, and therefore can be useful here.
