// * Task 1
window.alert('Welcome to my site');

var userName = window.prompt("What's your name?");

if (userName === '') {
  var userName = 'User';
}
document.getElementById('greet').innerHTML = 'Welcome ' + userName;

// * Task 2
// debugger;
function sum(x, y) {
  return Number(x) + Number(y);
}

document.getElementById('sum').addEventListener('click', consoleSum);

function consoleSum() {
  var x = window.prompt('Enter First Number');
  var y = window.prompt('Enter Second Number');
  console.log(sum(x, y));
}

// ! Task 2 Using Arrow function
// document.getElementById('sum').addEventListener('click', () => {
//   var x = window.prompt('Enter First Number');
//   var y = window.prompt('Enter Second Number');
//   console.log(sum(x, y));
// });

// * Task 3

function todayWeather(temp) {
  var weather = window.prompt("What's the current temp?");
  return weather >= 30 ? 'HOT' : 'COLD';
}

console.log(todayWeather(27));

// * Task 4

console.log(todayWeather(27, 27));

function todayWeather(temp, feel) {
  if (25 <= temp <= 30 && 25 <= feel <= 30) {
    return 'NORMAL';
  } else if (temp < 25 && feel < 25) {
    return 'COLD';
  } else if (temp > 30 && feel > 30) {
    return 'HOT';
  } else {
    return "Ambigous, can't detect";
  }
}

// ! No, because ternary conditional operator acts like an if else statment but with true or false to the condition so 2 contions only while the last example have 4 contions
// ! No, because switch case compare condtions with equality not with greater than or less than

// * Task 5
function track(studentFaculty) {
  switch (studentFaculty) {
    case 'FCI':
      return "You're eligible to Programming tracks";
      break;
    case 'Engineering':
      return "You're eligible to Network and Embedded tracks";
      break;
    case 'Commerce':
      return "You're eligible to ERP and Social Media tracks";
      break;
    default:
      return "You're eligible to SW fundamentals track";
      break;
  }
}

console.log(track('FCI'));
console.log(track('Engineering'));
console.log(track('Commerce'));
console.log(track('Physics'));

// * Task 6
function oddNumbers(start, end) {
  if (start % 2 === 0) {
    start++;
  }
  for (var i = start; i <= end; i += 2) {
    console.log(i);
  }
}

oddNumbers(10, 56);

// * Task 7

document.getElementById('mathex').addEventListener('click', () => {
  var mathex = window.prompt('Enter the math expression');
  console.log(eval(mathex));
});
