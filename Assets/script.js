var timerEl = document.getElementById('countdown');
const questionContainer = document.getElementById('questionContainer');
var startButton = document.getElementById('start-btn');
var welcome = document.getElementById('welcome');
var questionOrder = 0;
const questionEl = document.getElementById('questionName');

//Start Button and Timer Set
startButton.addEventListener('click', 
function countdown() {
    startButton.style.visibility = "hidden";
    welcome.style.visibility = "hidden";
    questionOrder = 0;
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Timer: 00';
            clearInterval(timeInterval);
    }
    }, 1000);
    startQuiz();
    questionContainer.classList.remove('hide')
}
);

function startQuiz() {
    showQuestion(questions[questionOrder])
}

function showQuestion(question) {
    questionEl.innerText = question.question
}

//questions
const questions = [
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    }
];
    




































































































/*

//variables defined

var score = 0;
var questionName = document.getElementById('questionName');
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");

// Timer set and starting quiz

var timerEl = document.getElementById('countdown');
const questionContainerElement = document.getElementById('questionContainer');
var startButton = document.getElementById('start-btn');
var welcome = document.getElementById('welcome');

startButton.addEventListener('click', 
function countdown() {
    startButton.style.visibility = "hidden";
    welcome.style.visibility = "hidden";
    questionOrder = 0;
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Timer: 00';
            clearInterval(timeInterval);
    }
    }, 1000);
    questionContainerElement.classList.remove('hide')
    startQuiz();
}
);
/*
//start quiz function

function startQuiz() {
    nextQuestion();
}

function nextQuestion() {
    for (var i = 0; i < questions.length; i++) {
        questionName.textContent = questions[questionOrder].question;
        answerA.textContent = questions[questionOrder].choices[0];
        answerB.textContent = questions[questionOrder].choices[1];
        answerC.textContent = questions[questionOrder].choices[2];
     answerD.textContent = questions[questionOrder].choices[3];
    }
}
*/
//check answer function
// tell user if right or wrong
//game over (timer over)
//game over (questions answered)
//high score function
//record score
//enter hs w/ intiial
//save hs
