var canvas = document.getElementById("canvas"); 
var context = canvas.getContext("2d"); 

// context.beginPath();
// context.rect(0,0, canvas.width, canvas.height);
// context.fillStyle = randColor();
// context.fill();

// function randColor(){
// 	return ('#'+Math.floor(Math.random()*16777215).toString(16))
// }

// context.lineWidth = 35;
// context.strokeStyle = randColor();

// //scandinavian flag style colors and design
// context.beginPath();
// context.moveTo(canvas.width/2, 0);
// context.lineTo(canvas.width/2, canvas.height);
// context.stroke();

// context.beginPath();
// context.moveTo(0, canvas.height/2);
// context.lineTo(canvas.width, canvas.height/2);
// context.stroke();

// //random color line
// context.lineWidth = 5;
// context.strokeStyle = randColor();

// context.beginPath();
// context.moveTo(50, 100);
// context.lineTo(1200, 1000);
// context.stroke();

//pizelization
// context.createImageData(10, 10)
// // ImageData { data: Uint8ClampedArray[400], width: 10, height: 10 }

// var imageData = context.createImageData(canvas.width, canvas.height);
// for (var i = 0; i < imageData.data.length; i += 1) {
//     imageData.data[i] = Math.random() * 255;
// }
// context.putImageData(imageData, 0, 0); //  0, 0 is the offset to start putting the imageDate into the actual canvas. I won't use any other values for that in this article..

// var imageData = context.createImageData(canvas.width, canvas.height);
// for (var i = 0; i < canvas.width * canvas.height * 4; i += 4) {
//     imageData.data[i]     = 255;  // red channel
//     imageData.data[i + 1] = 0;    // blue channel
//     imageData.data[i + 2] = 0;    // green channel
//     imageData.data[i + 3] = 255;  // alpha channel
// }
// context.putImageData(imageData, 0, 0);


function Graph(canvas) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var imageData = ctx.createImageData(canvas.width, canvas.height);
    var aspectRatio = canvas.height / canvas.width

    this.r = 4
    this.center = {
        x: 0,
        y: 0
    };

    var indexToCoord = function(index) {
        index /= 4;
        coord =  {
            x: index % canvas.width,
            y: Math.floor(index / canvas.width)
        }
        coord.x = (((coord.x * this.r / canvas.width) - this.r / 2) + (this.center.x * aspectRatio)) / aspectRatio;
        coord.y = ((((coord.y * this.r / canvas.height) - this.r / 2) * -1) + this.center.y);
        return coord;
    }.bind(this)

    this.render = function(predicate) {
        for (var i = 0; i < canvas.width * canvas.height * 4; i += 4) {
            set = predicate(indexToCoord(i)) ? 255 : 0;
            imageData.data[i]     = 0;
            imageData.data[i + 1] = 0;
            imageData.data[i + 2] = 0;
            imageData.data[i + 3] = set;
        }
        context.putImageData(imageData, 0, 0);
    }
}

var graph = new Graph("canvas")

// the below is the default so we don't need to do it.
// graph.center = { x: 0, y: 0 }

graph.r = 500; // just for starters, sure.

graph.render(function(coord) {
    // stuff stuff stuff
    // return true or return false
})

graph.render(function(coord) {
    return (
        coord.x == coord.y
        ||
        coord.x * 2 == coord.y
        ||
        coord.x * 3 == coord.y
        ||
        coord.x * 4 == coord.y
        ||
        coord.x * 5 == coord.y
        ||
        coord.x * 6 == coord.y
        ||
        coord.x * 40 == coord.y
    )
});


