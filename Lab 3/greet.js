// * Task 4

var userName = location.search.split('&')[0].split('=')[1];
if (userName === undefined) userName = 'User';
var greetUserP = document.getElementById('greet');
greetUserP.innerHTML = 'Welcome ' + userName;
greetUserP.style.fontSize = '50px';
greetUserP.style.fontWeight = 'bold';

// * Task 5

var newAd;
function openAd() {
  setTimeout(() => {
    newAd = open('ad.html', '', 'width=400,height=400,screenX=200,screenY=200');
  }, 3000);
}

console.log(newAd);

document.getElementById('openAd').addEventListener('click', openAd);

function closeAd() {
  newAd.close();
}

document.getElementById('closeAd').addEventListener('click', closeAd);
