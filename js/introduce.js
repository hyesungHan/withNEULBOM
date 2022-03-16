$(function(){
    $('.ti').click(function(){
        $('.acco').removeClass('active');
        $(this).next().addClass('active');
    })
})