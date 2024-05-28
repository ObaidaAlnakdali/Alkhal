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


    

  });
  