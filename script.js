let cartCount = 0;

function addToCart() {
  cartCount++;

  document.getElementById("cart-count").innerText = cartCount;

  alert("Bag added to cart!");
}