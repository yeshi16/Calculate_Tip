const button = document.querySelector("button");
const output = document.querySelector(".output");
const bill = document.querySelector("#bill");


function calculateTip(){
  const tip = bill.value * 0.20;
  let display = `Your 20% tip of $${bill.value} is $${tip}`;
  output.innerHTML = display;
}

button.addEventListener("click", calculateTip);