// NOTE attempt to grab app components and draw SVG paths between them
// unsuccessful - try refs inside app, then findDOMNode if that fails
var timelines = document.getElementsByClassName("timeline-nodes");
timelines.length > 0 && console.log(timelines[0]);
