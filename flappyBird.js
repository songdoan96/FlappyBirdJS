var cvs = document.getElementById("canvas");
var c = cvs.getContent("2d");




function draw(){
	c.fillRect(0,0,20,20);
	requestanimationframe(draw);
}

draw();
