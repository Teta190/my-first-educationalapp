const questions = [
    { question: "How many minutes of exercise should children do daily?", options: [30, 45, 60, 90], answer: 60 },
    { question: "Which of these is a healthy snack?", options: ["Candy", "Fruit", "Chips", "Cookies"], answer: "Fruit" },
    { question: "What is the main source of vitamin D?", options: ["Sunlight", "Water", "Milk", "Meat"], answer: "Sunlight" },
    { question: "Why is sleep important?", options: ["It helps with growth", "It causes fatigue", "It wastes time", "It has no benefits"], answer: "It helps with growth" },
    { question: "How many glasses of water should you drink daily?", options: [4, 6, 8, 10], answer: 8 }
];

let currentQuestion = 0;
let score = 0;


function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById("question").innerText = q.question;
        const options = document.getElementById("options");
        options.innerHTML = "";
        q.options.forEach(option => {
            const btn = document.createElement("button");
            btn.innerText = option;
            btn.onclick = () => checkAnswer(option);
            options.appendChild(btn);
        });
    } else {
        showResult();
    }
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    const feedback = document.getElementById("feedback");
    if (selected === q.answer) {
        score++;
        feedback.innerText = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Wrong!";
        feedback.style.color = "red";
    }
    currentQuestion++;
    setTimeout(() => {
        feedback.innerText = "";
        loadQuestion();
    }, 1000);
}

function showResult() {
    const feedback = document.getElementById("feedback");
    feedback.innerText = `Your Score: ${score}/${questions.length}`;
    feedback.style.color = score >= 3 ? "green" : "red";
    feedback.innerText += score >= 3 ? "\nYou Passed!" : "\nYou Failed!";
}

window.onload = loadQuestion;

function showResult() {
    const feedback = document.getElementById("feedback");
    feedback.innerText = `Your Score: ${score}/${questions.length}`;
    feedback.style.color = score >= 3 ? "green" : "red";
    feedback.innerText += score >= 3 ? "\nYou Passed!" : "\nYou Failed!";

    setTimeout(() => {
        window.location.href = "menu.html"; // Перенаправлення на головне меню
    }, 3000); // Затримка в 3 секунди
}



