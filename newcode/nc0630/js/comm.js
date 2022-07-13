function mainNavEff(){
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
}