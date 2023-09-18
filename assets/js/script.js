//Variables - initialise targeted elements
const btnStart = document.getElementById("btn-start");
const quizQuestion = document.getElementById("game-question");
const quizAnswer1 = document.getElementById("btn-answer-1");
const quizAnswer2 = document.getElementById("btn-answer-2");
const quizAnswer3 = document.getElementById("btn-answer-3");
const quizAnswer4 = document.getElementById("btn-answer-4");
const btnNext = document.getElementById("btn-next");
const quizAnswers = document.getElementsByClassName("game-answer");
const correctCount = document.getElementById("ctr-correct");
const incorrectCount = document.getElementById("ctr-incorrect");
const gameTime = document.getElementById("game-time");
const correctScore = document.getElementById("score-correct");
const incorrectScore = document.getElementById("score-incorrect");

// const modalGameEnd = document.getElementById("game-end");
console.log("added consts");