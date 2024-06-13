// Create a container for the form
let formContainer = document.createElement("div");
formContainer.style.backgroundImage = "url('https://images.unsplash.com/photo-1556740714-6459c3c16e65')";
formContainer.style.backgroundSize = "cover";
formContainer.style.height = "100vh";
formContainer.style.display = "flex";
formContainer.style.justifyContent = "center";
formContainer.style.alignItems = "center";

// Create a form element
let form = document.createElement("form");
form.style.width = "50%";
form.style.padding = "20px";
form.style.borderRadius = "10px";
form.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
form.style.backgroundColor = "#fff";

// Create a heading for the form
let heading = document.createElement("h2");
heading.textContent = "Login or Sign Up";
form.appendChild(heading);

// Create input fields for login
let loginFields = document.createElement("div");
loginFields.style.display = "flex";
loginFields.style.flexDirection = "column";
loginFields.style.alignItems = "center";

let emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Email";
loginFields.appendChild(emailInput);

let passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Password";
loginFields.appendChild(passwordInput);

let loginButton = document.createElement("button");
loginButton.type = "submit";
loginButton.textContent = "Login";
loginFields.appendChild(loginButton);

form.appendChild(loginFields);

// Create input fields for signup
let signupFields = document.createElement("div");
signupFields.style.display = "flex";
signupFields.style.flexDirection = "column";
signupFields.style.alignItems = "center";

let nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.placeholder = "Name";
signupFields.appendChild(nameInput);

let emailInput2 = document.createElement("input");
emailInput2.type = "email";
emailInput2.placeholder = "Email";
signupFields.appendChild(emailInput2);

let passwordInput2 = document.createElement("input");
passwordInput2.type = "password";
passwordInput2.placeholder = "Password";
signupFields.appendChild(passwordInput2);

let signupButton = document.createElement("button");
signupButton.type = "submit";
signupButton.textContent = "Sign Up";
signupFields.appendChild(signupButton);

form.appendChild(signupFields);

// Add the form to the container
formContainer.appendChild(form);

// Add the container to the page
document.body.appendChild(formContainer);

// Hide the actual content
let actualContent = document.querySelector("main");
actualContent.style.display = "none";

// Add an event listener to the login button
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Login logic here
  console.log("Login button clicked");
  formContainer.style.display = "none";
  actualContent.style.display = "block";
});

// Add an event listener to the signup button
signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Signup logic here
  console.log("Signup button clicked");
  formContainer.style.display = "none";
  actualContent.style.display = "block";
});
//________________________________________
// Create a variable to store the login status
let isLoggedIn = false;

// Add an event listener to the login button
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Login logic here
  console.log("Login button clicked");
  isLoggedIn = true;
  // Store the login status in session storage
  sessionStorage.setItem("isLoggedIn", true);
  // Display the loading screen
  displayLoadingScreen();
});

// Add an event listener to the signup button
signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Signup logic here
  console.log("Signup button clicked");
  isLoggedIn = true;
  // Store the login status in session storage
  sessionStorage.setItem("isLoggedIn", true);
  // Display the loading screen
  displayLoadingScreen();
});

// Function to display the loading screen
function displayLoadingScreen() {
  // Create a loading screen container
  const loadingScreen = document.createElement("div");
  loadingScreen.className = "loading-screen";
  document.body.appendChild(loadingScreen);

  // Create a spinner element
  const spinner = document.createElement("div");
  spinner.className = "spinner";
  loadingScreen.appendChild(spinner);

  // Create a welcome message element
  const welcomeMessage = document.createElement("p");
  welcomeMessage.textContent = "Welcome!";
  loadingScreen.appendChild(welcomeMessage);

  // Add CSS to style the spinner
  spinner.style.animation = "spin 5s linear infinite";

  // Add CSS to style the welcome message
  welcomeMessage.style.fontSize = "24px";
  welcomeMessage.style.fontWeight = "bold";
  welcomeMessage.style.color = "#333";

  // Wait for 5 seconds before redirecting to the home page
  setTimeout(() => {
    loadingScreen.remove();
    formContainer.style.display = "none";
    actualContent.style.display = "block";
  }, 5000);
}
// Check if the user is logged in on page load
if (sessionStorage.getItem("isLoggedIn") === "true") {
  isLoggedIn = true;
  formContainer.style.display = "none";
  actualContent.style.display = "block";
} else {
  isLoggedIn = false;
  formContainer.style.display = "block";
  actualContent.style.display = "none";
}

// Add an event listener to all links on the page
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert("Please log in or sign up before accessing this page.");
    }
  });
});

//_______________________________________________
 // Add event listener to contact form
 document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form data
  const formData = new FormData(e.target);
  // Send form data to server or do something with it
  console.log(formData);
});
// Add event listener to newsletter form
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Get form data
  const formData = new FormData(e.target);
  // Send form data to server or do something with it
  console.log(formData);
});

