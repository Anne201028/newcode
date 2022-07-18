// 傳送資訊進來，暫存在資料庫中，
function productMenuEff(page,item){
    $('#productMenu ul ul').hide();

    $('#productMenu>ul>li>a').click(function(){
        $(this).next().stop().slideToggle();
    })
    // 先找到指定頁面，再照指定項目，增加所要元件，
    // 將指定元件附加到指定項目
    $('#productMenu ul ul').eq(page).slideDown().children('li')
                           .eq(item).children('a').addClass('nowPage');
}