if (window.performance.navigation.type === 1) {
    rollDice();
  }

function rollDice(){
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "&#127937 Player 1 wins" ;
}else if ((randomNumber2 > randomNumber1)){
document.querySelector("h1").innerHTML = "&#127937 Player 2 wins" ;
}else {
document.querySelector("h1").innerHTML = "&#127937 issa draw" ;
}
}