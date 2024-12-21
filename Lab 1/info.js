// * Task 8

var isNameCorrect = false;

while (!isNameCorrect) {
  var userName = window.prompt('Enter your name');
  var hasNumber = /\d/.test(userName);
  if (!hasNumber && userName.trim() !== '') {
    isNameCorrect = true;
    document.getElementById('name').innerHTML = 'Name: ' + userName;
  }
}

var isYearCorrect = false;

while (!isYearCorrect) {
  var birthYear = window.prompt('Enter your birth year');
  var numYear = Number(birthYear);
  if (!isNaN(numYear) && numYear < 2010) {
    isYearCorrect = true;
    document.getElementById('birthyear').innerHTML = 'Birth year: ' + numYear;
    var currentYear = new Date().getFullYear();
    var userAge = currentYear - numYear;
    document.getElementById('age').innerHTML = 'Age: ' + userAge;
  }
}
