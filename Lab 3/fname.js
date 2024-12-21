var fnameInput = document.getElementById('fname');

fnameInput.addEventListener('keydown', (event) => {
  if (
    (event.keyCode >= 65 && event.keyCode <= 90) ||
    event.keyCode === 32 ||
    event.keyCode === 8
  ) {
  } else {
    event.preventDefault();
  }
});
