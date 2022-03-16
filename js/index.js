$(function(){
    let counter = 0;
    $('.banner>div').eq(0).addClass('active').on('animationend', function(){
        $(this).removeClass('active');
    });

    let timer = setInterval(function(){
        counter++;
        $('.banner>div').eq(counter%3).addClass('active').on('animationend', function(){
            $(this).removeClass('active');
        });
        $('.number span').eq(0).text(counter%3+1);
    }, 3000)
})