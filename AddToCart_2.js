const cart = [];
    const cartItemsElement = document.querySelector('.cart-items');
    const totalElement = document.getElementById('total');

    function addToCart(button) {
        const productElement = button.parentElement;
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));

        const product = cart.find(item => item.name === productName);
        if (product) {
            product.quantity++;
        } else {
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        renderCart();
    }

    function renderCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`;
            cartItemsElement.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        totalElement.textContent = total.toFixed(2);
    }