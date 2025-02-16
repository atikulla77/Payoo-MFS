// Common Shared Functions here
function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputVNumber = parseFloat(inputValue);
  return inputVNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textVNumber = parseFloat(textValue);
  return textVNumber;
}

function showSectionById(id) {
  // hide all the section
  document.getElementById("add-money-From").classList.add("hidden");
  document.getElementById("cash-out-From").classList.add("hidden");
  document.getElementById("transaction-history").classList.add("hidden");
  // Show the section with the provide id as parameter
  document.getElementById(id).classList.remove("hidden");
}

function activeTogallButton(id) {
  // remove the active button color
  document.getElementById("add-money-Btn").classList.remove("btn-info");
  document.getElementById("cash-out-Btn").classList.remove("btn-info");
  document.getElementById("transaction-Btn").classList.remove("btn-info");
  // add none active button color
  document.getElementById("add-money-Btn").classList.add("btn-neutral");
  document.getElementById("cash-out-Btn").classList.add("btn-neutral");
  document.getElementById("transaction-Btn").classList.add("btn-neutral");
  // remove the none active color and set active color
  document.getElementById(id).classList.remove("btn-neutral");
  document.getElementById(id).classList.add("btn-info");
}
