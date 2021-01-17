var startButtonEl = document.getElementById("startButton");
var welcomeMessageEl = document.getElementById("welcomeMessage");
var qContainerEl = document.getElementById("questionsContainer");
var qElement = document.getElementById("question");
var answerButtonsEl = document.getElementById("answers");
var countdownEl = document.getElementById("timerArea");
var scoreAreaEl = document.getElementById("scoreArea");
var highScoresButtonEl = document.getElementById("showScoresButton");

var timer = 75;
var runningTimer;
var score = 0;
var username = "";
var qNumber;
var finalScore;
const MAX_HIGH_SCORES = 7;

startButtonEl.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    welcomeMessage.classList.add("hide");
    scoreArea.classList.add("hide");
    answerButtons.classList.remove("hide");
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
