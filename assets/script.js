var startButtonEl = document.getElementById("startButton");
var welcomeMessageEl = document.getElementById("welcomeMessage");
var qContainerEl = document.getElementById("questionsContainer");
var qElement = document.getElementById("question");
var answerButtonEl = document.getElementById("answers");
var timerAreaEl = document.getElementById("timerArea");
var scoreAreaEl = document.getElementById("scoreArea");
var highScoresButtonEl = document.getElementById("showScoresButton");
var answerResultEl = document.getElementById("answerResult");

var timer = 75;
var runningTimer;
var score = 0;
var username = "";
var qNumber;
var finalScore;
const MAX_HIGH_SCORES = 7;


//High Scores grab
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];


startButtonEl.addEventListener("click", startQuiz);
highScoresButtonEl.addEventListener("click", displayScores);

//main function
function startQuiz() {
    startButtonEl.classList.add("hide");
    welcomeMessageEl.classList.add("hide");
    scoreAreaEl.classList.add("hide");
    answerButtonEl.classList.remove("hide");
    qNumber = 0;
    qContainerEl.classList.remove("hide");
    scoreAreaEl.innerHTML = "";
    startTimer();
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild);
    }
    showQuestion(questions[qNumber]);
    highScoresButtonEl.classList.remove("hide");
}

//questions generator
function showQuestion(question) {
    qElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn","answerbtn");
        if (answer.correct) {
        button.dataset.correct = answer.correct;
        } 
        button.addEventListener("click", selectAnswer);
        answerButtonEl.appendChild(button);
    });
}

//timer
function startTimer() {
    timerAreaEl.innerHTML = "Time Remaining: " + timer;
    if (timer <= 0) {
        endQuiz();
    } else {
        timer -= 1;
        runningTimer = setTimeout(startTimer, 1000);
    }
}

//check answers and penalize time, show when wrong answer
function selectAnswer(e) {
    const selectedButton = e.target;
    if (!selectedButton.dataset.correct) {
        timer = timer - 10;
        timerAreaEl.innerText = "Incorrect!";
    }
    if (qNumber == questions.length - 1) {
        endQuiz();
    } else {
        clearQuestion();
        qNumber++;
        showQuestion(questions[qNumber]);
    }
}





function clearQuestion() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild);
    }
}


function endQuiz() {
    clearInterval(runningTimer);
    timerAreaEl.innerText = "Finished";
    clearQuestion();
    showResults();
    startButtonEl.innerText = "Restart";
    startButtonEl.classList.remove("hide");
    timer = 75;
    score = 0;
}

function showResults() {
    finalScore = timer;
    if (finalScore < 0) {
        finalScore = 0;
    }
    qElement.innerText = "";
    scoreAreaEl.classList.remove("hide");
    answerButtonEl.classList.add("hide");
    scoreAreaEl.innerHTML = `Your score is ${finalScore}!<div id="init">Name: <input type="text" name="initials" id="initials" placeholder="Enter Your Name"><button id="save-btn" class="save-btn btn" onclick="submitScores(event)" disabled>Save</button>`;
    username = document.getElementById("initials");
    saveButton = document.getElementById("save-btn");
    username.addEventListener("keyup", function() {
        saveButton.disabled = !username.value;
    });
}


function submitScores(e) {
    const score = {
        score: finalScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    displayScores();
}


function displayScores() {
    clearInterval(runningTimer);
    timerAreaEl.innerHTML = "";
    clearQuestion();
    qElement.innerText = "";
    scoreAreaEl.classList.remove("hide");

    scoreAreaEl.innerHTML = `<h2>High Scores</h2><ul id="highScoresList"></ul><button id="clearScores" class="btn" onclick="clearScores()">Clear Scores</button>`;
    const highScoresList = document.getElementById("highScoresList");
    highScoresList.innerHTML = highScores
        .map(score => {
        return `<li class="scoresList">${score.name} - ${score.score}</li>`;
        })
        .join("");
    startButtonEl.classList.remove("hide");
    highScoresButtonEl.classList.add("hide");
}


function clearScores() {
    highScores = [];
    highScoresList.innerHTML = "<h3>Scores have been Cleared</h3>";
    document.getElementById("clearScores").classList.add("hide");
}

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "1. strings", correct: false},
            { text: "2. booleans", correct: false},
            { text: "3. alerts", correct: true},
            { text: "4. numbers", correct: false}
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed with ______.",
        answers: [
            { text: "1. quotes", correct: false},
            { text: "2. curly brackets", correct: false},
            { text: "3. parenthesis", correct: true},
            { text: "4. square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: [
            { text: "1. numbers and strings", correct: false},
            { text: "2. other arrays", correct: false},
            { text: "3. booleans", correct: false},
            { text: "4. all of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables",
        answers: [
            { text: "1. commas", correct: false},
            { text: "2. curly brackets", correct: false},
            { text: "3. quotes", correct: true},
            { text: "4. parenthesis", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "1. JavaScript", correct: false},
            { text: "2. terminal/bash", correct: false},
            { text: "3. for loops", correct: false},
            { text: "4. console log", correct: true}
        ]
    }
];
