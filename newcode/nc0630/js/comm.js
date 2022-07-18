function mainNavEff(){

function setMenu(){
    $('#mainNav>ul>li').off('mouseenter mouseleave');
    $('#mainNav>ul>li>a').off('click');
    $('#menuBtn').removeClass('closeBtn')
    // 設定好後衛導致位置變動位移
   

    if(window.outerWidth>550){
        $('#menuBtn').hide();
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
        $('#mainNav').show();
        // $('#mainNav').hide();
        $('#mainNav').css({'top':0,'left':-600});
        // 這邊設定.css將位置重設，position:static。
        $('#mainNav ul ul').css({
            'position':'static',
            'opacity':1
        }).hide();
        $('#mainNav>ul>li>a').click(function(){
            $(this).next().stop().slideToggle()
        })
    }
}

var winWidth=window.outerWidth;

}

    $(window).resize(function(){

       if(winWidth!=window.outerWidth){
        setMenu();
        winWidth=window.outerWidth;
       }
        
    })

    // $(window).resize();

    setMenu()

$('#menuBtn').click(function(){
    // $('#mainNav').stop().slideToggle();
    $('#mainNav').stop().animate({'left':0});
    // $(this).toggleClass('#mainNav');
    $(this).toggleClass('closeBtn');

    // 在所有執行完成後取消預設動作
    return false;
})

