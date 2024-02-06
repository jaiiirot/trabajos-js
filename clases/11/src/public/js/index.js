import { isConnectionSwal } from "./actionsSwal.js";
const socket = io();
let username;
let chatBox = document.getElementById("chatBox");
Swal.fire({
  title: "IDENTIFICATE",
  input: "text",
  text: "Ingresa tu usuario para identificarte en el chat",
  inputValidator: (value) => {
    return !value && "Por favor, ingresa tu usuario";
  },
  allowOutsideClick: false,
  icon: "success",
}).then((result) => {
  username = result.value;
  socket.emit("userNew", username);
  socket.on("connectionUser", (data) => {
    isConnectionSwal(data, "success");
  });
  socket.on("disconnectUser", (data) => {
    isConnectionSwal(data, "error");
  });
});

chatBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (chatBox.value.trim().length > 0) {
      socket.emit("message", { username, message: chatBox.value });
      chatBox.value = "";
    }
  }
});

socket.on("messageLogs", (data) => {
  let chatLogs = document.getElementById("messageLogs");
  let messages = "";
  data.forEach((message) => {
    messages =
      messages + `<strong>${message.username}</strong>: ${message.message}<br>`;
  });
  chatLogs.innerHTML = messages;
});
