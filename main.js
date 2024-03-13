const buttonelement = document.getElementById("agebutton");
const birthdayelement = document.getElementById("birthday");
const resultelement = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayelement.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue, 2022);
    resultelement.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue, referenceYear) {
  const currentDate = new Date(referenceYear, 0);
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

buttonelement.addEventListener("click", calculateAge);
