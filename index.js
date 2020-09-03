document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
var random_images_array = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
];
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
document
    .querySelectorAll("img")[0]
    .setAttribute("src", random_images_array[randomNumber1]);

document
    .querySelectorAll("img")[1]
    .setAttribute("src", random_images_array[randomNumber2]);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins🚩 ";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
