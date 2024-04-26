const cart = document.querySelector(".cart__products");
const buttons = document.querySelectorAll(".product__quantity-control");
const buttonAdd = document.querySelectorAll(".product__add");

for (let item of buttons) {
  item.addEventListener("click", (event) => {
    
    let value = event.target.parentNode.querySelector(".product__quantity-value");
    let change = +value.innerText;
    
    if (event.target.classList.contains("product__quantity-control_inc")) {
        change++;
        value.innerText = change;
    } else if (event.target.classList.contains("product__quantity-control_dec")) {
        if (change > 1) {
            change--;
            value.innerText = change;
        } else {
            value.innerText = 1;
        }
    }
  });
}

for (let item of buttonAdd) {
  item.addEventListener("click", (event) => {
    
    const product = event.target.closest(".product");
    const id = product.dataset.id;
    const addProduct = +event.target.parentNode.querySelector(".product__quantity-value").innerText;
    
    for (let item of cart.children) {
      
        if (item.dataset.id === id) {
            let countProduct = item.querySelector(".cart__product-count");
            let total = +countProduct.innerText;
            countProduct.innerText = total + addProduct;

            return false;
        }
    } 
    
    const productImage = product.querySelector(".product__image").src;
    const count = product.querySelector(".product__quantity-value").innerText;

    const productCart = `<div class="cart__product" data-id="${id}">
                                <img class="cart__product-image" src="${productImage}">
                                <div class="cart__product-count">${count}</div>
                            </div>`;

    cart.insertAdjacentHTML('beforeend', productCart);
  });
}