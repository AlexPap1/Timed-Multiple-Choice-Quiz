//questions
const questions = [
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    },
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    },
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    },
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    },
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    },
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    },
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    },
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    },
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    },
    {
        question: "Yes or No?",
        choices: ["a. yes", "b. no", "c. no", "d. no"],
        answer: "a. yes"
    }
]; 

//variables defined

var timerEl = document.getElementById('countdown');
var questionOrder = 0;
var startButton = document.getElementById('start-btn');
var welcome = document.getElementById('welcome');
var questionName = document.getElementById('questionName');
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");


// Timer set and starting quiz

startButton.addEventListener('click', 
function countdown() {
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
    startButton.style.visibility = "hidden";
    welcome.style.visibility = "hidden";
    startQuiz();
}
);

//start quiz function

function startQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionName.textContent = questions[questionOrder].question;
    answerA.textContent = questions[questionOrder].choices[0];
    answerB.textContent = questions[questionOrder].choices[1];
    answerC.textContent = questions[questionOrder].choices[2];
    answerD.textContent = questions[questionOrder].choices[3];
}

//check answer function
//game over (timer over)
//game over (questions answered)
//high score function
//record score
//enter hs w/ intiial
//save hs
