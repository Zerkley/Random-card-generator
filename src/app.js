/* eslint-disable */


window.onload = function() {
  //declaring the var for the timer
  let inter; 
  let seconds = 10;

 //generating a random suit
let randomGenerator = (array) =>{
    const randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
  }

  let cardGen = () => {
  //declaring arrays
  let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  let suits = ["♦","♥","♠","♣"];
  
  
  //assigning a number and suit 
  const generatedRandomNumber = randomGenerator(numbers);
  const generatedRandomSuit = randomGenerator(suits);

  //condition to make the hearts and diamonds red, and the others black
  let suitColor = "black";
  if (generatedRandomSuit === "♦" || generatedRandomSuit === "♥") {
    suitColor = "red";
  }


  document.querySelector("#topSuit").innerHTML = generatedRandomSuit;
  document.querySelector("#topSuit").style.color = suitColor; //setting the color of the suits
  document.querySelector(".midNum").innerHTML = generatedRandomNumber;
  document.querySelector("#botSuit").innerHTML = generatedRandomSuit;
  document.querySelector("#botSuit").style.color = suitColor;
  
 }
//calinng the function that generates a card to always hace one on page load
 cardGen();


 // button to start a timer and execute a function that refreshes the card
  document.querySelector("#autoGen").addEventListener("click", () => {
  inter = setInterval(() => {
    cardGen();
  }, 10000);
});
  
//button to stop the auto-generation of cards
document.querySelector("#stopButton").addEventListener("click", () => {
  clearInterval(inter);
});
};
