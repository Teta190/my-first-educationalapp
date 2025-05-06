const questions = [
    { question: "Why should we recycle?", options: ["To save resources", "To waste time", "It's fun", "It costs money"], answer: "To save resources" },
    { question: "What should you do if someone is bullied?", options: ["Ignore them", "Help them", "Join in", "Laugh"], answer: "Help them" },
    { question: "Why should we turn off lights when not needed?", options: ["To save energy", "To waste energy", "For fun", "To confuse people"], answer: "To save energy" },
    { question: "What does 'respect' mean?", options: ["Being kind", "Ignoring others", "Being rude", "Being selfish"], answer: "Being kind" },
    { question: "Why should we wash our hands?", options: ["To remove dirt", "To waste water", "For no reason", "To play"], answer: "To remove dirt" }
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




