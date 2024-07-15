const randomHex = () => {
  const randomNumber = Math.random() * 0xffffff;
  const randomHexadecimal =
    "#" + ("000000" + Math.floor(randomNumber).toString(16)).slice(-6);
  return randomHexadecimal;
};

const randomHexValue = randomHex();
console.log(randomHexValue);

const header = document.getElementById("header");
const inputField = document.getElementById("inputField");
const deleteButton = document.getElementById("deleteButton");

function updateHeader() {
  header.textContent = inputField.value;
}

function disableInput() {
  if (inputField.value.length >= 50) {
    inputField.disabled = true;
  }
}

inputField.addEventListener("input", function () {
  updateHeader();
  disableInput();
});

deleteButton.addEventListener("click", function () {
  header.remove();
  inputField.value = "";
});
