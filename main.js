const buttonelement = document.getElementById("agebutton");
const birthdayelement = document.getElementById("birthday");
const resultelement = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayelement.value;
  if (birthdayValue === "") {
    resultelement.innerHTML = `Please enter your birthday`;
  } else {
    const birthdayDate = new Date(birthdayValue);
    const currentDate = new Date();

    if (birthdayDate > currentDate) {
      resultelement.innerHTML = `Please enter a valid birthday`
      return;
    }

    const age = getAge(birthdayDate);
    resultelement.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayDate) {
  const currentDate = new Date();
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
