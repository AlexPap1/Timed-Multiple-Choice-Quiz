//variables
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
var HS = document.getElementById('highScore');

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

//Starts Quiz
function startQuiz() {
    resetState()
    showQuestion(questions[questionOrder])
}

//Reveals Question
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

//Resets answer buttons
function resetState() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

//cycles through questions and asesses correct answers
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

//adds to score or removes tiem based on boolean value of correctness of answers
function setStatusClass(correct) {
    if (correct == "true") {
        score ++
    }
    else {
        timeLeft -= 10
    }
    console.log("score", score)
}

//ends quiz by closing timer, and prompts user initials
function endQuiz() {   
    clearInterval(timeInterval);
    window.alert("Quiz Over");
    initials = window.prompt("Save Initials");
    resetState();
    saveScores();
}

//saves initials and scores to local storage
function saveScores() {
    var savedData = {initials, score}
    savedData.textContent = (initials + " your score is: " + score)
    console.log (savedData.textContent)
    localStorage.setItem("score", JSON.stringify(savedData));
    HS.textContent = savedData.textContent = (initials + " your score is: " + score + "!")
    console.log(HS);
};

//questions and answer choices
const questions = [
    {
        question: "How do you compare two variables in JS?",
        choices: [
            {text: 'a. =', correct: false },
            {text: 'b. ==', correct: false },
            {text: 'c. ===', correct: false },
            {text: 'd. Both b. and c.', correct: true },
        ]
    },
    {
        question: "Text contained within {} is referred to as a(n)?",
        choices: [
            {text: 'a1. element', correct: false },
            {text: 'b. object', correct: true },
            {text: 'c. string', correct: false },
            {text: 'd. anchor', correct: false },
        ]
    },
    {
        question: "Which is not a proper way to comment?",
        choices: [
            {text: 'a2. //', correct: false },
            {text: 'b. /*', correct: false },
            {text: 'c. */', correct: true },
            {text: 'd. <!--', correct: false },
        ]
    },
    {
        question: "How do you group multiple variables into an object?",
        choices: [
            {text: 'a3. [variable1, variable2]', correct: false },
            {text: 'b. {variable1, varialble2}', correct: true },
            {text: 'c. (variable1, variable2)', correct: false },
            {text: 'd. {"variable1" + "variable2")', correct: false },
        ]
    },
    {
        question: "What is the speific term defined as a variable that can either be true of false?",
        choices: [
            {text: 'a. Boolean', correct: true },
            {text: 'b. variable', correct: false },
            {text: 'c. element', correct: false },
            {text: 'd. constant', correct: false },
        ]
    },
    {
        question: "How do you call a variable in a function?",
        choices: [
            {text: 'a. function name () { variable }', correct: false },
            {text: 'b. variable function name () { }', correct: false },
            {text: 'c. variable function (name) { }', correct: false },
            {text: 'd. function name (variable) { }', correct: true },
        ]
    },
    {
        question: "Where should you include your <source> for linking your .js to your .html?",
        choices: [
            {text: 'a. in the head with a defer notation', correct: false },
            {text: 'b. at the end of your .html', correct: false },
            {text: 'c. anywhere', correct: false },
            {text: 'd. either a. or b.', correct: true },
        ]
    },
    {
        question: "Where shoudl you include your index.html?",
        choices: [
            {text: 'a. anywhere', correct: false },
            {text: 'b. Assets folder', correct: false },
            {text: 'c. The Root folder', correct: true },
            {text: 'd. None of the Above', correct: false },
        ]
    },
    {
        question: "What is the purpose of an anchor tag?",
        choices: [
            {text: 'a. to create a hyperlink on the webpage', correct: true },
            {text: 'b. it functions the same as an h1, h2, etc.', correct: false },
            {text: 'c. it is the same as a <div>', correct: false },
            {text: 'd. it is the same as a <p>', correct: false },
        ]
    },
    {
        question: "EXTRA CREDIT! What is the color value for the background on this page?",
        choices: [
            {text: 'a. rgb(254, 255, 213)', correct: true },
            {text: 'b. rgb(97, 82, 139)', correct: false },
            {text: 'c. rgb(17, 144, 225)', correct: false },
            {text: 'd. rgb(80, 136, 193)', correct: false },
        ]
    }
];