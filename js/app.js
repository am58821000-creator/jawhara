let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart() {
  cart.push({
    name: "Diamond Solitaire Ring",
    price: 2000
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart successfully");
}
