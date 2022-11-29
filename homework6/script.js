r = "<table width='300px' id='table'><tr><th colspan='3'>九九乘法表</th></tr>";
for(var slot = 1; slot < 10; slot++){
	if (slot%3==1)
		r+="<tr>";
	r+="<td>";
	for (var m = 1; m < 10; m++)
		r += ("<span class='leftBox'><span class='left'>"
			+ slot.toString() + " * " + m.toString()
			+ " = </span><span class='rightBox'><span class='right'>"
			+ (slot*m).toString() + "</span></span></span><br>");
	r+="</td>";
	if (slot%3==0)
		r+="</tr>";
}
r+="</table>";
document.write(r);
function rickroll2(){
	window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank");
}
function rickroll(){
	table = document.getElementById("table");
	table.style.display = "none";
	document.documentElement.innerHTML += ("<center><iframe width='300' height='200' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' frameborder='0' allowfullscreen allow='autoplay'></iframe></center>")
	document.onkeydown = rickroll2;
	document.onkeyup = rickroll2;
	document.oncontextmenu = rickroll2;
	document.ondragstart = rickroll2;
	document.onclick = rickroll2;
	return;
}
document.onkeydown = rickroll;