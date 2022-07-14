function productMenuEff(page,item){
    $('#productMenu ul ul').hide();

    $('#productMenu>ul>li>a').click(function(){
        $(this).next().stop().slideToggle();
    })
    $('#productMenu ul ul').eq(page).slideDown().children('li')
                           .eq(item).childen('a').addClass('nowPage');
}