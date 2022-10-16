html = document.documentElement;
img = document.getElementById("img");

html.onclick = function(){
	window.open("../","_self");
}
var i = 0;
var s = 0;
var r1 = 0;
var g1 = 0;
var b1 = 0;
var r2 = 130;
var g2 = 130;
var b2 = 130;
looping = function(){
	i=(i+0.01)%360;
	sin = Math.sin(i);
	cos = Math.cos(i);
	r1 = 150*sin + 50;
	g1 = 150*sin + 150;
	b1 = 150*sin + 150;
	r2 = 150*cos + 50;
	g2 = 150*cos + 150;
	b2 = 150*cos + 150;
	html.style.backgroundImage = "linear-gradient(rgba("+r1.toString()+", "+g1.toString()+", "+b1.toString()+", 0.5), rgba("+r2.toString()+", "+g2.toString()+", "+b2.toString()+", 0.5))";
	img.style.transform = "rotate("+(Math.sin(i)*180+180).toString()+"deg)";
	setTimeout(looping, 10);
}
looping();
