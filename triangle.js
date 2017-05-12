/*
  May 2017
  Author : VLS29
  Repository: https://github.com/vls29/sierpinski-triangle-challenge
*/

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
		this.polygon = null;
		this.draw();
	}
	
	descend() {
		if( this.hasChildren() ) {
			for( var i = 0 ; i < this.children.length ; i++) {
				this.children[i].descend();
			}
			
		} else{
			this.createChildren();
			this.hide();
		}
	}
	
	createChildren() {
		var childWidth = this.width / 2;
		
		var topPoint = new Triangle(this, (this.x +(this.width / 4)), (this.y -(this.width / 2)), childWidth);
		
		var bottomLeft = new Triangle(this, this.x, this.y, childWidth);
		
		var bottomRight = new Triangle(this, (this.x + (this.width / 2)), this.y, childWidth);
		
		this.children = [topPoint, bottomLeft, bottomRight];
	}
	
	hasChildren() {
		return this.children.length > 0;
	}
	
	ascend() {
		if( this.hasChildrenWithChildren() ) {
			for( var i = 0 ; i < this.children.length ; i++) {
				this.children[i].ascend();
			}
		} else {
			this.removeImmediateChildren();
		}
	}
	
	hasChildrenWithChildren() {
		var res = this.hasChildren() && this.children[0].hasChildren();
		return res;
	}
	
	removeImmediateChildren() {
		if(this.hasChildren()) {
			for( var i = 0 ; i < this.children.length ; i++) {
				this.children[i].hide();
			}
			
			this.draw();
		}
		
		this.children = [];
	}
	
	hide() {
		$(this.polygon).remove();
	}
	
	draw() {
		if(!node) {
			this.polygon = $(document.createElementNS('http://www.w3.org/2000/svg', 'polygon'));
			var points = "" + this.x + "," + this.y + " " + (this.x + (this.width / 2)) + "," + (this.y - this.width) + " " + (this.x + this.width) + "," + this.y;
			
			this.polygon.attr("id", this.id);
			this.polygon.attr("points", points);
			this.polygon.attr("style",  "fill:black;stroke:purple;stroke-width:0");
			$("svg").append(this.polygon);
		}
	}
};

if(node){
module.exports = Triangle;
}