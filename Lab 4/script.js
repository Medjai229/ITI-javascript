var fullname = document.querySelectorAll('.fullname');
// console.log(fullname);

var namesInvalid = document.querySelectorAll('.nameinvalid');
// console.log(nameInvalid);

var passwords = document.querySelectorAll('.password');
// console.log(passwords);

var pswdinvalid = document.querySelector('#pswdinvalid');
// console.log(pswdinvalid);

var allInput = document.querySelectorAll('input');
// console.log(allInput);

var form = document.querySelector('form');
// console.log(form);

var formInvalid = document.querySelector('#forminvalid');
// console.log(formInvalid);

var validImgs = document.querySelectorAll('.validImg');

// * Task 1 c

// fullname.forEach((element) => {
//   element.addEventListener('focus', () => {
//     element.style.border = 'solid 1px blue';
//   });
// });

// fullname.forEach((element) => {
//   element.addEventListener('blur', () => {
//     element.style.border = '';
//   });
// });

// * Task 1 d

// fullname[0].addEventListener('blur', () => {
//   nameInvalid[0].innerHTML = '';
//   if (fullname[0].value === '' || fullname[0].value.length < 3) {
//     nameInvalid[0].innerHTML = 'Invalid Name';
//   }
// });

// fullname[1].addEventListener('blur', () => {
//   nameInvalid[1].innerHTML = '';
//   if (fullname[1].value === '' || fullname[1].value.length < 3) {
//     nameInvalid[1].innerHTML = 'Invalid Name';
//   }
// });

// fullname.forEach((element) => {
//   element.addEventListener('blur', () => {
//     if (element.value === '' || element.value.length < 3) {

//   });
// });

// * Task 1 e

// passwords[1].addEventListener('blur', () => {
//   pswdinvalid.innerHTML = '';
//   if (
//     passwords[0].value === '' ||
//     passwords[1].value === '' ||
//     passwords[0].value !== passwords[1].value
//   ) {
//     pswdinvalid.innerHTML = 'Password and Repeat Password should be the same';
//   }
// });

// * Task 1 f

// allInput.forEach((element) => {
//   element.addEventListener('blur', () => {
//     element.style.backgroundColor = 'white';
//     if (element.value === '') {
//       element.style.backgroundColor = 'gray';
//     }
//   });
// });

// * Task 1 g

// ! Yes it will prevent it from submitting
// ! Because the custom validation will not change the default of the submit button

// * Task 2

// form.addEventListener('submit', (event) => {
//   if (
//     fullname[0].value.trim() === '' ||
//     fullname[0].value.trim().length < 3 ||
//     fullname[1].value.trim() === '' ||
//     fullname[1].value.trim().length < 3 ||
//     passwords[0].value.trim() === '' ||
//     passwords[1].value.trim() === '' ||
//     passwords[0].value.trim() !== passwords[1].value
//   ) {
//     event.preventDefault();
//     formInvalid.innerHTML = 'Please correct the validation errors first';
//   } else {
//     form.submit();
//   }
// });

// * Task 4

fullname[0].addEventListener('input', () => {
  if (fullname[0].checkValidity()) {
    validImgs[0].setAttribute('src', './images/valid.png');
  } else {
    validImgs[0].setAttribute('src', './images/notvalid.png');
  }
});

fullname[1].addEventListener('input', () => {
  if (fullname[1].checkValidity()) {
    validImgs[1].setAttribute('src', './images/valid.png');
  } else {
    validImgs[1].setAttribute('src', './images/notvalid.png');
  }
});

passwords[1].addEventListener('input', () => {
  if (
    passwords[0].checkValidity() &&
    passwords[1].checkValidity() &&
    passwords[0].value === passwords[1].value
  ) {
    validImgs[2].setAttribute('src', './images/valid.png');
  } else {
    validImgs[2].setAttribute('src', './images/notvalid.png');
  }
});
