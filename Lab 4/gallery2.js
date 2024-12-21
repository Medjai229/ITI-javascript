// * Task 6

var imgs = document.querySelectorAll('img');
var imgOpacity = 1;
var imgInterval;

imgs.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    clearInterval(imgInterval);
    imgInterval = setInterval(() => {
      if (imgOpacity > 0.3) {
        imgOpacity -= 0.05;
        img.style.opacity = imgOpacity;
        console.log(imgOpacity);
      } else clearInterval(imgInterval);
    }, 50);
  });

  img.addEventListener('mouseout', () => {
    clearInterval(imgInterval);
    imgInterval = setInterval(() => {
      if (imgOpacity <= 1) {
        imgOpacity += 0.05;
        img.style.opacity = imgOpacity;
        console.log(imgOpacity);
      } else clearInterval(imgInterval);
    }, 50);
  });
});
