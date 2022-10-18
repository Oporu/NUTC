function rickroll(){
	window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank");
}
var i = 0;
var i2 = 0;
function looping(){
	i = (i+0.0125)%360;
	i2 = (i2+0.5)%360;
	r1 = 127*(1+Math.sin(i));
	r2 = 127*(1+Math.cos(i));
	document.documentElement.style.backgroundImage = "linear-gradient("+(i2).toString()+"deg,rgba("+r1.toString()+", "+r1.toString()+", "+(100).toString()+", 0.5), rgba("+r2.toString()+", "+r2.toString()+", "+(100).toString()+", 0.5)), url(\"./background.png\")";
	setTimeout(looping, 10);
}
document.onkeydown = rickroll;
looping();
fetch("https://api.countapi.xyz/hit/oporu.github.io/NUTC")
	.then(function(response) {
		return response.json();
	}).then(function(data) {
		document.getElementById("visits").innerText = data.value;
});