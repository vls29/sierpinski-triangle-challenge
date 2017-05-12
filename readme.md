## The Challenge ##

https://gist.github.com/thegecko/57f3a4705e7d90651fd5a0d1679a5df3

## First Thoughts ##

... I hate these sorts of things and my Java knowledge on drawing things is exceedingly out of date (9+ years) and I've only done server side things for the last 6 years.  

But I'll give it a go, even though my hopes are not high on completing this one!

## Initial Investigation ##

I looked in to Java, JavaScript and SVGs (see https://github.com/vls29/sierpinski-triangle-challenge/blob/master/investigation.md for more details) and came to the conclusion that I would use SVGs for drawing the triangles.

The reasons for choosing SVGs were:
- SVGs scale well, so when zooming there will be no need to re-draw the triangles - this may well be true for JavaScript too, but...
- I've always wanted to use SVGs in a little project as I created my first SVG well over 10 years ago for a website I own and always thought they were the way forward.  Unfortunately at the time, browser support was exceedingly limited, unlike today where SVGs can be viewed in most modern browsers.
- Pan and zoom functionality already written by someone else which will mean I won't have to re-invent the wheel (see https://github.com/vls29/sierpinski-triangle-challenge/blob/master/svg-investigation.md#pan-and-zoom)


## Coding ##

Since I wanted to have a few unit tests if possible on any JavaScript files that I wrote, I set about adding [Mocha](https://mochajs.org/) to my project folder.

The majority of the triangle.js class was written test first, but there were one or two points where I struggled to add tests (around the JQuery method calls) so had to test those manually once written.

I also struggled to add the necessary includes to the test.js file to allow the tests to use JQuery functions and not fail.

You'll notice that in the triangle.js file there are blocks of code which are switched on/off depending on the context they are called from.  Because the original html file I created was intended to be shipped as a standalone file without Node.js serving the file, I then found the module.exports function was a Node.js function.

I considered having a little web server running via Node.js, but had already spent a considerable amount of time and decided to make it conditional.  My knowledge on how to get a simple web server running, serving my html file is non-existent and it would have taken X more hours...

For the pan and zoom SVG functionality, I chose to use a third party solution https://github.com/avcs06/Jquery-Svg-Pan-Zoom (see https://github.com/vls29/sierpinski-triangle-challenge/blob/master/svg-investigation.md#pan-and-zoom for more background on pan and zoom svg investigation) rather than re-inventing the wheel.  Half of me was thinking, perhaps this is a considerable part of the challenge criteria, but the other half of me knew this would take days/weeks for me to write and therefore since other people had already written a very good solution to the problem, it was a logical choice in my situation.

Other than having the top point of the triangle slightly out of place (now corected!), the triangle class worked as expected when tried out in the browser.  

Upon zooming in, I realised that there would need to be a practical limit on the amount the user could zoom in.  I zoomed in to a point where thousands of triangles were being created and the time taken to render the new view would be a few minutes on my powerful laptop!

So since every child triangle of a parent triangle draws the same outer border, I decided to hide the parent when the children were drawn.  This meant a large number of triangles could then be removed from the dom, reducing the amount of SVGs drawn on the page.  This had a small impact on performance, so I restricted the default zoom depth to 3.  You can override this with firebug, but be warned it may cause your browser to become unstable and will take a significant amount more time to render for each additional level you zoom in!

### Things That I'd Improve If I Had Unlimited Time ###

1. Cleaning up the node check within the triangle class file.  If I had more time, I'd either use node to serve up the html file or find out how to use the class within the mocha test without having to export the class.

2. The main limitation on zooming in at present is the number of objects being created and the time to render those in the browser.  It may be possible to draw triangles within triangles in a single polygon programmatically (see this JSFiddle example I've created https://jsfiddle.net/snfsm44z/).  Whether this would work in practice and whether it would actually be more efficient... not sure...

3. Similar to the above idea of making things more efficient... it should be possible to pass the viewbox dimensions to the triangle classes and only render those which have dimensions within the viewbox area.  In theory this should improve performance.

## How To Run The Mocha Tests ##

If you have not already loaded all the Node.js dependencies, begin by running the following command
```
npm install
```

To run the tests, run the following command
```
npm test
```

## How To Run The Code ##

Either use the demo site below, or clone this GitHub repo to your pc and open up the index.html file in a browser (providing you're using a relatively modern browser!)

### Demo Site ###

http://www.v-s-f.co.uk/sierpinski-triangle

## Time Taken ##

Investigation: 3 hours  
Coding: 9 hours  
Documentation & Preparing Content: 3 hours