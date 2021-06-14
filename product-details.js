const productImage = document.querySelector(".product-image");
const smallImage = document.querySelectorAll(".small-img");

const toggle = document.querySelector(".fa-bars");
const menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";
const menuToggle = () => {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
};

toggle.addEventListener("click", menuToggle);

smallImage[0].onclick = function () {
  productImage.src = smallImage[0].src;
};
smallImage[1].onclick = function () {
  productImage.src = smallImage[1].src;
};
smallImage[2].onclick = function () {
  productImage.src = smallImage[2].src;
};
smallImage[3].onclick = function () {
  productImage.src = smallImage[3].src;
};
