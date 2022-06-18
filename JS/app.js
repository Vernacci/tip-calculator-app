const buttons = document.querySelectorAll('.input-btn');
const billInput = document.querySelector('#bill-js');
const peopleInput = document.querySelector('#people-js');
const customInput = document.querySelector('.custom');
const resetBtn = document.querySelector('.reset-btn');
const resultPeople = document.querySelector('#result-people');
const resultBill = document.querySelector('#result-bill');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const result = (billInput.value * btn.value) / peopleInput.value;
    resultPeople.textContent = `$${result.toFixed(2)}`;
  });
});

customInput.addEventListener('click', () => {
  let customValue = customInput.value / 100 + 1;
  const customResult = (billInput.value * customValue) / peopleInput.value;
  resultPeople.textContent = `$${customResult.toFixed(2)}`;
});
