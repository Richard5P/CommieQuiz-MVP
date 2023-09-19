//Variables - initialise targeted elements
const btnStart = document.getElementById("btn-start");
const quizQuestion = document.getElementById("question");
const quizAnswer1 = document.getElementById("btn-answer1");
const quizAnswer2 = document.getElementById("btn-answer2");
const quizAnswer3 = document.getElementById("btn-answer3");
const quizAnswer4 = document.getElementById("btn-answer4");
const btnNext = document.getElementById("btn-next");
const quizAnswers = document.getElementsByClassName("game-answer");
const gameTime = document.getElementById("game-time");
const correctScore = document.getElementById("score-correct");
const incorrectScore = document.getElementById("score-incorrect");

// Add modals here
// const modalGameEnd = document.getElementById("game-end");

//Global Variables
let qIndex; // Question index
let qUsedIndices = []; // Array of questions used
let quizCorrectAnswer;
let correctAnswerScore;
let incorrectAnswerScore;
let displayQuestion;
let displayIndex;
let CorrectAnswerText;
let randomAnswerKeys = [];
let answerClicked = false;
const quizAnswerKeys = ['a','b','c','d'];

// Arrow functions
//Check answer selection 
const initialiseGame = () => {
    qIndex = 0; // Question index
    qUsedIndices = []; // Array of questions used
    quizCorrectAnswer = "";
    correctAnswerScore = 0;
    incorrectAnswerScore = 0;
    displayQuestion = '';
    displayIndex = 0;
    CorrectAnswerText = '';
    randomAnswerKeys = [];
    answerClicked = false;  
    correctScore.innerText = 0;
    incorrectScore.innerText = 0;
   } 

const checkAnswer = el => {
    if (answerClicked == false){
      answerClicked = true;
      removeAnswerListeners();
      console.log("correct answer: " + CorrectAnswerText);
      console.log("el.innerText: " + el.innerText);
      if (CorrectAnswerText === el.innerText) {
        el.style.backgroundColor = "green";  
        ++correctAnswerScore; 
        correctScore.style.color = "green";
        correctScore.innerText = correctAnswerScore;
      } else {
        el.style.backgroundColor = "red";
        ++incorrectAnswerScore;
        incorrectScore.style.color = "red";
        incorrectScore.innerText = incorrectAnswerScore;
      }
    }
    // Need exit criteria here - time or key
}

// Randomise question order and return unique value (not previously used)
const getUniqueRandomInt = (min, max) => {
    do {
      iQr = getRandomInt (min, max);
    }
    while (qUsedIndices.includes(iQr));
    qUsedIndices.push(iQr);
    return iQr;
  }
  
  // Random Int Utility
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Randomise order of answer keys
  const shuffleAnswerKeys = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  // switchable Event Listener functions
  const addAnswerListeners = () => {
      quizAnswer1.addEventListener("click", function () {checkAnswer(this)});
      quizAnswer2.addEventListener("click", function () {checkAnswer(this)});
      quizAnswer3.addEventListener("click", function () {checkAnswer(this)});
      quizAnswer4.addEventListener("click", function () {checkAnswer(this)});
  }
  
  const removeAnswerListeners = () => {
        quizAnswer1.removeEventListener("click", function () 
  {checkAnswer(this)});
      quizAnswer2.removeEventListener("click", function ()     {checkAnswer(this)});
      quizAnswer3.removeEventListener("click", function () {checkAnswer(this)});
      quizAnswer4.removeEventListener("click", function () {checkAnswer(this)});
  }
  
  // Add event listeners
  btnStart.addEventListener("click", function () {
      startQuiz()});
  btnNext.addEventListener ("click", function () {
  nextQuestion()});
  

//   btnGameExit.addEventListener ("click", function() {
//     modalGameEnd.close();
//     pnlShowHide(startPanel);
//   });
  
//   btnGameRestart.addEventListener ("click", function() {
//     modalGameEnd.close();
//     startQuiz();
//   });
  
  // Game management functions
  
  // Start (restart) Quiz
  function startQuiz(){
    initialiseGame();
    nextQuestion(); 
  }
  
  function nextQuestion() {
    answerClicked = false;
    if (qIndex < quizQuestions.length) {
      let iQu = getUniqueRandomInt(0, quizQuestions.length - 1);
      displayQandA(iQu);
      qIndex += 1;
      }
    }

  
  function displayQandA(iQd) {
    // here goes the if statement to make the start quiz button dissapear
    if (btnStart.style.display !== "none"){
      btnStart.style.display = "none";
    }
    // Display question
    displayIndex = qIndex +1;
    displayQuestion = displayIndex + '. ' + quizQuestions[iQd].question;
    quizQuestion.innerText = displayQuestion;
  
  // Configure and display answers
    // turn on the Answer Event Listeners
      addAnswerListeners();
    // reset the answer button color 
    for (let i=0; i < quizAnswers.length; i++ ){
         quizAnswers[i].style.backgroundColor = ''; 
    }
  
    // Randomise question order 
    randomAnswerKeys = shuffleAnswerKeys(quizAnswerKeys);
    quizAnswer1.innerText = quizQuestions[iQd][randomAnswerKeys[0]];
    quizAnswer2.innerText = quizQuestions[iQd][randomAnswerKeys[1]];
    quizAnswer3.innerText = quizQuestions[iQd][randomAnswerKeys[2]];
    quizAnswer4.innerText = quizQuestions[iQd][randomAnswerKeys[3]];  
  
    quizCorrectAnswer = quizQuestions[iQd].answer;
    CorrectAnswerText = quizQuestions[iQd][quizCorrectAnswer];
    console.log('Correct # ' + quizCorrectAnswer +'    '+ CorrectAnswerText);
  }
  