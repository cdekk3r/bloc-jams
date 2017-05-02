var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    var revealPoint = function(points) {
      for(var i - 0; i < points.length; i++) {
        points[i].style.opacity = 1;
        points[i].style.transform = "scaleX(1) translateY(0)";
        points[i].style.msTransform = "scaleX(1) translateY(0)";
        points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
      }
    };

    revealPoint();

};

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];

    window.addEventListener("scroll", function(event) {
       console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
         });
 }
