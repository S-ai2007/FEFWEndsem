# Q5 – Login Page with Local Storage

## Files
- `index.html` – login form structure
- `style.css` – page design and responsive styling
- `script.js` – form validation using JavaScript and Local Storage

## Run
1. Extract the ZIP file.
2. Open `index.html` in a browser.
3. Enter the demo credentials:
   - Email: `demo@example.com`
   - Password: `demo123`
4. Click **Sign in**. The page displays **Login Successful!**
5. Try a wrong email or password to see **Invalid email or password.**

## How it works
- The demo user is saved in Local Storage if no user is already saved.
- When the form is submitted, JavaScript prevents the page from reloading.
- The saved user object is read using `localStorage.getItem()` and `JSON.parse()`.
- The entered email and password are compared with the saved details.
- A success or error message is displayed.

## Connection with Q4
The Q4 signup page can save a user in the same format and key:
```javascript
localStorage.setItem("user", JSON.stringify({
  email: email,
  password: password
}));
```
For a classroom demonstration only: real applications must never store plain-text passwords in Local Storage. Use a secure backend and password hashing.
