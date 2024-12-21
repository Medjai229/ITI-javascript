var imgContainer = document.getElementById('img-container');

var imageNode = document.createElement('img');
var imageNode2 = document.createElement('img');

imageNode.setAttribute('src', './images/1.jpg');
imageNode2.setAttribute('src', './images/2.jpg');

imgContainer.appendChild(imageNode);
// imgContainer.appendChild(imageNode2);
imgContainer.insertBefore(imageNode2, imageNode);

// ! appendChild adds the node to be the last child
// ! insertBefore adds the node to be before another node

// window.alert(imgContainer.childNodes.length);

imgContainer.removeChild(imageNode2);
