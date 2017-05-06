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
		
		for( var i = 0 ; i < this.children.length ; i++) {
			this.children[i].draw();
		}
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
	
	draw() {
		if(!node) {
			var polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			var $polygon = $(polygon);
			var points = "" + this.x + "," + this.y + " " + (this.x + (this.width / 2)) + "," + (this.y - this.width) + " " + (this.x + this.width) + "," + this.y;
			console.log(points);
			$polygon.attr("id", this.id);
			$polygon.attr("points", points);
			$polygon.attr("style",  "fill:lime;stroke:purple;stroke-width:1;fill-rule:evenodd;");
			$("svg").append($polygon);
		}
	}
};

if(node){
module.exports = Triangle;
}