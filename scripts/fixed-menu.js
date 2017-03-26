var el = document.querySelector('.menu');
var elHeight = el.offsetHeight;

document.addEventListener('scroll', function (e) {
	var m = document.querySelector(".goods");

	var scrolled = window.pageYOffset;

	if(scrolled >= 130) {
        el.classList.add('scrolled');
        m.style.paddingTop = (elHeight+30) + "px";
    }   
    else {     
        el.classList.remove('scrolled');
        m.style.paddingTop = "30px";
    }
});