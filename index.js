let priceOne = Number(document.getElementById("priceOne").textContent);
let priceTwo = Number(document.getElementById("priceTwo").textContent);
let priceThree = Number(document.getElementById("priceThree").textContent);
let priceFour = Number(document.getElementById("priceFour").textContent);

document.getElementById("totalPrice").textContent =
  priceOne + priceTwo + priceThree + priceFour;

function getDiscount() {
  var discountPriceOne = priceOne - priceOne * 0.2;
  document.getElementById("priceOne").textContent = discountPriceOne;
  var discountPriceTwo = priceTwo - priceTwo * 0.2;
  document.getElementById("priceTwo").textContent = discountPriceTwo;
  var discountPriceThree = priceThree - priceThree * 0.2;
  document.getElementById("priceThree").textContent = discountPriceThree;
  var discountPriceFour = priceFour - priceFour * 0.2;
  document.getElementById("priceFour").textContent = discountPriceFour;

  document.getElementById("totalPrice").textContent =
    discountPriceOne +
    discountPriceTwo +
    discountPriceThree +
    discountPriceFour;
}
