
//___________________________________________________________________________
// Get the table body element
const tableBody = document.getElementById('table-body');
const clearCartButton = document.getElementById('clearCart');

clearCartButton.addEventListener('click', () => {
  // Clear the cart
  localStorage.removeItem('cart');

  // Redirect the user to the product page
  document.location.href = 'products.html';
});

// Function to generate table rows
function generateTableRow(item) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.category}</td>
    <td><img src="${item.image}" alt="picture" </td>
    <td>${item.description}</td>
    <td>${item.price}</td>
    <td>${item.quantity}</td>
    
  `;
  return row;
}

// Get the cart items from local storage
const cart = JSON.parse(localStorage.getItem('cart'));

// Generate table rows for purchased products
cart.forEach((item) => {
  const row = generateTableRow(item);
  tableBody.appendChild(row);
});
//_____________________________________________________________
let cartItems = JSON.parse(localStorage.getItem('cart'));

function displayCart() {
    let cartHTML = '';
    let totalPrice = 0; // Initialize total price variable

    cartItems.forEach(item => {
        cartHTML += `
            <div>
            </div>
        `;
        totalPrice += item.price; // Add item price to total price
    });

    // Display total price
    const totalPriceHTML = `
        <h1>Total: R${totalPrice.toFixed(2)}</h1>
    `;
    document.write(cartHTML + totalPriceHTML);
}

displayCart();
// Get the form and submit button elements
const form = document.getElementById('form');
const submitButton = document.getElementById('payment');

// Add an event listener to the submit button
submitButton.addEventListener('click', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Check if all form fields are filled in
  if (formData.get('name') && formData.get('email') && formData.get('phone') && formData.get('card') && formData.get('name') && formData.get('expiration-date') && formData.get('CVV')) {
    // Display a popup message
    alert('Thank you for shopping with us!');
     
    // Clear the form data
    form.reset();
   
    // if the is missing information, display this message
  } else {
    alert('Please fill in all required fields!');
  }
});
