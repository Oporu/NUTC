var rotate = 0;
div = document.getElementById("box");
function doRotate(){
	rotate = (rotate+1)%360;
	div.style.transform = "rotate("+rotate.toString()+"deg)";
}
document.onclick = doRotate;
document.onwheel = doRotate;