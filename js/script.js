const name = document.getElementById("name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("form");
const button = document.getElementById("button");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "" || name.value == null) {
    messages.push("Name is required");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }
  if (confirmPassword.value !== password.value) {
    messages.push("Passwords to not match");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
