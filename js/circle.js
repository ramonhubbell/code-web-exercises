(function() {
    "use strict";

console.log("Math Objects In Javascript.");

    // create a circle object
    var circle = {
        radius: 3,


        getArea:  function () {
            var circleArea = (Math.PI * (Math.pow(this.radius, 2)));

            // hint: area = pi * radius^2

            return circleArea;
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.
            var circleArea = this.getArea();
                if (doRounding === true) {
                     circleArea = (Math.round(circleArea));
                }

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea);
        }
    };

    console.log("circle.getArea() " + circle.getArea());
    // console.log(circle.logInfo(false));

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);


})();
