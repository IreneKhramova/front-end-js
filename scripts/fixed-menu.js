var menu = document.querySelector('.menu');
var menuHeight = menu.offsetHeight;
var goods = document.querySelector(".goods");
var menuPos = menu.getBoundingClientRect();

document.addEventListener('scroll', function (e) {
	var scrolled = window.pageYOffset;

	if(scrolled > menuPos.top) {
        menu.classList.add('scrolled');
        goods.style.paddingTop = (menuHeight+30) + "px";
    }   
    else {     
        menu.classList.remove('scrolled');
        goods.style.paddingTop = "30px";
    }
});