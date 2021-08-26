const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const msg = document.querySelector("#message");
function compareValues(sum, luckyNumber) {
  console.log(sum, luckyNumber);
  if (sum % luckyNumber === 0) {
    msg.innerText = "Your Birthday is Lucky 🎂";
  } else {
    msg.innerText = "Your Birthday is not Lucky";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  console.log(sum);
  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    msg.innerText = "Please enter both the field 🙄";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}
checkButton.addEventListener("click", checkBirthDateIsLucky);
