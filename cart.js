document.addEventListener("DOMContentLoaded", function () {
    // Select the cart item container
    var cartItemContainer = document.getElementById("cart-item");
    

    // Function to display cart items
    function displayCartItems() {
      // Get cart items from local storage
      var cartItems = JSON.parse(localStorage.getItem("cartItems"));
      var totalElement = document.getElementById("total");
    console.log(totalElement)
    var total = 0;

    if (cartItems && cartItems.length > 0) {
        total = cartItems.reduce(function (acc, item) {
          return acc + (item.price * item.count);
        }, 0);
      }
  
      // Clear previous cart items
      cartItemContainer.innerHTML = "";
  
      // Check if there are items in the cart
      if (cartItems && cartItems.length > 0) {
        // Loop through each item in the cart
        cartItems.forEach(function (item) {
          // Create a div element for each item
          var cartItemDiv = document.createElement("div");
          cartItemDiv.classList.add("cart-item");
          
          // Set inner HTML for the cart item
          cartItemDiv.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <div class="item-details">
                  <h3>${item.name}</h3>
                  <p>Price: $${item.price.toFixed(2)}</p>
                  <p>Quantity: ${item.count}</p>
                </div>
          `;
          
          totalElement.innerHTML = "Total: $" + total.toFixed(2);

          // Append the cart item to the container
          cartItemContainer.appendChild(cartItemDiv);
          
        });
      } else {
        // If cart is empty, display a message
        cartItemContainer.innerHTML = "<p>Your cart is empty.</p>";
      }
    }
  
    // Call the function to display cart items when the page loads
    displayCartItems();

    var whatsappOrderBtn = document.getElementById("whatsapp-order-btn");
    function sendOrderToWhatsApp() {
      var cartItems = JSON.parse(localStorage.getItem("cartItems"));
      if (cartItems && cartItems.length > 0) {
        var message = "Order Details:\n\n";
        var total = 0;
  
        cartItems.forEach(function (item) {
          message += `${item.name} - $${item.price.toFixed(2)} x ${item.count}\n`;
          total += item.price * item.count;
        });
  
        message += `\nTotal: $${total.toFixed(2)}`;
        var encodedMessage = encodeURIComponent(message);
        var whatsappUrl = `https://wa.me/76482570?text=${encodedMessage}`;
  
        // Open WhatsApp with the message
        window.open(whatsappUrl, "_blank");
      } else {
        alert("Your cart is empty.");
      }
    }
    whatsappOrderBtn.addEventListener("click", sendOrderToWhatsApp);

  });
  