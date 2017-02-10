function Bubbles (x,y)
{
	this.x = x;
	this.y = y;

	this.display = function() 
	{	
		imageMode(CENTRE);
		image (this.img, this.x, this.y);
	}
	this.update = function ()
	{
		this.x += random(-1,1);
		this.y += random (-1,1);
	}
}