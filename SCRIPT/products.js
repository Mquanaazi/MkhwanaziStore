let main = document.querySelector('main');

function CreateItem(id, name, category, image, description, price, quantity) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.image = image;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
}

   let item1 = new CreateItem(1,"Bucket-Hat","hat","https://mquanaazi.github.io/huluImages/anotherMan.jpg","Men's black bucket hat",855,1)
   let item2 = new CreateItem(2,"Winter-Hat","hat","https://mquanaazi.github.io/huluImages/anotherWoman.webp","unisex black winter hat",650,1)
   let item3 = new CreateItem(3,"Bucket-Hat","hat","https://mquanaazi.github.io/huluImages/backetHat.webp","unisex fabiani bucket hat",850,1)
   let item4 = new CreateItem(4,"Back-Pack","bag","https://mquanaazi.github.io/huluImages/backPack.webp","unisex mustard back pack",899.99,1)
   let item5 = new CreateItem(5,"Belt","belt","https://mquanaazi.github.io/huluImages/belt.webp","Men's black belt",550,1)
   let item6 = new CreateItem(6,"Boys-Watch","watch","https://mquanaazi.github.io/huluImages/boysWatch.webp","kid's blue watch",300.99,1)
   let item7 = new CreateItem(7,"Bucket-Hat","hat","https://mquanaazi.github.io/huluImages/child.jpg","kid's blue bucket hat",750,1)
   let item8 = new CreateItem(8,"Pink-Muffs","earMuffs","https://mquanaazi.github.io/huluImages/earMuffs.webp","pink ear muffs",350,1)
   let item9 = new CreateItem(9,"Hand-Bag","purse","https://mquanaazi.github.io/huluImages/handBag.webp","women's Steve Madden black purse",599.99,1)
   let item10 = new CreateItem(10,"Winter-Hats","hat","https://mquanaazi.github.io/huluImages/kids.webp","kid's winter caps,various colours,all 3 for 1",750,1)
   let item11 = new CreateItem(11,"Summer-Cap","cap","https://mquanaazi.github.io/huluImages/kidsCap.webp","kid's Frozen summer cap,blue and white",189.99,1)
   let item12 = new CreateItem(12,"Gloves","gloves","https://mquanaazi.github.io/huluImages/kidsGloves.webp","kid's black gloves for winter",109.99,1)
   let item13 = new CreateItem(13,"Gift-Box","gifts","https://mquanaazi.github.io/huluImages/manGiftBox.webp","gift box for men,perfect gift for fathers' day.",2999.99,1)
   let item14 = new CreateItem(14,"Smart-Bag","bag","https://mquanaazi.github.io/huluImages/mrMan.jpg","man's black smart bag/purse",650,1)
   let item15 = new CreateItem(15,"Sun-Glasses","shades","https://mquanaazi.github.io/huluImages/woman.png","women summer sun glasses.",250,1)
   let item16 = new CreateItem(16,"Wallet","purse","https://mquanaazi.github.io/huluImages/womanWallet.webp","women's purse/wallet",450,1)
   let item17 = new CreateItem(17,"Sun-Glasses","shades","https://mquanaazi.github.io/huluImages/womanZaza.webp","women's shades/sun glasses",350,1)
   let item18 = new CreateItem(18,"zaza","shades","https://mquanaazi.github.io/huluImages/zazael.webp","unisex sun glasses",255,1)

   let items=[item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18]; 

localStorage.setItem('items', JSON.stringify(items));

items.forEach(item => {
    main.innerHTML += `
      <div>
        <img src="${item.image}" class="image">
        <p>R${item.price}</p>
        <button id="viewMore"> View More </button>
        <button class="purchase" value='${item.price}'> Purchase </button>
      </div>
    `;
  });

let purchaseButtons = document.querySelectorAll('.purchase');
let cart = []; // initialize cart as an empty array

purchaseButtons.forEach(button => {
    button.addEventListener('click', () => {
        let selectedItem = items.find(item => item.price == button.value);
        let existingItem = cart.find(item => item.id === selectedItem.id);

        if (existingItem) {
            existingItem.quantity++;
            existingItem.price = existingItem.price * existingItem.quantity;
        } else {
            selectedItem.quantity = 1;
            cart.push(selectedItem);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});

let viewButton = document.querySelectorAll('#viewMore');
viewButton.forEach(button => {
    button.addEventListener('click', () => {
        location.replace('checkout.html')
    });
});


// Function to display items
function displayItems(items) {
  main.innerHTML = "";
  items.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>Category: ${item.category}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
    `;
    main.appendChild(card);
  });
}

// // Function to sort items by price
// function sortByPrice() {
//   items.sort((a, b) => a.price - b.price);
//   displayItems(items);
// }

// // Function to sort items by name
// function sortByName() {
//   items.sort((a, b) => a.name.localeCompare(b.name));
//   displayItems(items);
// }

// Event listeners

// Initial display of items
// document.querySelector('.sort-by-name button').addEventListener("click", sortByNameButton );
// document.querySelector('.sort-by-price button').addEventListener("click", sortByPriceButton);
// document.querySelector('.search-button button').addEventListener("click", searchButton);
// displayItems(items);   

// //write a code for the search button to filter the data
// const searchInput = document.querySelector('.search-input input');
// const searchButton = document.querySelector('.search-button button');
// const sortByNameButton = document.querySelector('.sort-by-name button');
// const sortByPriceButton = document.querySelector('.sort-by-price button');

// searchButton.addEventListener('click', () => {
//   const searchValue = searchInput.value.toLowerCase();
//   const searchByNumber = searchInput.value;
//   const filteredItems = items.filter((item) => {
//     return (
//       item.id.toString().includes(searchValue) ||
//       item.name.toLowerCase().includes(searchValue) ||
//       item.category.toLowerCase().includes(searchValue) ||
//       item.description.toLowerCase().includes(searchValue) ||
//       item.price.toString().includes(searchByNumber) ||
//       item.quantity.toString().includes(searchByNumber)
//     );
//   });

//   main.innerHTML = ''; // clear the main container
//   filteredItems.forEach((item) => {
//     const card = document.createElement('div');
//     card.className = 'card';
//     card.innerHTML = `
//       <img src="${item.image}" alt="${item.name}">
//       <h2>${item.name}</h2>
//       <p>Category: ${item.category}</p>
//       <p>Price: ${item.price}</p>
//       <p>Quantity: ${item.quantity}</p>
//     `;
//     main.appendChild(card);
//   });
// });
// sortByNameButton.addEventListener('click', () => {
//   items.sort((a, b) => a.name.localeCompare(b.name));
//   displayItems(items);
// });

// sortByPriceButton.addEventListener('click', () => {
//   items.sort((a, b) => a.price - b.price);
//   displayItems(items);
// });
const filterButton = document.querySelector('.filter-button button');
const categorySelect = document.querySelector('.category-select select');

filterButton.addEventListener('click', () => {
  const selectedCategory = categorySelect.value;
  const filteredItems = items.filter((item) => item.category === selectedCategory);

  main.innerHTML = ''; // clear the main container
  filteredItems.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p>Category: ${item.category}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
    `;
    main.appendChild(card);
  });
});