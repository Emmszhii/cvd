const headerBtn = document.querySelector(".header_button");
const headerList = document.querySelector(".navigation ul");
const btnSpinner = document.querySelector(".button-spinner");
const btnCart = document.querySelector("#btn-buy .fa-cart-shopping");
const btnCheckCark = document.querySelector("#btn-buy .fa-check");
const btnBuy = document.getElementById("btn-buy");
const btnTxtBuy = document.getElementById("btn-buy-text");

headerBtn.addEventListener("click", () => {
  headerBtn.classList.toggle("open");
  headerList.classList.toggle("open");
});

btnBuy.addEventListener("click", () => {
  console.log(btnBuy);
  btnSpinner.classList.toggle("open");
  btnCart.classList.toggle("hide");
  btnTxtBuy.innerText = "";

  let timeOut = setTimeout(() => {
    btnSpinner.classList.toggle("open");
    btnCheckCark.classList.toggle("show");
    clearTimeout(timeOut);
    let timeOutSuccess = setTimeout(() => {
      btnCart.classList.toggle("hide");
      btnCheckCark.classList.toggle("show");
      btnTxtBuy.innerText = "Buy";
      clearTimeout(timeOutSuccess);
    }, 2500);
  }, 2500);
});
