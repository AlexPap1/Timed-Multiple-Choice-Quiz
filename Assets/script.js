var timerEl = document.getElementById('countdown');
const questionContainer = document.getElementById('questionContainer');
var startButton = document.getElementById('start-btn');
var welcome = document.getElementById('welcome');
var questionOrder = 0;
const questionEl = document.getElementById('questionName');
const answerEl = document.getElementById('answers');
var timeInterval;
var timeLeft
var score = 0;
var initials;

//Start Button and Timer Set
startButton.addEventListener('click', 
function countdown() {
    startButton.style.visibility = "hidden";
    welcome.style.visibility = "hidden";
    questionOrder = 0;
    timeLeft = 60;
    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = "Timer: " + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = 'Timer: 00';
            clearInterval(timeInterval);
            endQuiz();
    }
    }, 1000);
    questionContainer.classList.remove('hide')
    startQuiz();
}
);

function startQuiz() {
    resetState()
    showQuestion(questions[questionOrder])
}


function showQuestion(question) {
        resetState();
        questionEl.textContent = question.question
        question.choices.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            button.dataset.correct = answer.correct
            button.addEventListener('click', selectAnswer)
            answerEl.appendChild(button)
    })
}

function resetState() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

function selectAnswer(e) {
    questionOrder++;
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(correct)
    //if statement total length --> end else --> increment question index (question Order)
    if (questionOrder == questions.length) {
        endQuiz(); }
    else {
        console.log("question cycle")
        showQuestion(questions[questionOrder]);
    }
}

function setStatusClass(correct) {
    if (correct == "true") {
        score ++
    }
    else {
        timeLeft -= 5
    }
    console.log("score", score)
}


function endQuiz() {   
    clearInterval(timeInterval);
    window.alert("Quiz Over");
    initials = window.prompt("Save Initials");
    resetState();
    saveScores();
}

function saveScores() {
    var savedData = {initials, score}
    localStorage.setItem("score", JSON.stringify(savedData));
};

function loadScores() {
    //save object into and array to not override score
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
        question: "Yes or No 1?",
        choices: [
            {text: 'a1. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No 2?",
        choices: [
            {text: 'a2. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No 3?",
        choices: [
            {text: 'a3. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No 4?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No 5?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No 6?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No 7?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No 8?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    },
    {
        question: "Yes or No 9?",
        choices: [
            {text: 'a. yes', correct: true },
            {text: 'b. no', correct: false },
            {text: 'c. no', correct: false },
            {text: 'd. no', correct: false },
        ]
    }
];