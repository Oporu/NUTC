var rotate = 0;
div = document.getElementById("box");
document.onclick = function(){
	rotate = rotate+1%360;
	div.style.transform = "rotate("+rotate.toString()+"deg)";
}