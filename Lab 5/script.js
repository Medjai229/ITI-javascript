// * Task 5

var fname = document.querySelector('#fname');
var lname = document.querySelector('#lname');
var avatar = document.querySelector('#avatar');
var input = document.querySelector('#userID');
var button = document.querySelector('#submitID');
var dropdownList = document.querySelector('#users');
var xhttp = new XMLHttpRequest();
var user;
var users;
var userID;

// xhttp.open('GET', 'https://reqres.in/api/users/1 ');
// xhttp.send();

// xhttp.addEventListener('readystatechange', () => {
//   if (xhttp.readyState === 4 && xhttp.status === 200) {
//     // * Retrieve user 1 data
//     user = JSON.parse(xhttp.response).data;
//     // console.log(user1);

//     fname.innerHTML = user.first_name;
//     lname.innerHTML = user.last_name;
//     avatar.setAttribute('src', user.avatar);
//   }
// });

// * Task 5 a

// button.addEventListener('click', () => {
//   userID = input.value;
//   var url = 'https://reqres.in/api/users/';

//   xhttp.open('GET', url + userID);
//   xhttp.send();

//   xhttp.addEventListener('readystatechange', () => {
//     if (xhttp.readyState === 4 && xhttp.status === 200) {
//       // * Retrieve user ID data
//       user = JSON.parse(xhttp.response).data;
//       // console.log(user);

//       fname.innerHTML = user.first_name;
//       lname.innerHTML = user.last_name;
//       avatar.setAttribute('src', user.avatar);
//     }
//   });
// });

// * Task 5 b

xhttp.onreadystatechange = function () {
  if (xhttp.readyState === 4 && xhttp.status === 200) {
    let data = JSON.parse(xhttp.responseText);
    console.log(data);
  }
};

xhttp.open('GET', 'https://reqres.in/api/users/', true);
// TODO:No pagination
xhttp.send();
// .addEventListener('readystatechange', () => {
//   if (xhttp.readyState === 4 && xhttp.status === 200) {
//     // * Retrieve users data
//     user = JSON.parse(xhttp.response).data;
//   }
// });
// var url = 'https://reqres.in/api/users/';
// var IDs = [];

// for (var i = 1; i <= 12; i++) {
//   IDs.push(i);
//   console.log(i);
//   console.log(IDs);

//   dropdownList.appendChild(document.createElement('option'));
//   dropdownList.lastChild.setAttribute('id', i);

//   dropdownList.lastChild.innerHTML = i;
//   xhttp.open('GET', url + i);
//   xhttp.send();
// }

// * Task 5 c
