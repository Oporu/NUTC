theTable = document.getElementById("theTable");
var theTableThing = 0;
var theTableThing2 = 0;
theTableUpdate = function(){
	theTableThing = ((theTableThing + 0.01) % 360);
	theTable.width = (500 + (Math.sin(theTableThing) * 200)).toString() + "px";
	for(i = 0; i < document.getElementsByTagName("td").length; i++){
		if (i%2==0)
			document.getElementsByTagName("td")[i].style.transform = "rotate("+(Math.cos(theTableThing)*180+180).toString()+"deg)";
		else
			document.getElementsByTagName("td")[i].style.transform = "rotate("+(Math.sin(theTableThing)*180+180).toString()+"deg)";
	}
	setTimeout(theTableUpdate,10);
}