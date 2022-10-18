img = document.getElementById("img");
document.documentElement.onclick = function(){
	window.open("../","_self");
}
var i = 0;
var a1 = 0;
var b1 = 0;
var a2 = 130;
var b2 = 130;
function looping(){
	i=(i+0.01)%360;
	sin = Math.sin(i);
	cos = Math.cos(i);
	a1 = 150*sin + 50;
	b1 = 150*sin + 150;
	a2 = 150*cos + 50;
	b2 = 150*cos + 150;
	document.documentElement.style.backgroundImage = "linear-gradient(rgba("+a1.toString()+", "+b1.toString()+", "+b1.toString()+", 0.5), rgba("+a2.toString()+", "+b2.toString()+", "+b2.toString()+", 0.5))";
	img.style.transform = "rotate("+((Math.sin(i) + 1) * 180).toString()+"deg)";
	setTimeout(looping, 10);
}
looping();
