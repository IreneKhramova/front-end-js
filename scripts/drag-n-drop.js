class DragAndDrop {

	constructor(node) {
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

	mouseDownHandler(e) {
		e.preventDefault();
		this.isMoving = true;
		this.startPosition.top = e.clientY;
		this.startPosition.left = e.clientX;
	}

	mouseMoveHandler(e) {
		e.preventDefault();
		if(this.isMoving)
		{
			this.node.style.transform = 'translate(' + (e.clientX + 
				this.lastPosition.left - this.startPosition.left) +'px, ' +
				(e.clientY + this.lastPosition.top - this.startPosition.top) +'px)';
		}
	}

	mouseUpHandler(e) {
		this.isMoving = false;
		this.lastPosition.top += e.clientY - this.startPosition.top;
		this.lastPosition.left += e.clientX - this.startPosition.left;
	}
}

const logo = new DragAndDrop(document.querySelector('.center img'));