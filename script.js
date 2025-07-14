
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;

  addMessage("user", msg);
  userInput.value = "";

  setTimeout(() => {
    const botReply = getBotReply(msg);
    addMessage("bot", botReply);
  }, 800);
}

function addMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.innerText = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(msg) {
  const replies = [
    "That's interesting!",
    "Can you explain more?",
    "I'm not sure about that.",
    "Totally makes sense.",
    "Great thought!",
    "I'm just a bot, but I try!",
    "Cool! 😎"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
