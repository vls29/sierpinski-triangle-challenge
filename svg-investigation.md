## SVG Specific Investigation ##

SVG does seem like a nice way of drawing the triangles as they will be scalable and not loose quality/have to be re-drawn.

Biggest disadvantage is that it's quite browser specific...

### SVG W3Schools Try It Out SVG Sketch Pad ###

https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon4

Example of drawing three triangles:

```<svg height="400" width="400" viewBox="50 50 400 400">
  <polygon points="0,400 200,0 400,400 0,400 100,200 300,200 200,400 100,200" style="fill:white;stroke:purple;stroke-width:1;fill-rule:evenodd;">
  
  </polygon>
  
  <polygon points="0,400 100,200 200,400 0,400 50,300 150,300 100,400 50,300" style="fill:white;stroke:purple;stroke-width:1;fill-rule:evenodd;"></polygon>
  
  <polygon points="0,400 50,300 100,400 0,400 25,350 75,350 50,400 25,350" style="fill:lime;stroke:purple;stroke-width:1;fill-rule:evenodd;"></polygon>
  Sorry, your browser does not support inline SVG.
</svg>
```

### Pan and Zoom ###

Quick bit of googling has revealed that there is a JQuery plugin available on GitHub with an example website http://danielhoffmann.github.io/jquery-svg-pan-zoom/ 