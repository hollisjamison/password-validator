// Get the input field and the submit button
const passwordField = document.querySelector(".input-field");
const submitBtn = document.querySelector(".btn");

// Add a click event listener to the submit button
submitBtn.onclick = function () {
  const password = passwordField.value;
  let isValid = true;

  // Check if the password meets the requirements using for loops
  if (password.length < 8) {
    alert("Password must be a minimum of 8 characters");
    isValid = false;
  }

  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i);
    if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    } else if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if ("!@#$%^&*()_+-=[]{};':\"\\|,.<>/?".indexOf(char) > -1) {
      hasSpecialChar = true;
    }
  }

  if (!hasLowerCase) {
    alert("Password must contain at least one lower case letter");
    isValid = false;
  }

  if (!hasUpperCase) {
    alert("Password must contain at least one upper case letter");
    isValid = false;
  }

  if (!hasNumber) {
    alert("Password must contain at least one numeric value");
    isValid = false;
  }

  if (!hasSpecialChar) {
    alert("Password must contain at least one special character");
    isValid = false;
  }

  // If the password is valid, show a success message
  if (isValid) {
    alert("Password is valid!");
  }
};
