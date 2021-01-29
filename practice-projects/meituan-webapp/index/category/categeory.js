/*
 * @Description: 
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-10-09 18:59:56
 * @LastEditors: fengjiao
 * @LastEditTime: 2021-01-13 15:11:54
 */

//模板字符串
(function () {
    
    var itemTmpl = '<div class="category-item">' +
        '<img class="item-icon" src=$url />' +
        '<p class="item-name">$name</p>' +
        '</div>';
    function initCategory() {
        //获取categeory内容
        $.getJSON('../json/head.json', function (data) {
            var list=data.data.primary_filter.splice(0,8);
            list.forEach(function(item,index){
                var str=itemTmpl
                .replace('$url',item.url)
                .replace('$name',item.name);
                $('.category-content').append($(str));
            })
        })
    }

    // 绑定点击时间
    function addClick(){
        $('.category-content').on('click', '.category-item',function(){
            alert(01);
        })
    }

    function init(){
        initCategory();
        // addClick();
    }
    init();

})();

