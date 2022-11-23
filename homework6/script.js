var l = 0;
r = "<table width='300px'><tr><th colspan='3'>九九乘法表</th></tr>";
/*for(var y = 1; y < 4; y++){
	r+="<tr>"
	for(var x = 1; x < 4; x++){
		l++;
		r+="<td>";
		for (var m = 1; m < 10; m++){
			r+= "<span class='left'>" + l.toString() + "*" + m.toString() + "=</span><span class='right'>" + (l*m).toString() + "<span class='left'><br>";
		}
		r+="</td>";
	}
	r+="</tr>"
}*/
for(var s = 1; s < 10; s++){
	if (s%3==1)
		r+="<tr>";
	r+="<td>";
	for (var m = 1; m < 10; m++){
		//r+= "<span class='left'>" + s.toString() + "*" + m.toString() + "=</span><span class='right'>" + (s*m).toString() + "<span class='left'><br>";
		r+= "<span class='leftBox'><span class='left'>" + s.toString() + " * " + m.toString() + " = </span><span class='rightBox'><span class='right'>" + (s*m).toString() + "</span></span></span><br>";
	}
	r+="</td>";
	if (s%3==0)
		r+="</tr>";
}
r+="</table>";
document.write(r);