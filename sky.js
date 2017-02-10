var bird;
var pipes = [];
var bg;
var pic;
var img;
var bubbles = [];

function preload()
{
	img = loadImage("capricon/banana.png");
}



function setup() 
{
	createCanvas(1100,800);
	bg = loadImage("jungle.jpg");
	bird = new Bird();
	pipes.push(new Pipe());
	pic = loadImage("monky game.png");
}

function draw()
{
	background (bg);
	bird.update();
	bird.show();

	if (frameCount % 10 == 0)
	{
		pipes.push(new Pipe());
	}
	for (var i = pipes.length-1; i >= 0; i--) 
	{
		pipes[i].show();
		pipes[i].update();
	for (var i = banana.length-1; i >= 0; i--) 
	{
		banana[i].show();
		banana[i].display();


		if( pipes[i].offscreen())
		{
			pipes.splice(i, 1);
		}
		{

		}
	}
	
}

	function keyPressed()
	{
	if ( key == ' '){
		bird.up();
		//console.log( "SPACE");
	}
	
	} 

	function mousePressed ()
	{
		var b = new bubbles(mouseX, mouseY);
		bubbles.push (b);
	}
}
