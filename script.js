// Cart Data

let cart = [];
let cartCount = 0;

// Add To Cart

function addToCart(productName, price) {

cart.push({
name: productName,
price: price
});

cartCount++;

document.getElementById("cartCount").innerText = cartCount;

alert(productName + " Added To Cart ✅");

}

// Search Products

function searchProducts() {

let input =
document.getElementById("searchInput")
.value
.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(function(card){

let productName =
card.querySelector("h3")
.innerText
.toLowerCase();

if(productName.includes(input)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}

// Cart Icon Click

document.addEventListener("DOMContentLoaded", function(){

let cartButton =
document.querySelector(".cart-btn");

cartButton.addEventListener("click", function(){

if(cart.length === 0){

alert("Cart is Empty 🛒");

return;

}

let bill = "Your Cart:\n\n";

let total = 0;

cart.forEach(function(item){

bill += item.name +
" - ₹" +
item.price +
"\n";

total += item.price;

});

bill +=
"\n------------------\n";

bill +=
"Total = ₹" + total;

alert(bill);

});

});