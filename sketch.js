function setup()
{
	createCanvas(800, 800);
}

function draw()
{
	background(0);
	fill(255);
	ellipse(mouseX, mouseY, 100, 100);

	drawDonunt1(167,214,37,100,100);
	drawDonunt1(63,214,37,103,300,100);
	drawDonunt1(214,209,37255,400,200);
	drawDonunt1(214,108,37,74,500,300);
}

function drawDonunt1(r,g,b,x, y)
{

	//do#1
	fill(r,g,b,255);
	ellipse(x,y,200,200);
	fill(0);
	ellipse(x,y, 120,120);
}
