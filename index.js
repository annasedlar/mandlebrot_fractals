var canvas = document.getElementById("canvas"); 
var context = canvas.getContext("2d"); 

context.beginPath();
context.rect(0,0, canvas.width, canvas.height);
context.fillStyle = randColor();
context.fill();

function randColor(){
	return ('#'+Math.floor(Math.random()*16777215).toString(16))
}