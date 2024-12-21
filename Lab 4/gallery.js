// * Task 5

var playButton = document.querySelector('#play');
var stopButton = document.querySelector('#stop');
var nextButton = document.querySelector('#next');
var prevButton = document.querySelector('#prev');
var image = document.querySelector('img');
var counter = 0;
var imgArr = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
];
var imgSrc;
var imgInterval;

playButton.addEventListener('click', () => {
  imgInterval = setInterval(() => {
    counter++;
    if (counter === imgArr.length) counter = 0;
    imgSrc = './images/' + imgArr[counter];
    image.setAttribute('src', imgSrc);
  }, 500);
});

image.addEventListener('mouseenter', () => {
  imgInterval = setInterval(() => {
    counter++;
    if (counter === imgArr.length) counter = 0;
    imgSrc = './images/' + imgArr[counter];
    image.setAttribute('src', imgSrc);
  }, 500);
});

stopButton.addEventListener('click', () => {
  clearInterval(imgInterval);
});

image.addEventListener('mouseout', () => {
  clearInterval(imgInterval);
});

nextButton.addEventListener('click', () => {
  counter++;
  if (counter === imgArr.length) counter = 0;
  imgSrc = './images/' + imgArr[counter];
  image.setAttribute('src', imgSrc);
});

prevButton.addEventListener('click', () => {
  counter--;
  if (counter < 0) counter = 7;
  imgSrc = './images/' + imgArr[counter];
  image.setAttribute('src', imgSrc);
});
