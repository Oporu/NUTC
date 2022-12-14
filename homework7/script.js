total = 0
function addToCart(){
	product = document.getElementById("product").value;
	price = Number(document.getElementById("price").value);
	if (!Number.isInteger(price)) return alert("invaild amount input");
	if (product=="") return alert("invaild product name");

	if (typeof(cartStuff[product]) !== "undefined") return alert ("產品已經存在");

	document.getElementById("price").value = "";
	document.getElementById("product").value = "";
	cart = document.getElementById("cart");
	cart.innerHTML += `<tr id="a-${product}"><td><button type="button" name="" id="" class="btn btn-warning" onclick="removeFromCart('${product}');">刪</button></td><td>${product}</td><td>1</td><td>${price}</td><td>${price}</td></tr>`;

	cartStuff[product] = {"price": price, "amount": 1}
	updateTotal();

}
function updateTotal(){
	total = 0;
	for (product in cartStuff){
		total += cartStuff[product].price * cartStuff[product].amount;
	}
	document.getElementById("total").innerText = total.toString();
}
function removeFromCart(product){
	document.getElementById(`a-${product}`).remove();
	delete cartStuff[product];
	updateTotal();
}
cartStuff = {}

