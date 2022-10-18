html = document.documentElement;
		
var i = 0;
var i2 = 0;
function rickroll(){
	window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank");
}
document.onkeydown = rickroll;
function looping(){
	i = (i+0.0125)%360;
	i2 = (i2+0.5)%360;
	r1 = 127*Math.sin(i) + 127;
	r2 = 127*Math.cos(i) + 127;
	html.style.backgroundImage = "linear-gradient("+(i2).toString()+"deg,rgba("+r1.toString()+", "+r1.toString()+", "+(100).toString()+", 0.5), rgba("+r2.toString()+", "+r2.toString()+", "+(100).toString()+", 0.5)), url(\"./background.png\")";
	setTimeout(looping, 10);
}
looping();
/*
function cb(response){
    document.getElementById('visits').innerText = response.value;
}
<script async src="https://api.countapi.xyz/hit/oporu.github.io/visits?callback=cb"></script>
*/
fetch("https://api.countapi.xyz/hit/oporu.github.io/NUTC").then(function(response) {
	return response.json();
  }).then(function(data) {
	document.getElementById("views").innerText = data.value;
  });