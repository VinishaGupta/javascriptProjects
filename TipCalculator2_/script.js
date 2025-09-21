const billInput = document.getElementById('bill-input');
const tipButtons = document.querySelectorAll('.tip-percent-btn');
const customTipInput = document.getElementById('custom-tip-input');
const peopleInput = document.getElementById('people-input');
const tipAmountDisplay = document.getElementById('tip-amount-display');
const totalAmountDisplay = document.getElementById('total-amount-display');
const resetButton = document.getElementById('reset-button');

// NEW: calculate button
const calculateButton = document.getElementById('calculate-button');

tipButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    tipButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    customTipInput.value = '';
    calculateTip();
  });
});

customTipInput.addEventListener('input', () => {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  // remove auto-calc if you only want calc button:
  // calculateTip();
});

peopleInput.addEventListener('input', () => {
  // calculateTip(); // optional auto update
});
billInput.addEventListener('input', () => {
  // calculateTip(); // optional auto update
});

calculateButton.addEventListener('click', calculateTip);

resetButton.addEventListener('click', () => {
  billInput.value = '';
  customTipInput.value = '';
  peopleInput.value = '1';
  tipButtons.forEach(btn => btn.classList.remove('active'));
  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
});

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const numPeople = parseInt(peopleInput.value);
  let tipPercentage = 0;

  tipButtons.forEach(button => {
    if (button.classList.contains('active')) {
      tipPercentage = parseFloat(button.value);
    }
  });

  if (customTipInput.value) {
    tipPercentage = parseFloat(customTipInput.value);
  }

  if (isNaN(bill) || bill <= 0 || isNaN(numPeople) || numPeople <= 0) {
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
    return;
  }

  const tipAmount = (bill * tipPercentage) / 100;
  const totalAmount = bill + tipAmount;
  const tipPerPerson = tipAmount / numPeople;
  const totalPerPerson = totalAmount / numPeople;

  tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
}
