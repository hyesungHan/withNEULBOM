$(function(){   
    $('.click li').click(function(){
        let num = $(this).index();
        console.log(num);
        $('.content>div').hide();
        $('.content>div').eq(num).show();
    })
    
    $('.content div').click(function(){
        let num2 = $(this).index();
        console.log(num2);
    })
})