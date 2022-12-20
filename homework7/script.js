total = 0
function addToCart(){
	product = document.getElementById("product").value;
	price = Number(document.getElementById("price").value);
	if (product==="" || product.includes('"') || product.includes("'")) return alert("不可用的商品名稱");
	if (typeof(cartStuff[product]) !== "undefined") return alert("商品已經存在");
	if (!Number.isFinite(price)) return alert("不可用的數量");
	if (price<=0) alert("這麼好哦");

	document.getElementById("price").value = "";
	document.getElementById("product").value = "";
	cart = document.getElementById("cart");
	//cart.innerHTML += `<tr id="a-${product}"><td><button type="button" name='${product}' id="" class="btn btn-warning" onclick="removeFromCart(this.name);">刪</button></td><td>${product}</td><td>1(數量)</td><td>${price}</td><td>${price}</td></tr>`;
	cart.innerHTML += `<tr id="a-${product}"><td><button type="button" name='${product}' class="btn btn-warning" onclick="removeFromCart(this.name);">刪</button></td><td class="text-break">${product}</td><td><input type="number" class="productAmount" name='${product}' min="1" step="1" value="1" placeholder="數量" onchange="updateAmount(this);"></td><td><div class="productPrice float-end">${price}</div></td><td><div class="float-end productFinalPrice">${price}</div></td></tr>`;

	cartStuff[product] = {"price": price, "amount": 1}
	updateTotal();
	for (product in cartStuff){
		document.getElementById(`a-${product}`).getElementsByClassName("productAmount")[0].value = cartStuff[product]["amount"];
	}
}
function updateTotal(){
	total = 0;
	for (product in cartStuff){
		total += cartStuff[product].price * cartStuff[product].amount;
	}
	document.getElementById("total").innerText = total.toString();
}
function updateAmount(self){
	if (!Number.isInteger(self.value)) self.value = Math.max(Math.floor(self.value),1);
	cartStuff[self.name]["amount"] = self.value;
	document.getElementById(`a-${self.name}`).getElementsByClassName("productFinalPrice")[0].innerHTML = self.value*cartStuff[self.name]["price"];
	updateTotal();

	//
}
function removeFromCart(product){
	document.getElementById(`a-${product}`).remove();
	delete cartStuff[product];
	updateTotal();
}
cartStuff = {}
window.onload = updateTotal
