var canvas = document.getElementById("canvas"); 
var context = canvas.getContext("2d"); 

context.beginPath();
context.rect(0,0, canvas.width, canvas.height);
context.fillStyle = randColor();
context.fill();

function randColor(){
	return ('#'+Math.floor(Math.random()*16777215).toString(16))
}

context.lineWidth = 35;
context.strokeStyle = randColor();

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


context.createImageData(10, 10)
// ImageData { data: Uint8ClampedArray[400], width: 10, height: 10 }

var imageData = context.createImageData(canvas.width, canvas.height);
for (var i = 0; i < imageData.data.length; i += 1) {
    imageData.data[i] = Math.random() * 255;
}
context.putImageData(imageData, 0, 0); //  0, 0 is the offset to start putting the imageDate into the actual canvas. I won't use any other values for that in this article..