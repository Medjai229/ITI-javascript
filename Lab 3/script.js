// * Task 1

document.getElementById('keyCode').addEventListener('keydown', (event) => {
  // console.log(event.keyCode);
  // console.log(event.key);
  alert(event.key + ':' + event.keyCode);
});
document.getElementById('keyCode').addEventListener('mousedown', (event) => {
  var mouseCode = event.button;
  var mouseButtons = ['Left Click', 'Middle Click', 'Right Click'];
  var mouseButton = mouseButtons[mouseCode];
  console.log(mouseCode);
  // if (mouseCode === 0) {
  //   mouseButton = 'Left Click';
  // } else if (mouseCode === 1) {
  //   mouseButton = 'Middle Click';
  // } else if (mouseCode === 2) {
  //   mouseButton = 'Right Click';
  // }
  console.log(mouseButton);
  alert(mouseButton + ':' + mouseCode);
});

// * Task 2

var clockInterval;

document.getElementById('startClock').addEventListener(
  'click',
  () => {
    alert('Clock Started');
    var time;
    clockInterval = setInterval(() => {
      time = new Date().toLocaleTimeString('en-US');
      document.getElementById('liveClock').innerHTML = time;
    });
  },
  1000
);

document.body.addEventListener('keydown', (event) => {
  if (event.altKey && event.key === 'w') {
    alert('Clock Stopped');
    clearInterval(clockInterval);
    // document.getElementById('liveClock').innerHTML = '';
  }
});
