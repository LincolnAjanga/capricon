function Pipe()
{
	this.top = random(height/2);
	this.bottom = random(width/4);
	this.x = width;
	this.w = 50;
	this.speed = 15;


	this.show = function()
	 {
	 	fill(255,0,0);
	 	rect(this.x,0,this.w,this.top);
	 	rect(this.x,height-this.bottom,this.w,this.bottom);

	} 

	this.update =  function() 
	{
		this.x -= this.speed;
	}

	this.offscreen = function ()
	{
		if ( this.x < -this.w)
		{
			return true;
		} else {
			return false

		}
	}
}

