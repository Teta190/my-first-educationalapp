const questions = [
    { question: "Who was Mary, Queen of Scots?", options: ["A poet", "A queen", "A warrior", "A scientist"], answer: "A queen" },
    { question: "What is the capital of Scotland?", options: ["Glasgow", "Aberdeen", "Edinburgh", "Dundee"], answer: "Edinburgh" },
    { question: "What is the name of Scotland's national flower?", options: ["Rose", "Thistle", "Daffodil", "Lily"], answer: "Thistle" },
    { question: "Which year did Scotland join the UK?", options: [1603, 1707, 1801, 1901], answer: 1707 },
    { question: "What is a famous Scottish dish?", options: ["Sushi", "Pizza", "Haggis", "Curry"], answer: "Haggis" }
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



