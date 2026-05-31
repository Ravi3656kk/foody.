
if (window.Swiper) {
  var swiper = new Swiper(".mySwiper", {
    loop:true,
    navigation: {
      nextEl: "#next",
      prevEl: "#prev",
    },
  });
}

const hamburger = document.querySelector(".hemburger");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeCartBtn = document.querySelector(".close-btn");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");
const cartValue = document.querySelector(".cart-valu");
const cart = new Map();

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", (event) => {
    event.preventDefault();
    mobileMenu.classList.toggle("mobile-menu-active");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("mobile-menu-active");
    });
  });
}

function formatPrice(price) {
  return `\u20b9${price}`;
}

function updateCartView() {
  const items = Array.from(cart.values());
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartValue.textContent = totalItems;
  cartTotal.textContent = formatPrice(totalPrice);

  if (!items.length) {
    cartList.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    return;
  }

  cartList.innerHTML = items
    .map(
      (item) => `
        <div class="item" data-id="${item.id}">
          <div class="item-img">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="item-detail">
            <h4>${item.name}</h4>
            <h4 class="item-total">${formatPrice(item.price * item.quantity)}</h4>
          </div>
          <div class="quantity-control flex">
            <a href="#" class="quantity-btn minus-btn" aria-label="Decrease ${item.name}">
              <i class="fa-solid fa-minus"></i>
            </a>
            <h4 class="quantity-value">${item.quantity}</h4>
            <a href="#" class="quantity-btn plus-btn" aria-label="Increase ${item.name}">
              <i class="fa-solid fa-plus"></i>
            </a>
          </div>
        </div>
      `
    )
    .join("");
}

document.querySelectorAll(".add-cart-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const card = button.closest(".order-card");
    const id = card.dataset.id;
    const currentItem = cart.get(id);

    cart.set(id, {
      id,
      name: card.dataset.name,
      price: Number(card.dataset.price),
      image: card.dataset.image,
      quantity: currentItem ? currentItem.quantity + 1 : 1,
    });

    updateCartView();
    cartTab.classList.add("cart-tab-active");
  });
});

cartList.addEventListener("click", (event) => {
  const quantityButton = event.target.closest(".quantity-btn");

  if (!quantityButton) {
    return;
  }

  event.preventDefault();

  const itemElement = quantityButton.closest(".item");
  const item = cart.get(itemElement.dataset.id);

  if (!item) {
    return;
  }

  if (quantityButton.classList.contains("plus-btn")) {
    item.quantity += 1;
  } else {
    item.quantity -= 1;
  }

  if (item.quantity <= 0) {
    cart.delete(item.id);
  }

  updateCartView();
});

cartIcon.addEventListener("click", (event) => {
  event.preventDefault();
  cartTab.classList.add("cart-tab-active");
});

closeCartBtn.addEventListener("click", (event) => {
  event.preventDefault();
  cartTab.classList.remove("cart-tab-active");
});

updateCartView();
