global.node = true;
var assert = require('assert');
var Triangle = require('../triangle');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
var html = '<html><body><svg height="400" width="400" viewBox="0 0 400 400"xmlns=" http://www.w3.org/2000/svg"  version="1.1"></svg></body></html>';
global.document  = (new JSDOM(html)).window;
global.$ = require('jquery')((new JSDOM(html)).window);

describe('Triangle Tests', function() {
	describe('Triangle Constructor Tests', function() {
		it('Constructs ok no parent specified', function() {
			var x = 0;
			var y = 400;
			var width = 400;
		 	var triangle = new Triangle(null, x, y, width);
		
			assert.equal(triangle.x, x);
			assert.equal(triangle.y, y);
			assert.equal(triangle.width, width);
			assert.equal(triangle.id, ('' + x + y));
			assert.equal(triangle.children.length, []);
		});
		
		it('Constructs ok parent specified', function() {
			var x = 0;
			var y = 400;
			var width = 400;
			var parent = new Triangle(null, x, y, width);
		 	var triangle = new Triangle(parent, x, y, width);
		
			assert.equal(triangle.x, x);
			assert.equal(triangle.y, y);
			assert.equal(triangle.width, width);
			assert.equal(triangle.id, (parent.id + '#' + x + y));
			assert.equal(triangle.children.length, []);
		});
	});

	describe('Triangle Children Tests', function() {
		it('Create children', function() {
			var x = 0;
			var y = 400;
			var width = 400;
		 	var parent = new Triangle(null, x, y, width);
		
			parent.createChildren();
			
			assert.equal(parent.children.length, 3);
			
			var childWidth = width / 2;
			
			var child1 = parent.children[0];
			
			assert.equal(child1.x, width / 4);
			assert.equal(child1.y, y / 2);
			assert.equal(child1.width, childWidth);
			assert.equal(child1.id, (parent.id + '#' + child1.x + child1.y));
			assert.equal(child1.children.length, []);
			
			var child2 = parent.children[1];
			
			assert.equal(child2.x, x);
			assert.equal(child2.y, y);
			assert.equal(child2.width, childWidth);
			assert.equal(child2.id, (parent.id + '#' + child2.x + child2.y));
			assert.equal(child2.children.length, []);
			
			var child3 = parent.children[2];
			
			assert.equal(child3.x, (x + (width / 2)));
			assert.equal(child3.y, y);
			assert.equal(child3.width, childWidth);
			assert.equal(child3.id, (parent.id + '#' + child3.x + child3.y));
			assert.equal(child3.children.length, []);
		});
		
		it('Remove children', function () {
			var x = 0;
			var y = 400;
			var width = 400;
		 	var parent = new Triangle(null, x, y, width);
		
			parent.createChildren();
			
			assert.equal(parent.children.length, 3);
			
			parent.removeChildren();
			
			assert.equal(parent.children.length, []);
		});
	});
});