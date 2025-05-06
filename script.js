function displayDateTime() {
    const now = new Date();
    const dateTimeElement = document.getElementById("datetime");
    
    if (dateTimeElement) {
        dateTimeElement.innerText = `Current Date and Time: ${now.toLocaleString()}`;
        dateTimeElement.style.color = "white"; // Ensure it applies only if the element exists
    }
}

function storeUserData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        document.cookie = `userName=${name}; path=/`; // Save username in cookies
        window.location.href = "menu.html"; // Redirect to menu page
    } else {
        alert("Please fill out both fields."); // Alert if fields are empty
    }
}

function getUserName() {
    const cookies = document.cookie.split("; ");
    const userNameCookie = cookies.find(cookie => cookie.startsWith("userName="));
    
    return userNameCookie ? decodeURIComponent(userNameCookie.split("=")[1]) : "Student"; 
    // Decoding ensures special characters are handled
}

// Display welcome message if the element exists on another page
const welcomeMessageElement = document.getElementById("welcome-message");
if (welcomeMessageElement) {
    welcomeMessageElement.innerText = `Hello, ${getUserName()}!`;
}

// Ensure score and questions are properly defined before using them
let score = 0; // Placeholder value, should be updated from quiz logic
let questions = []; // Placeholder, should be replaced with actual questions array

function showResult() {
    const feedback = document.getElementById("feedback");

    if (feedback) {
        feedback.innerText = `Your Score: ${score}/${questions.length}`;
        feedback.style.color = score >= 3 ? "green" : "red";
        feedback.innerText += score >= 3 ? "\nYou Passed!" : "\nYou Failed!";

        setTimeout(() => {
            window.location.href = "menu.html"; // Redirect after 3 seconds
        }, 3000);
    }
}
