function DragAndDrop(node) {
	this.node = node;
	this.startPosition = {
		top: 0,
		left: 0
	};
	this.lastPosition = {
		top: 0,
		left: 0
	};
	this.isMoving = false;

	this.bindedMouseDownHandler = this.mouseDownHandler.bind(this);
	this.bindedMouseMoveHandler = this.mouseMoveHandler.bind(this);
	this.bindedMouseUpHandler = this.mouseUpHandler.bind(this);

	this.node.addEventListener('mousedown', this.bindedMouseDownHandler);
	document.body.addEventListener('mousemove', this.bindedMouseMoveHandler);
	document.body.addEventListener('mouseup', this.bindedMouseUpHandler);
}

DragAndDrop.prototype = {
	mouseDownHandler: function(e) {
		this.isMoving = true;
		this.startPosition.top = e.clientY;
		this.startPosition.left = e.clientX;
	},
	mouseMoveHandler: function(e) {
		e.preventDefault();
		if(this.isMoving)
		{
			this.node.style.transform = 'translate(' + (e.clientX + this.lastPosition.left - this.startPosition.left) +'px, ' +
			(e.clientY + this.lastPosition.top - this.startPosition.top) +'px)';
		}
	},
	mouseUpHandler: function(e) {
		this.isMoving = false;
		this.lastPosition.top += e.clientY - this.startPosition.top;
		this.lastPosition.left += e.clientX - this.startPosition.left;
	}
}

var logo = new DragAndDrop(document.querySelector('.center img'));