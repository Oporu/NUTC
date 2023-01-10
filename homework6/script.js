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
function rickroll(){
	for (i=0;i<tds.length;i++){
		if (i!=4)
			tds[i].innerHTML = "<iframe width='99' height='65' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1;rel=0&amp;showinfo=0' frameborder='0' allowfullscreen allow='autoplay'></iframe>"
	}
	tds[0].style.transform = "rotate("+(-45).toString()+"deg)";
	tds[1].style.transform = "rotate("+(0).toString()+"deg)";
	tds[2].style.transform = "rotate("+(45).toString()+"deg)";
	tds[3].style.transform = "rotate("+(-90).toString()+"deg)";
	tds[5].style.transform = "rotate("+(90).toString()+"deg)";
	tds[6].style.transform = "rotate("+(-135).toString()+"deg)";
	tds[7].style.transform = "rotate("+(180).toString()+"deg)";
	tds[8].style.transform = "rotate("+(135).toString()+"deg)";
	tds[4].innerHTML = "<iframe class='middleRoll' width='99' height='65' src='https://www.youtube.com/embed/rvrZJ5C_Nwg?autoplay=1&start=143;rel=0&amp;showinfo=0' frameborder='0' allowfullscreen allow='autoplay'></iframe>"
	document.onkeydown = rickroll2;
	document.oncontextmenu = rickroll2;
	document.ondragstart = rickroll2;
	setTimeout(()=>{document.onclick = rickroll2;}, 1);
	return;
}
document.onkeydown = rickroll;
document.getElementById("table").onclick = rickroll;