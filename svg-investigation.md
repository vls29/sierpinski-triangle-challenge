## SVG Specific Investigation ##

SVG does seem like a nice way of drawing the triangles as they will be scalable and not loose quality/have to be re-drawn.

Biggest disadvantage is that it's quite browser specific...

### SVG W3Schools Try It Out SVG Sketch Pad ###

https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_polygon4

Example of drawing three triangles:

```
<svg height="400" width="400" viewBox="50 50 400 400">
  <polygon points="0,400 200,0 400,400 0,400 100,200 300,200 200,400 100,200" style="fill:white;stroke:purple;stroke-width:1;fill-rule:evenodd;">
  
  </polygon>
  
  <polygon points="0,400 100,200 200,400 0,400 50,300 150,300 100,400 50,300" style="fill:white;stroke:purple;stroke-width:1;fill-rule:evenodd;"></polygon>
  
  <polygon points="0,400 50,300 100,400 0,400 25,350 75,350 50,400 25,350" style="fill:lime;stroke:purple;stroke-width:1;fill-rule:evenodd;"></polygon>
  Sorry, your browser does not support inline SVG.
</svg>
```

### Pan and Zoom ###

Quick bit of googling has revealed that there is a JQuery plugin available on GitHub with an example website http://danielhoffmann.github.io/jquery-svg-pan-zoom/

Turns out that after having created a basic page (https://github.com/vls29/sierpinski-triangle-challenge/blob/master/svg-jquery-zoom-pan-example.html) using the above code that was built on w3schools, the svg pan zoom plugin had some significant bugs!  

I noticed that on Firefox if I double clicked, it paid no attention to the max zoom param - only when using mouse zooming would it pay attention.  This meant that I zoomed in a significant distance in Firefox and it started glitching so badly that the browser became unusable for a few seconds while it attempted to draw on screen (The browser was flashing and cpu usage for the Firefox process spiked).

I started to alter the code to provide a patch, but then checked the forks and noticed that someone has already made improvements (https://github.com/avcs06/Jquery-Svg-Pan-Zoom) in the zooming functionality.

