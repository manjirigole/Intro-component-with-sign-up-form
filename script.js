"use strict";
// Define variables
const form = document.querySelector(".signup-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = [
    { id: "fname", error: "First Name cannot be empty" },
    { id: "lname", error: "Last Name cannot be empty" },
    { id: "email", error: "Email  cannot be empty" },
    { id: "password", error: "Password cannot be empty" },
  ];

  let isValid = true;
  const errorMsg = document.querySelector(".errortext");

  if (errorMsg) {
    errorMsg.hidden = true;
    console.log("hide");
  }
  inputs.forEach(({ id, error }) => {
    const input = document.getElementById(id);
    const errorText = input.nextElementSibling;
    if (input.value.trim() === "") {
      input.style.borderColor = "hsl(0, 100%, 74%)";
      input.style.backgroundImage = "url('./images/icon-error.svg')";
      input.style.backgroundRepeat = "no-repeat";
      input.style.backgroundPosition = "right 20px center";
      input.style.borderWidth = "2px";
      errorText.textContent = error;
      errorText.hidden = false;
      errorMsg.hidden = false;
      isValid = false;
      errorMsg.hidden = false;

      if (id === "email") {
        input.placeholder = "email@example/com";
      }
    } else {
      input.style.borderColor = "hsl(246, 25%, 77%)";
      errorText.hidden = true;
      input.style.backgroundImage = "none";
      // Reset the email placeholder if the email is valid
      if (id === "email") {
        input.placeholder = "Email Address";
      }
    }
  });

  if (isValid) {
    alert("Form submitted successfully!");
  }
});
