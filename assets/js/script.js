$(function() {
    $('#scroll_back a').on('click',function(event){
        $('body, html').animate({
        scrollTop: 0
    }, 800);
        event.preventDefault();
    });

    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
        $('.header-right').toggleClass('active');
    });
});