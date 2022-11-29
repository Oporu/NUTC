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
tds = document.getElementsByTagName("td")
function rickroll2(){
	window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank");
}
function loop(){
	loop.count= (loop.count+1)%360
	tds[4].style.transform = "rotate("+(loop.count).toString()+"deg)";
	setTimeout(loop,10);
}loop.count=0
function rickroll(){
	for (i=0;i<tds.length;i++){
		tds[i].innerHTML = "<iframe width='99.66' height='50' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' frameborder='0' allowfullscreen allow='autoplay'></iframe>"
	}
	tds[0].style.transform = "rotate("+(-45).toString()+"deg)";
	tds[1].style.transform = "rotate("+(0).toString()+"deg)";
	tds[2].style.transform = "rotate("+(45).toString()+"deg)";
	tds[3].style.transform = "rotate("+(-90).toString()+"deg)";
	//tds[4].style.transform = "rotate("+(0).toString()+"deg)";
	tds[5].style.transform = "rotate("+(90).toString()+"deg)";
	tds[6].style.transform = "rotate("+(-135).toString()+"deg)";
	tds[7].style.transform = "rotate("+(180).toString()+"deg)";
	tds[8].style.transform = "rotate("+(135).toString()+"deg)";
	loop();
	document.onkeydown = rickroll2;
	document.oncontextmenu = rickroll2;
	document.ondragstart = rickroll2;
	document.onclick = rickroll2;
	return;
}

document.onkeydown = rickroll;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	document.getElementById("table").onclick = rickroll;