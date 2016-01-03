var footerTabs = {'1.html' : 0,
    '2.html' : 1,
    '25.html' : 2,
    '4.html' : 2,
    '17.html' : 3,
    '24.html' : 3


};
if($('#nav_list').length > 0){
    var fileNameIndex = location.pathname.lastIndexOf('/');
    var fileName = location.pathname.substr(fileNameIndex + 1);
    var footerIndex = footerTabs[fileName];
    var curLi = $('#nav_list li');

    curLi.eq(footerIndex).addClass('active').siblings().removeClass('active');

}

function switchTabs($tabsArr){
    for(var i= 0; i < $tabsArr.length; i++){
        var $tabs = $tabsArr[i];
        $tabs.on('click', function (e) {
            $(this).addClass('cur').siblings().removeClass('cur');
        });
    }
}