const buttons = document.querySelectorAll('.input-btn');
const billInput = document.querySelector('#bill-js');
const peopleInput = document.querySelector('#people-js');
const customInput = document.querySelector('.custom');
const resetBtn = document.querySelector('.reset-btn');
const resultPeople = document.querySelector('#result-people');
const resultBill = document.querySelector('#result-bill');

let result;
let customResult;
let customValue;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    result = (billInput.value * btn.value) / peopleInput.value;
    resultPeople.textContent = `$${result.toFixed(2)}`;
  });
});

customInput.addEventListener('click', () => {
  customValue = customInput.value / 100 + 1;
  customResult = (billInput.value * customValue) / peopleInput.value;
  resultPeople.textContent = `$${customResult.toFixed(2)}`;
});

resetBtn.addEventListener('click', () => {
  resultPeople.textContent = '$0.00';
});
