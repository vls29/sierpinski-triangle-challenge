class Triangle {
	constructor(parent, x, y, width) {
		if(parent === null){
			this.id = '' + x + y;
		} else {
			this.id = parent.id + '#' + x + y;
		}
		this.x = x;
		this.y = y;
		this.width = width;
		this.children = [];
	}
	
	createChildren() {
		var childWidth = this.width / 2;
		
		var topPoint = new Triangle(this, (this.x +(this.width / 4)), (this.y / 2), childWidth);
		
		var bottomLeft = new Triangle(this, this.x, this.y, childWidth);
		
		var bottomRight = new Triangle(this, (this.x + (this.width / 2)), this.y, childWidth);
		
		this.children = [topPoint, bottomLeft, bottomRight];
	}
	
	removeChildren() {
		for( var i = 0 ; i < this.children.length ; i++) {
			this.children[i].removeSvg();
		}
		
		this.children = [];
	}
	
	removeSvg() {
		$(this.id).remove();
	}
};

module.exports = Triangle;