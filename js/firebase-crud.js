import firebase from "./firebase-setup.js";

function listenToNewMessages() {
  const DB = firebase.getDatabase();
  const MESSAGES_REF = firebase.ref(DB, 'messages/');
  firebase.onValue(MESSAGES_REF, showMessages);
}

function listenToSentMessageButton() {
  document.getElementById("form-send-message").addEventListener("submit", sendMessage);
}

function showMessages(snapshot) {
  let data = snapshot.val();

  let messageList = "";
  for (let item in data) {
    messageList = `
          <div>
            <div>${data[item].sentBy}:</div>
            <div>${data[item].message}</div>
          </div>
        ` + messageList;
  }

  let messageListElement = document.getElementById("message-list");
  messageListElement.innerHTML = messageList;
}

function sendMessage(event) {
  event.preventDefault();
  let formSendMessage = event.target;

  const DB = firebase.getDatabase();
  const MESSAGES_REF = firebase.ref(DB, 'messages/');
  const NEW_MESSAGE_REF = firebase.push(MESSAGES_REF);
  firebase.set(NEW_MESSAGE_REF, {
    message: formSendMessage.message.value,
    sentBy: formSendMessage["sent-by"].value
  });
}

listenToNewMessages();
listenToSentMessageButton();