const menu = document.querySelector('.menu');
let menuHeight = menu.offsetHeight;
const goods = document.querySelector(".goods");
let menuPos = menu.getBoundingClientRect();
const goodsPaddingTop = parseInt(getComputedStyle(goods).paddingTop);

document.addEventListener('scroll', function (e) {
	let scrolled = window.pageYOffset;
    let goodsStyle = getComputedStyle(goods);
	if(scrolled > menuPos.top) {
        menu.classList.add('scrolled');
        goods.style.paddingTop = (menuHeight+goodsPaddingTop) + "px";
    }   
    else {     
        menu.classList.remove('scrolled');
        goods.style.paddingTop = "";
    }
});