function Bird() 
{ 
	this.y = height/2;
	this.x = 25;
	this.gravity = 2;
	this.lift = -12;
	this.velocity = 0;

	this.show = function()
	{
		// fill(255);
		// ellipse(this.x,this.y,50,50);
		image ( pic,this.x,this.y,300,300);
	}

	this.up = function ()
	{
		this.velocity += -this.gravity * 10;
		this.velocity += this.lift;
	}

	this.update = function()
	{
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if ( this.y > height)
		{
			this.y = height;
			this.velocity = 0;
		}
		if (this.y < 0)
		{
			this.y = 0;
			this.velocity = 0;
		}
	}
}