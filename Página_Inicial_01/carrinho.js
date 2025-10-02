<script>
// Recupera os produtos salvos no localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  cartItemsContainer.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.addEventListener("click", () => {
      removeFromCart(item.id);
    });

    li.appendChild(removeBtn);
    cartItemsContainer.appendChild(li);

    total += item.price;
  });

  totalElement.textContent = `R$ ${total.toFixed(2)}`;
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

document.getElementById("checkout").addEventListener("click", () => {
  if(cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Compra finalizada com sucesso!");
  cart = [];
  localStorage.removeItem("cart"); // limpa do navegador
  renderCart();
});

renderCart();
</script>
