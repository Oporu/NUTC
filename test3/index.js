<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Empty - test3</title>
</head>
<body>
	<div>get variable from url</div>
	<div>c = <span id="cSpace"></span></div>
	<script>
		varBox = (new URL(document.URL)).searchParams;
		c = Number(varBox.get("c"));
		if (!Number.isInteger(c)) c = 0;
		document.getElementById("cSpace").innerText = c.toString();
		location.href = location.hostname + `?c=${c+1}` 
	</script>
</body>
</html>