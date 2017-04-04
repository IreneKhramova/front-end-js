define(function () {
var menu = document.querySelector('.menu');
var menuHeight = menu.offsetHeight;
var goods = document.querySelector(".goods");
var menuPos = menu.getBoundingClientRect();
var goodsPaddingTop = parseInt(getComputedStyle(goods).paddingTop);

document.addEventListener('scroll', function (e) {
	var scrolled = window.pageYOffset;
    var goodsStyle = getComputedStyle(goods);
	if(scrolled > menuPos.top) {
        menu.classList.add('scrolled');
        goods.style.paddingTop = (menuHeight+goodsPaddingTop) + "px";
    }   
    else {     
        menu.classList.remove('scrolled');
        goods.style.paddingTop = "";
    }
});
});