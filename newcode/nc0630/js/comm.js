function mainNavEff(){

    $(window).resize(function(){

        $('#mainNav>ul>li').off('mouseenter mouseleave');
        $('#mainNav>ul>li>a').off('click');
        // 設定好後衛導致位置變動位移

        if(window.outerWidth>600){
            $('#mainNav').show();

            $('#mainNav ul ul').css({
                'position':'relative',
                'top':200,
                'left':0
            }).hide()
        
            $('#mainNav>ul>li').hover(function(){
                $(this).children('ul').show().css({'opacity':0}).stop()
                    .animate({'top':0,'opacity':1},1000);
            },function(){
                $(this).children('ul').stop()
                    .animate({'top':200,'opacity':0},1000,function(){
                        $(this).hide
                    });
            })

        }else{
            $('#mainNav').hide();
            // 這邊設定.css將位置重設，position:ststic。
            $('#mainNav ul ul').css({
                'position':'ststic',
                'opacity':1
            }).hide();
            $('#mainNav>ul>li>a').click(function(){
                $(this).next().stop().slideToggle()
            })
        }
    })
$(window).resize();

$('#menuBtn').click(function(){
    $('#mainNav').slideToggle();
    $(this).toggleClass('closeBtn');

    // 在所有執行完成後取消預設動作
    return false;
})

}