document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.getElementById('items');

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function addItemToCart(item) {
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log('Item added to cart:', item);
    }

    const itemList = [
        { name: 'Italian Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 2.90, imageUrl: './item_1.jpg', reverse: false },
        { name: 'Greek Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 4.90, imageUrl: './item_2.jpg', reverse: true },
        { name: 'Italian Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 2.90, imageUrl: './item_1.jpg', reverse: false },
        { name: 'Greek Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 4.90, imageUrl: './item_2.jpg', reverse: true },
        { name: 'Italian Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 2.90, imageUrl: './item_1.jpg', reverse: false },
        { name: 'Greek Pizza', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia', price: 4.90, imageUrl: './item_2.jpg', reverse: true }
    ];

    function addItem(name, description, price, imageUrl, reverse = false) {
        const itemIndex = itemsContainer.children.length + 1;
        const itemClass = reverse ? 'item reverse' : 'item';

        const itemHTML = `
            <div class="${itemClass}">
                <img src="${imageUrl}" />
                <div class="info">
                    <h1>${name}</h1>
                    <h6>${description}</h6>
                    <div class="info-p">
                        <div class="price">$${price.toFixed(2)}</div>
                        <button class="btn-3 index-${itemIndex}">Order</button>
                    </div>
                </div>
            </div>
        `;

        itemsContainer.insertAdjacentHTML('beforeend', itemHTML);

        // Add click event listener to the order button
        const orderButton = document.querySelector(`.index-${itemIndex}`);
        orderButton.addEventListener('click', function() {
            const selectedItem = {
                count: 1,
                name: name,
                imageUrl: imageUrl,
                price: price
            };
            addItemToCart(selectedItem);
        });

    }

    itemList.forEach(item => {
        addItem(item.name, item.description, item.price, item.imageUrl, item.reverse);


        


    });
});
