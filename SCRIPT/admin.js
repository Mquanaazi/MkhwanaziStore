let main = document.querySelector('main');
let productGrid = document.querySelector('.product-grid');

// retrieve products from local storage
let items = JSON.parse(localStorage.getItem('items'));

// display products in grid
items.forEach((item) => {
    let productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p>Category: ${item.category}</p>
        <p>Price: R${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
    `;
    productGrid.appendChild(productCard);
});

// Add event listener to edit product button
productGrid.addEventListener('click', (e) => {
    if (e.target.tagName === 'H2') {
        const productId = e.target.textContent;
        const product = items.find((item) => item.name === productId);
        // display edit product form
        const editForm = document.createElement('form');
        editForm.innerHTML = `
            <label for="name">Name:</label>
            <input type="text" id="name" value="${product.name}">
            <label for="category">Category:</label>
            <input type="text" id="category" value="${product.category}">
            <label for="price">Price:</label>
            <input type="number" id="price" value="${product.price}">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" value="${product.quantity}">
            <button type="submit">Update</button>
        `;
        main.appendChild(editForm);
    }
});

// Add event listener to update product
main.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const productId = formData.get('name');
    const product = items.find((item) => item.name === productId);
    product.name = formData.get('name');
    product.category = formData.get('category');
    product.price = formData.get('price');
    product.quantity = formData.get('quantity');
    localStorage.setItem('items', JSON.stringify(items));
    location.reload();
});