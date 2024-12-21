var loginBtn = document.querySelector('button');
var userName = document.querySelector('#user_name');
var userPassword = document.querySelector('#user_password');
var rememberBtn = document.querySelector('#remember');

// * Task 1

// if (localStorage.username !== null || localStorage.username !== undefined) {
//   userName.value = localStorage.getItem('username');
// }
// if (localStorage.password !== null || localStorage.password !== undefined) {
//   userPassword.value = localStorage.getItem('password');
// }

// loginBtn.addEventListener('click', () => {
//   localStorage.setItem('username', userName.value);
//   localStorage.setItem('password', userPassword.value);
// });

// * Task 1 a

// if (sessionStorage.username !== null || sessionStorage.username !== undefined) {
//   userName.value = sessionStorage.getItem('username');
// }
// if (sessionStorage.password !== null || sessionStorage.password !== undefined) {
//   userPassword.value = sessionStorage.getItem('password');
// }

// loginBtn.addEventListener('click', () => {
//   sessionStorage.setItem('username', userName.value);
//   sessionStorage.setItem('password', userPassword.value);
// });

// ! Yes you can use session storage as long as you're in the same page session

// * Task 1 b

// ! localStorage doesn't expire while sessionStorage expires as soon as the page session ends

// * Task 1 c

// ! Yes you can access both localStorage and sessionStorage in another page ( in the same page)

// * Task 2

if (localStorage.username !== null || localStorage.username !== undefined) {
  userName.value = localStorage.getItem('username');
}
if (localStorage.password !== null || localStorage.password !== undefined) {
  userPassword.value = localStorage.getItem('password');
}

loginBtn.addEventListener('click', () => {
  if (rememberBtn.checked) {
    localStorage.setItem('username', userName.value);
    localStorage.setItem('password', userPassword.value);
  } else {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
});

// * Task 3

var student1 = {
  id: 1,
  name: 'Joe',
  age: 20,
  address: 'Salah Salem',
  skills: ['research', 'teamwork', 'negotiation', 'swimming'],
  isLeader: false,
};

// * Task 4

var student2 = {
  id: 2,
  name: 'Jane',
  age: 19,
  address: '5th Settelment',
  skills: ['research', 'leadership', 'photography', 'yoga'],
  isLeader: true,
};

var student3 = {
  id: 3,
  name: 'Jayce',
  age: 21,
  address: null,
  skills: ['problem-solving', 'typing-speed', 'sportsmanship', 'chess'],
  isLeader: false,
};

var arrStudent = [student1, student2, student3];
console.log(arrStudent);

// ! Yes, JSON can hold null and boolean values
// ! XML is based on SGML while JSON is based on JavaScript
// ! XML doesn't support array while JSON does
