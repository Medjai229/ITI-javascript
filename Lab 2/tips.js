// * Task 1

var tips = [
  'Use `let` and `const` instead of `var` to avoid hoisting issues.',
  'Master arrow functions for concise syntax and better `this` handling.',
  'Understand closures to leverage scope and create private variables.',
  'Use template literals (`backticks`) for easier string interpolation.',
  'Avoid mutating objects and arrays; use the spread operator (`...`) for immutability.',
  'Set default parameters in functions to prevent `undefined` errors.',
  'Leverage `async` and `await` to simplify asynchronous code.',
  'Learn the behavior of `this` in different contexts to avoid confusion.',
  'Use strict equality (`===`) to avoid type coercion bugs.',
  'Utilize browser developer tools for debugging and performance optimization.',
];

var random = Math.floor(Math.random() * 10); //!Bonus Diff between floor, round, ceil, parseInt
document.getElementById('tip').innerHTML = tips[random];

// * Task 2

document.getElementById('btntime').addEventListener('click', getTime);

function getTime() {
  var date = new Date();
  document.getElementById('showtime').innerHTML = date.toLocaleString();
}

// * Task 3

var isEmailValid = false;

while (!isEmailValid) {
  var userEmail = window.prompt('Enter your email...');
  if (validateEmail(userEmail)) {
    isEmailValid = true;
  }
}

function validateEmail(email) {
  if (email.includes('@') && !email.startsWith('@') && !email.endsWith('@')) {
    //!Bonus Search for string methods
    return true;
  }
  return false;
}

// * Task 4

var nameRegex = /^([a-zA-Z]{3,}[\u0020])+[a-zA-Z]{3,}$/;
var emailRegex = /^[^@].+[@].+[.eg]$/;

var isNameValid = false;

while (!isNameValid) {
  var userName = window.prompt('Enter your full name...');
  if (nameRegex.test(userName)) {
    isNameValid = true;
  }
}

var isEmailValid = false;

while (!isEmailValid) {
  var userEmail = window.prompt('Enter your email...');
  if (emailRegex.test(userEmail)) {
    isEmailValid = true;
  }
}

// * Task 6

var studentGrades = [60, 100, 10, 15, 85];
studentGrades.sort(function (a, b) {
  return b - a;
});
console.log(studentGrades);

var highestStudent = studentGrades.find((grade) => grade <= 100);
console.log(highestStudent);

var below60Students = studentGrades.filter((grade) => grade < 60);
console.log(below60Students);

// * Task 7

var studentArrayGrades = [
  { name: 'John', grade: 60 },
  { name: 'Jane', grade: 100 },
  { name: 'Joe', grade: 10 },
  { name: 'Jill', grade: 15 },
  { name: 'Jack', grade: 85 },
  { name: 'Sarah', grade: 90 },
  { name: 'Tom', grade: 70 },
  { name: 'Lisa', grade: 50 },
  { name: 'Mike', grade: 95 },
  { name: 'Emily', grade: 40 },
];

var student90_100Degree = studentArrayGrades.find(
  (student) => 90 < student.grade && student.grade < 100
).name;
console.log(student90_100Degree);

var studentLessThan60Degree = studentArrayGrades.filter(
  (student) => student.grade < 60
);

for (var i = 0; i < studentLessThan60Degree.length; i++) {
  console.log(studentLessThan60Degree[i].name);
}

studentArrayGrades.push({ name: 'Ahmed', grade: 65 });
for (const studentIndex in studentArrayGrades) {
  console.log(studentArrayGrades[studentIndex]); //Index
}

console.log('...');

studentArrayGrades.pop();
for (const element of studentArrayGrades) {
  console.log(element); // Object
}

console.log('...');

studentArrayGrades.sort((a, b) => a.name.localeCompare(b.name));
console.log(studentArrayGrades);

// * Bonus

studentArrayGrades.splice(
  2,
  0,
  { name: 'Jayce', grade: 20 },
  { name: 'Violet', grade: 30 }
);
console.log(studentArrayGrades);

studentArrayGrades.splice(3, 1);
console.log(studentArrayGrades);

// * Task 8

try {
  document.getElementById('btndate').addEventListener('click', showDate);
} catch (error) {
  alert('Error: Check console');
  console.log(error);
}

function showDate() {
  var userDate = window.prompt('Enter date...');
  var day = Number(userDate.slice(0, 2));
  var month = Number(userDate.slice(3, 5));
  var year = Number(userDate.slice(6));
  if (validateDate(userDate)) {
    var date = new Date(year, month - 1, day);
    console.log(date);
    document.getElementById('showdate').innerHTML = date.toLocaleDateString();
  } else {
    alert('Wrong Date Format');
  }
}

function validateDate(date) {
  if (
    date.length !== 10 ||
    date.at(2) !== '-' ||
    date.at(5) !== '-' ||
    isNaN(Number(date.slice(0, 2))) ||
    isNaN(Number(date.slice(3, 5))) ||
    isNaN(Number(date.slice(6))) ||
    Number(date.slice(0, 2)) > 31 ||
    Number(date.slice(3, 5)) > 12
  ) {
    return false;
  }
  return true;
}

// * Bouns Task 1

document.getElementById('btnday').addEventListener('click', getDayOfDate);

function getDayOfDate() {
  var userDateDay = window.prompt('Enter the date to know the day...');
  if (validateDate(userDateDay)) {
    var day = Number(userDateDay.slice(0, 2));
    var month = Number(userDateDay.slice(3, 5));
    var year = Number(userDateDay.slice(6));
    var dateDay = new Date(year, month - 1, day).toLocaleString('locale', {
      weekday: 'long',
    });
    // ! Get the index of the day with getDay() and create an array of days to get the name of the day from the index.
    document.getElementById('showday').innerHTML = dateDay;
  } else {
    alert('Wrong Date Format');
  }
}
