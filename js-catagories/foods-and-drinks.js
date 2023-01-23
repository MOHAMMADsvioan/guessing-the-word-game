// the array of words that contains jobs names in english
const arrayWords = [
  "rice",
   "chicken",
   "tea",
   "Power",
   "Water",
   "milk",
   "Milk",
   "Orange juice",
   "vodka",
   "God forbid pork",
   "habat al Baraka",
   "Lahlob Chips Bag",
   "sardine",
   "American Bitagon",
   "tameya",
   "Bean",
   "lupine",
   "Suiiii",
   "Indomie",
   "lentil",
   "fry eggs",
   "boiled eggs",
   "oil and thyme",
   "broasted",
   "shawarma",
   "zaatar",
   "parsley",
   "Molokhia",
   "falafel",
   "Nescafe",
   "coffee",
   "Pizza",
   "croissant",
   "cheese",
   "burger",
   "avocado",
   "Red Bull",
   "Meat"
];

// the of words that contains jobs names in arabic, in case i
// wanted to create translation for the names of the countries
const arrayWordsArb = [
  "رز",
  "دجاج",
  "شاي",
  "سلطة",
  "ماء",
  "حليب",
  "لبن",
  "عصير برتقال",
  "فودكا",
  "لحم خنزير العياذ بالله",
  "حبة البركة",
  "كيس شبس لهلوب",
  "سردين",
  "البيتاقون الامريكي",
  "طعمية",
  "فول",
  "ترمس",
  "سييييييي",
  "اندومي",
  "عدس",
  // "بيض قلي ",
  "بيض سلق",
  "زيت و زعتر",
  "بروستد",
  "شاورما",
  "زعتر",
  "بقدونس",
  "ملوخية",
  "فلافل",
  "نسكافيه",
  "قهوة",
  "بيتزا",
  "كروسون",
  "جبنة",
  "برقر",
  "افوكادو",
  "ريد بول",
  "لحم"
];

// finding the true and wrong buttons in the html
// and putting them into variables
const wrong = document.querySelector(".wrong");

// i named it not wrong because it is not allowed to name a variable with
//names like true or false because they are considerded as booleans
const notWrong = document.querySelector(".true");

// setting a variable for the initial value of each button
let countTrue = 0;

let countWrong = 0;

// finding the h2 text that says click me and setting it into a variable
// in order to use it to change it into the names of the jobs in the next step
var word = document.querySelector("h2");

// this is the addEventListener method that listens for a click and each
// time a click happens to the h2 we want to run the following function
// and the function is changing the inner html of this h2 into a random
// element from the arrayWordsArb, and the random number is created using
// the math random and math floor methods
// note: for some reason if i remove the randomNumber variable and put it
// outside of the function it will run just one time and you have to  refresh
//the website in order to use it again, so i will keep it inside each function
word.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 32);

  word.innerHTML = arrayWordsArb[randomNumber];

  // playing cristiano ronaldo famous sound "suiiii" when ever
  // ever the user clicks on the word
  var audioOne = new Audio("../sounds/suii.mp3");
  audioOne.play();
});

// almost the same as the previous one but this time the function runs
// when the user clicks on the true or wrong buttons
// and if wrong button is clicked, a variable named count countWrong increases by 1
// and if true button is clicked, a variable named count counttrue increases by 1
wrong.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 29);

  // creating a variable to count how many times the wrong button has been clicked
  countWrong += 1;

  word.innerHTML = arrayWordsArb[randomNumber];

  // playing GTA V dying sound when ever
  // ever the user clicks on the  wrong button
  var audioTwo = new Audio("../sounds/GTA V dying.mp3");
  audioTwo.play();
});

// the function for the true button
notWrong.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 29);

  // creating a variable to count how many times the true button has been clicked
  countTrue += 1;

  word.innerHTML = arrayWordsArb[randomNumber];

  // playing GTA SA dying sound when ever
  // ever the user clicks on the true button
  var audioThree = new Audio("../sounds/GTA SA respect.mp3");
  audioThree.play();
});

// asking the user for the time for of the round
let startingtime = prompt("أدخل وقت هذه الجولة ، بالثواني");

setInterval(updateCountDown, 1000);
// finding some elements from html that i will need in the
// next steps and putting them inside variables
let time = document.querySelector(".time");
const playAgainBtn = document.getElementById("play-again");

const wrongAnswer = document.querySelectorAll("h3")[0];
const trueAnswer = document.querySelectorAll("h3")[1];
const results = document.getElementById("results");

const back = document.getElementById("back-to-landing-page");

// a function that create the count down in the timer " by seconds" and
// what happens when it reaches 0 using if statement which i will explain
function updateCountDown() {
  time.innerHTML = startingtime;

  // making the time that the user inputs decrease by one each 1000 ms
  startingtime -= 1;

  // an if statement that remove every thing in the page when the timer reaches 0
  // and how many times the user clicked the wrong button and how many times they clickd
  // the true button, and adding two button the first is to play again and the second
  // is for going back to the sec page (sec.html)
  if (startingtime == -1) {
    playAgainBtn.classList.remove("hidden");

    playAgainBtn.classList.add("play-again");

    results.classList.remove("hidden");

    results.classList.add("results");

    back.classList.add("back-to-landing-page");

    trueAnswer.innerHTML =
      " عدد الأجابات الصحيحة يساوي " + " " + countTrue + " اجابات";
    wrongAnswer.innerHTML =
      " عدد الأجابات الخاطئة يساوي " + " " + countWrong + "  اجابات";

    wrong.classList.add("hidden");

    notWrong.classList.add("hidden");

    word.classList.add("hidden");

    time.classList.add("hidden");
  }

  // there is no else statement
  else {
  }
}
