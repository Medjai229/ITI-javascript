// // * Task 3

// let counter = [0, 0, 0];

// // ! (getELements) returns HTML Collection
// // ! (querySelector) returns array

// // ! Test for in with html collection

// let images = document.getElementsByClassName('image');
// // console.log(images);

// let count = document.getElementsByClassName('counter');

// for (let i = 0; i < images.length; i++) {
//   images[i].addEventListener('click', conutClick);
// }

// function conutClick(event) {
//   let index = event.target.id.at(-1);
//   counter[index - 1]++;
//   count[index - 1].textContent = `Counter ${index}: ${counter[index - 1]}`;
// }

// setTimeout(() => {
//   for (let i = 0; i < images.length; i++) {
//     images[i].removeEventListener('click', conutClick);
//     images[i].addEventListener('click', () => {
//       alert(`Game Over\nCounter ${i + 1} Score is ${counter[i]}`);
//     });
//   }
// }, 3000);

// let clickCounters = {
//   img1: 0,
//   img2: 0,
//   img3: 0,
// };

// function countClick(event) {
//   let imgID = event.target.id;
//   clickCounters[imgID]++;
// }

let clickCounters = {
  image1: 0,
  image2: 0,
  image3: 0
};

function handleImageClick(event) {
  const imageId = event.target.id;
  clickCounters[imageId]++;
}

function handleGameOver() {
  const totalClicks = Object.values(clickCounters).reduce((acc, count) => acc + count, 0);
  alert(Game Over! Total Clicks: ${totalClicks});
}

document.getElementById('image1').addEventListener('click', handleImageClick);
document.getElementById('image2').addEventListener('click', handleImageClick);
document.getElementById('image3').addEventListener('click', handleImageClick);

setTimeout(function () {
  document.getElementById('image1').removeEventListener('click', handleImageClick);
  document.getElementById('image2').removeEventListener('click', handleImageClick);
  document.getElementById('image3').removeEventListener('click', handleImageClick);

  document.getElementById('image1').addEventListener('click', handleGameOver);
  document.getElementById('image2').addEventListener('click', handleGameOver);
  document.getElementById('image3').addEventListener('click', handleGameOver);
}, 3000);