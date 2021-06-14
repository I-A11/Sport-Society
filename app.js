const toggle = document.querySelector(".fa-bars");
const menuItems = document.getElementById("menuItems");

const loginForm = document.getElementById("login-form");
const regForm = document.getElementById("register-form");
const indicator = document.getElementById("indicator");
const loginBtn = document.querySelector(".login");
const registerBtn = document.querySelector(".register");

menuItems.style.maxHeight = "0px";
const menuToggle = () => {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
};

toggle.addEventListener("click", menuToggle);

const register = () => {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
};
const login = () => {
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
};

loginBtn.addEventListener("click", login);
registerBtn.addEventListener("click", register);
