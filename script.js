// Q5: Login page using DOM events and Local Storage.

// The Q4 signup page can save the same object using:
// localStorage.setItem("user", JSON.stringify({ email: "...", password: "..." }));

const USER_KEY = "user";
const DEMO_USER = {
  email: "demo@example.com",
  password: "demo123"
};

// Add a demo user only when no user has been saved yet.
if (localStorage.getItem(USER_KEY) === null) {
  localStorage.setItem(USER_KEY, JSON.stringify(DEMO_USER));
}

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const resetDemoButton = document.getElementById("resetDemo");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredEmail = emailInput.value.trim();
  const enteredPassword = passwordInput.value;

  // Read the registered user's details from Local Storage.
  const savedUser = JSON.parse(localStorage.getItem(USER_KEY));

  if (
    savedUser &&
    enteredEmail === savedUser.email &&
    enteredPassword === savedUser.password
  ) {
    message.textContent = "Login Successful!";
    message.className = "message success";
  } else {
    message.textContent = "Invalid email or password.";
    message.className = "message error";
  }
});

// Restore the demo account if the saved details were changed.
resetDemoButton.addEventListener("click", function () {
  localStorage.setItem(USER_KEY, JSON.stringify(DEMO_USER));
  message.textContent = "Demo account has been reset.";
  message.className = "message success";
  loginForm.reset();
});
