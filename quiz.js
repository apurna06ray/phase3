
const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling?",
        options: ["HTML", "CSS", "JavaScript"],
        correct: 1
    },
    {
        question: "Which keyword is used to declare a variable?",
        options: ["var", "let", "int"],
        correct: 1
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "##"],
        correct: 0
    },
    {
        question: "Which method is used to print output in the console?",
        options: ["print()", "console.log()", "display()"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const counterEl = document.getElementById("counter");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    optionsEl.innerHTML = "";

    counterEl.textContent =
        `Question ${currentQuestion + 1} of ${quizData.length}`;

    questionEl.textContent =
        quizData[currentQuestion].question;

    quizData[currentQuestion].options.forEach((option, index) => {
        const btn = document.createElement("button");

        btn.textContent = option;

        btn.onclick = () => checkAnswer(index);

        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const buttons = optionsEl.querySelectorAll("button");

    buttons.forEach((btn, index) => {
        btn.disabled = true;

        if (index === quizData[currentQuestion].correct) {
            btn.classList.add("correct");
        }

        if (
            index === selectedIndex &&
            index !== quizData[currentQuestion].correct
        ) {
            btn.classList.add("wrong");
        }
    });

    if (selectedIndex === quizData[currentQuestion].correct) {
        score++;

        scoreEl.textContent = `Score: ${score}`;
    }

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            window.location.href =
                `results.html?score=${score}&total=${quizData.length}`;
        }
    }, 1000);
}

loadQuestion();
