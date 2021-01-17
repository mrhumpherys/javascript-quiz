var startButtonEl = document.querySelector("#start-button");
var introContainerEl = document.querySelector("#intro-container");
var titleEl = document.querySelector("#title");
var introEl = document.querySelector("#intro");
var questionContainerEl = document.getElementById("question-container")
var questionEl = document.getElementById("question");
let timerEl = document.getElementById("timer");
var time = 75;





var startQuiz = function() {
    removeIntro();
    timerEl.classList.remove("hidden");
    var startTimer = setInterval(function() {
    
        if (time > 0) {
            timerEl.textContent = time;
            time--;
        } else {
            timerEl.textContent = "Game Over";
            clearInterval(startTimer);
        }
    }, 1000);
    questionContainerEl.classList.remove("hidden");
    questionEl.classList.remove("hidden");
    addQuestions();
    

    
}
var removeIntro = function () {
    console.log("You clicked Start!")
    introContainerEl.className = "hidden";
    titleEl.className = "hidden";
    introEl.className = "hidden";
    introContainerEl.removeChild(startButtonEl);
    console.log(startButtonEl);
}
var addQuestions = function() {


}








var questionsArr = [
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
startButtonEl.addEventListener("click", startQuiz);