function enc(i){return new TextEncoder().encode(JSON.stringify(i)).toString();}
function dec(i){return JSON.parse(new TextDecoder().decode(new Uint8Array(i.split(","))));}
test = new URL(document.URL).hash.substring(1);
function loadFromHash(){
	temp = dec(new URL(document.URL).hash.substring(1));
	for (i in temp){
		addToCart(i,temp[i]["price"]);
		cartStuff[i]["amount"] = temp[i]["amount"];
	}
	for (product in cartStuff){
		document.getElementById(`a-${product}`).getElementsByClassName("productAmount")[0].value = cartStuff[product]["amount"];
	}
}
/**/
total = 0;
url = ""
function addToCart_button(){
	if (!addToCart((document.getElementById("product").value),(Number(document.getElementById("price").value)))){
		document.getElementById("price").value = "";
		document.getElementById("product").value = "";
	}
}
function addToCart(product, price){
	if (product==="" || product.includes('"') || product.includes("'")) {alert("不可用的商品名稱"); return false};
	if (typeof(cartStuff[product]) !== "undefined") {alert("商品已經存在"); return false};
	if (!Number.isFinite(price)) {alert("不可用的數量"); return false};
	if (price<=0) alert("這麼好哦");

	document.getElementById("price").value = "";
	document.getElementById("product").value = "";
	cart = document.getElementById("cart");
	cart.innerHTML += `<tr id="a-${product}"><td><button type="button" name='${product}' class="btn btn-warning" onclick="removeFromCart(this);">刪</button></td><td class="text-break">${product}</td><td><input type="number" class="productAmount" name='${product}' min="1" step="1" value="1" placeholder="數量" onchange="updateAmount(this);"></td><td><div class="productPrice float-end">${price}</div></td><td><div class="float-end productFinalPrice">${price}</div></td></tr>`;

	cartStuff[product] = {"price": price, "amount": 1}
	updateTotal();
	for (product in cartStuff){
		document.getElementById(`a-${product}`).getElementsByClassName("productAmount")[0].value = cartStuff[product]["amount"];
	}
	return true;
}
function updateTotal(){
	total = 0;
	for (product in cartStuff){
		total += cartStuff[product].price * cartStuff[product].amount;
	}
	document.getElementById("total").innerText = total.toString();
	updateCopy();
}
function updateAmount(self){
	if (!Number.isInteger(self.value)) self.value = Math.max(Math.floor(self.value),1);
	cartStuff[self.name]["amount"] = self.value;
	self.parentNode.parentNode.getElementsByClassName("productFinalPrice")[0].innerHTML = self.value*cartStuff[self.name]["price"];
	updateTotal();
}
function removeFromCart(self){
	self.parentNode.parentNode.remove();
	delete cartStuff[self.name];
	updateTotal();
}
function updateCopy(){
	url = (new URL(document.URL)).origin + (new URL(document.URL)).pathname + "#" + enc(cartStuff);
	//document.getElementById("hash").innerText = (new URL(document.URL)).origin + (new URL(document.URL)).pathname + enc(cartStuff);
}
cartStuff = {};
window.onload = ()=>{
	loadFromHash();
	updateTotal()
};
