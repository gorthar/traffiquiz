const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

// Contact Form
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});
checkInputs = () => {
  // get the values from the inputs
  const nameValue = name.value.trim();
  console.log(nameValue);
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  console.log(isEmail(emailValue));
  if (nameValue === "") {
    // show error
    // add error class
    setErrorFor(name, "Name cannot be blank");
  } else if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank");
  } else {
    setSuccessFor(message);
  }
};
setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.classList.add("error");
};
setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "contact-form success";
  const small = formControl.querySelector(".small");
  small.innerText = "Fom submitted successfully!";
  small.style.color = "green";
};

isEmail = (email) => {
  return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
    email
  );
};
