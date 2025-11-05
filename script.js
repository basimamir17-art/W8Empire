// W8Empires v1.342.32 Script File

// Typewriter effect for main hero title
const typeText = "Welcome to the Royal Empire of W8Empires";
let index = 0;

function typeEffect() {
  const typeElem = document.querySelector(".type");
  if (!typeElem) return;
  if (index < typeText.length) {
    typeElem.textContent += typeText.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// LocalStorage Signup System
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name && email && password) {
      localStorage.setItem("empireUser", JSON.stringify({ name, email }));
      alert(`Welcome to the Empire, ${name}! 👑`);
      window.location.href = "index.html";
    } else {
      alert("Please fill all fields.");
    }
  });
}

// Chat Message (LocalStorage-based mock)
const sendBtn = document.getElementById("sendBtn");
const chatArea = document.getElementById("chatArea");

if (sendBtn && chatArea) {
  const chatMessages = JSON.parse(localStorage.getItem("empireChat")) || [];

  // Show old messages
  chatMessages.forEach((msg) => {
    const div = document.createElement("div");
    div.textContent = msg;
    chatArea.appendChild(div);
  });

  sendBtn.addEventListener("click", () => {
    const msgInput = document.getElementById("chatMessage");
    const message = msgInput.value.trim();
    if (message) {
      const div = document.createElement("div");
      div.textContent = message;
      chatArea.appendChild(div);
      chatArea.scrollTop = chatArea.scrollHeight;

      chatMessages.push(message);
      localStorage.setItem("empireChat", JSON.stringify(chatMessages));

      msgInput.value = "";
    }
  });
}
