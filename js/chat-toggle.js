const CHAT_BUTTON = document.getElementById("toggle-chat-button");
const CHAT_CARD = document.getElementById("chat");
const CLOSE_CHAT_BUTTON = document.getElementById("close-chat-button");

// Show chat event
CHAT_BUTTON.addEventListener("click", () => {
  CHAT_CARD.classList.remove("chat-hidden");
  CHAT_CARD.classList.add("chat-visible");
  CHAT_BUTTON.style.display = "none"; // Oculta el botón flotante
});

// Close chat event
CLOSE_CHAT_BUTTON.addEventListener("click", () => {
  CHAT_CARD.classList.remove("chat-visible");
  CHAT_CARD.classList.add("chat-hidden");
  CHAT_BUTTON.style.display = "block"; // Muestra el botón flotante
});