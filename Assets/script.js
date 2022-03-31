var timerEl = document.getElementById('countdown');

var startButton = document.getElementById('start-btn');
startButton.addEventListener('click', 
// Timer that counts down from 5
function countdown() {
  var timeLeft = 60;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
            // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = "Timer: " + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = 'Timer: 00';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
    }
    }, 1000);
    startButton.style.visibility = "hidden";
    startQuiz();
}
);

function startQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions.question;
    answerA.textContent = questions.choices[0];
    answerB.textContent = questions.choices[1];
    answerC.textContent = questions.choices[2];
    answerD.textContent = questions.choices[3];
}

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