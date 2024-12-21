function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  }
  
  // Event listener for "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const item = {
        id: button.dataset.id,
        name: button.dataset.name,
        price: parseFloat(button.dataset.price),
        image: button.dataset.image,
      };
      addToCart(item);
    });
  });
  
  // Load cart items
  function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
  
    cartContainer.innerHTML = ""; // Clear previous cart items
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }
  
    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>Price: ₦${item.price.toLocaleString()}</p>
          <div>
            <button class="update-quantity" data-id="${item.id}" data-action="decrease">-</button>
            <span>${item.quantity}</span>
            <button class="update-quantity" data-id="${item.id}" data-action="increase">+</button>
          </div>
        </div>
        <button class="remove-item" data-id="${item.id}">Remove</button>
      `;
      cartContainer.appendChild(cartItem);
    });
  
    updateSubtotal();
    addCartEventListeners();
  }
  
  // Update item quantity
  function updateQuantity(id, action) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((cartItem) => cartItem.id === id);
  
    if (item) {
      if (action === "increase") {
        item.quantity += 1;
      } else if (action === "decrease" && item.quantity > 1) {
        item.quantity -= 1;
      }
      if (item.quantity <= 0) {
        removeFromCart(id);
        return;
      }
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
  
  // Remove item from cart
  function removeFromCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter((item) => item.id !== id);
  
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    loadCart();
  }
  
  // Update subtotal
  function updateSubtotal() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
    document.getElementById("subtotal").textContent = `₦${subtotal.toLocaleString()}`;
  }
  
  // Clear cart
  function clearCart() {
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    location.reload();
  }
  
  // Add event listeners for quantity buttons and remove button
  function addCartEventListeners() {
    document.querySelectorAll(".update-quantity").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        const action = button.dataset.action;
        updateQuantity(id, action);
      });
    });
  
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        removeFromCart(id);
      });
    });
  }
  
  // Load cart on page load
  if (document.getElementById("cart-items")) {
    document.addEventListener("DOMContentLoaded", loadCart);
  }
  // Clear cart and redirect to the homepage
  function clearCart() {
    // Remove the cart from localStorage
    localStorage.removeItem("cart");
  
    // Alert the user that the order has been placed
    alert("Order placed successfully!");
  
    // Redirect to the homepage (index.html)
    window.location.href = "index.html";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                // Remove 'show' when the element is out of view
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
    });

    elements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          } else {
              entry.target.classList.remove("show");
          }
      });
  }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
  });

  elements.forEach((element) => observer.observe(element));
});


  
  