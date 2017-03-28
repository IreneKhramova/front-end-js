var logo = document.querySelector('.center img');
var startPosition = {
	top: 0,
	left: 0
};
var lastPosition = {
	top: 0,
	left: 0
};
var isMoving = false;

logo.addEventListener('mousedown', function(e) {
	isMoving = true;
	startPosition.top = e.clientY;
	startPosition.left = e.clientX;
});

document.body.addEventListener('mousemove', function(e) {
	e.preventDefault();
	if(isMoving)
	{
		logo.style.transform = 'translate(' + (e.clientX + lastPosition.left - startPosition.left) +'px, ' +
		(e.clientY + lastPosition.top - startPosition.top) +'px)';
	}
});

logo.addEventListener('mouseup', function(e) {
	isMoving = false;
	lastPosition.top += e.clientY - startPosition.top;
	lastPosition.left += e.clientX - startPosition.left;
});