## Thought Process ##

Well Java is probably the wrong tool, but what if I chose to use Java, how do I draw a triangle?  Graphics2D, erk!

So, what about JavaScript/HTML?  https://jsfiddle.net/macloo/JLVva/ that's promising, but I need to zoom and drag and preferably write some unit tests.

Ooo, SVGs and they can be zoomed + panned (http://www.petercollingridge.co.uk/interactive-svg-components/pan-and-zoom-control), albeit using buttons, but then that's all I can find examples for in JavaScript.

### Unit Testing ###

Even if I go with drawing triangles using svgs, I'm likely to have JavaScript and I'd prefer to have some of it tested if it's possible...

So there's an excellent post here: http://stackoverflow.com/questions/300855/JavaScript-unit-test-tools-for-tdd on various JavaScript testing frameworks.

There's also QUnit (https://qunitjs.com/) which has come up when searching for "unit testing JavaScript".

Will now just need to try a framework out and see if it works for what I want it to do.

After looking at a couple of the unit test frameworks for JavaScript, I've decided to go with Mocha as the documentation online is very good and provides lots of examples.

## Saved Sketches ##

### Drawing triangles with JavaScript ###
Trying out drawing triangles with JavaScript (based on the example from macloo/JLVva) https://jsfiddle.net/18bh8u9v/

### Drawing triangles with SVGs ###
See https://github.com/vls29/sierpinski-triangle-challenge/blob/master/svg-investigation.md#svg-w3schools-try-it-out-svg-sketch-pad