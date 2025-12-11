const API_URL = "https://fakestoreapi.com/products";
const productList = document.getElementById("product-list");

async function loadProducts() {
  const res = await fetch(API_URL);
  const products = await res.json();

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" width="120">
      <h3>${p.title}</h3>
      <p>$${p.price}</p>
      <button class="add-btn">Добавить в корзину</button>
    `;

    card.querySelector("button").onclick = () => {
      window.addToCart(p);
    };

    productList.appendChild(card);
  });
}

loadProducts();
