const productImage = document.querySelector(".product-image");
const smallImage = document.querySelectorAll(".small-img");

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
