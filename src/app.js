const counter = document.querySelector("#counter");
const notcoinImage = document.querySelector("#notcoin-image");

let number = 0;

const updateCounter = () => {
  const getCount = localStorage.getItem("count");
  number = +getCount;

  counter.textContent = number;
};

const counterHandler = () => {
  number = number + 5;

  addToLocalStorage(number);
  updateCounter();
};

const addToLocalStorage = (number) => {
  localStorage.setItem("count", number);
};

window.addEventListener("DOMContentLoaded", updateCounter);
notcoinImage.addEventListener("click", counterHandler);
