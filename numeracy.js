const questions = [
    { question: "What is 5 + 3?", options: [6, 8, 9, 7], answer: 8 },
    { question: "What is 10 - 4?", options: [6, 5, 4, 7], answer: 6 },
    { question: "What is 2 x 3?", options: [5, 6, 7, 8], answer: 6 },
    { question: "What is 9 ÷ 3?", options: [2, 3, 4, 5], answer: 3 },
    { question: "What is 7 + 2?", options: [8, 9, 10, 11], answer: 9 }
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

// function showResult() {
//     const feedback = document.getElementById("feedback");
//     feedback.innerText = `Your Score: ${score}/${questions.length}`;
//     feedback.style.color = score >= 3 ? "green" : "red";
//     feedback.innerText += score >= 3 ? "\nYou Passed!" : "\nYou Failed!";
// }

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

