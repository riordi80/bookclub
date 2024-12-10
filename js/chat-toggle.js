// Selección de elementos
const chatButton = document.getElementById("toggle-chat-button");
const chatCard = document.getElementById("chat");
const closeChatButton = document.getElementById("close-chat-button");

// Evento para mostrar el chat
chatButton.addEventListener("click", () => {
  chatCard.classList.remove("chat-hidden");
  chatCard.classList.add("chat-visible");
  chatButton.style.display = "none"; // Oculta el botón flotante
});

// Evento para cerrar el chat
closeChatButton.addEventListener("click", () => {
  chatCard.classList.remove("chat-visible");
  chatCard.classList.add("chat-hidden");
  chatButton.style.display = "block"; // Muestra el botón flotante
});