const questions = [
    { question: "What is the plural of 'mouse'?", options: ["mouses", "mice", "mouse", "meese"], answer: "mice" },
    { question: "Which word is a noun?", options: ["run", "happy", "cat", "blue"], answer: "cat" },
    { question: "Which word completes this sentence: 'She ___ to the store'?", options: ["go", "went", "gone", "goes"], answer: "went" },
    { question: "What is the opposite of 'hot'?", options: ["cold", "warm", "cool", "boiling"], answer: "cold" },
    { question: "How many vowels are in the word 'education'?", options: [4, 5, 6, 7], answer: 5 }
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

