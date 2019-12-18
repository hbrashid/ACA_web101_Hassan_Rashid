$(document).ready(function() {

$("button").click(onSubmit);

function onSubmit(event) {
    event.preventDefault();

    var todo = $('#input').val();
    $('.todo-container').append('<p>' + todo + '<p>');
    $("#input").val('');

}





});