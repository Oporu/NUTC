theTable = document.getElementById("theTable");
var theTableThing = 0;
function theTableUpdate(){
	theTableThing = ((theTableThing + 0.01) % 360);
	theTable.width = (500 + (Math.sin(theTableThing) * 200)).toString() + "px";
	(Array.prototype.slice.call(document.getElementsByTagName("td"))).forEach((element,index)=>{
		if (index%2==0)
			element.style.transform = "rotate("+(Math.cos(theTableThing)*180+180).toString()+"deg)";
		else
			element.style.transform = "rotate("+(Math.sin(theTableThing)*180+180).toString()+"deg)";
	})
}
