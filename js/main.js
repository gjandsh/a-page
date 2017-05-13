$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
})
$('#gototop').on('click',function(){
        $('html, body').animate({
        scrollTop: 0
    }, 500);
})
