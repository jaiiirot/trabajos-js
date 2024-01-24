const socket = io();
const messageInput = document.getElementById("messageInput");
const sendMessagesButton = document.getElementById("sendMessagesButton");
const messagesContainer = document.getElementById("messagesContainer");

// messageInput.addEventListener("input", (e) => {
//   const inputText = e.target.value;
//   socket.emit("message", inputText);
// });

sendMessagesButton.addEventListener("click", () => {
  const inputText = messageInput.value;
  socket.emit("message", inputText);
  messageInput.value = "";
});
//ya no esta la <p></p>
// socket.on("message", (mensajes) => {
//   messagesContainer.innerHTML = mensajes;
// });

socket.on("messages", (mensajes) => {
  const mensajesHtml = mensajes
    .map((mensaje) => `<p>${mensaje.socketId}: ${mensaje.data}</p>`)
    .join("");
  messagesContainer.innerHTML = mensajesHtml;
});
/**SOCKETS ACTIONS */
// socket.emit("message", "Hola me estoy conectando desde el cliente");
// socket.on("evento_para_socket_individual", (data) => {
//   console.log(data);
// });
// socket.on("evento_para_todos_menos_el_sockets_actual", (data) => {
//   console.log(data);
// });
// socket.on("evento_para_todos", (data) => {
//   console.log(data);
// });
