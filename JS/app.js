const buttons = document.querySelectorAll('.input-btn');
const billInput = document.querySelector('#bill-js');
const peopleInput = document.querySelector('#people-js');
const customInput = document.querySelector('.custom');
const resetBtn = document.querySelector('.reset-btn');
const resultPeople = document.querySelector('#total');
const tip = document.querySelector('#tip-amount');

let total;
let customResult;
let customValue;
let tipAmount;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let value = Number(btn.value);
    tipAmount = (billInput.value * (value / 100)) / peopleInput.value;
    tip.textContent = `$${tipAmount.toFixed(2)}`;
    total = (billInput.value * (value / 100 + 1.0)) / peopleInput.value;
    resultPeople.textContent = `$${total.toFixed(2)}`;
  });
});

customInput.addEventListener('change', () => {
  customValue = customInput.value / 100 + 1;
  customResult = (billInput.value * customValue) / peopleInput.value;
  resultPeople.textContent = `$${customResult.toFixed(2)}`;
});

resetBtn.addEventListener('click', () => {
  total = 0;
  customInput.value = '';
  customResult = 0;
  tipAmount = 0;
  resultPeople.textContent = '$0.00';
  billInput.value = 0;
  tip.textContent = '$0.00';
  peopleInput.value = 1;
});
