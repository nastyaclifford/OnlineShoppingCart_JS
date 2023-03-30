let priceOne = Number(document.getElementById("priceOne").textContent);
let priceTwo = Number(document.getElementById("priceTwo").textContent);
let priceThree = Number(document.getElementById("priceThree").textContent);
let priceFour = Number(document.getElementById("priceFour").textContent);

let total = priceOne + priceTwo + priceThree + priceFour;

document.getElementById("totalPrice").textContent = total;

function getDiscount() {
  var discountPrice = total - total * 0.2;
  document.getElementById("totalPrice").textContent = discountPrice;
}
