//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
carheight=150;
carwidth=75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carx=10;
cary=330;
function add() {
	//upload car, and background images on the canvas.
	background_imgtag=new Image();
	background_imgtag.onload=uploadBackground;
	background_imgtag.src=background_image;

	greencar_imgtag=new Image();
	greencar_imgtag.onload=uploadgreencar;
	greencar_imgtag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgtag,carx,cary,carwidth,carheight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(cary>=0){
		cary=cary-10;
		console.log("up");
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(cary<=500){
		cary=cary+10;
		console.log("down");
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(carx>=0){
		carx=carx-10;
		console.log("left");
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(carx<=700){
		carx=carx+10;
		console.log("right");
		uploadBackground();
		uploadgreencar();
	}
}
