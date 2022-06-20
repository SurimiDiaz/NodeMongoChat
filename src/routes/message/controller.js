// La logica del componente, como diet_module en la PI
const {
  addMessage,
  getMessage,
  updateText,
  deleteMessage,
} = require("./store.js");
module.exports = {
  addMessage: (user, message) => {
    return new Promise((resolve, reject) => {
      if (!user || !message) {
        return reject("datos not ok");
      }
      const fullMessage = {
        user: user,
        message: message,
        date: new Date(),
      };
      addMessage(fullMessage);

      return resolve("Mensaje enviado!");
    });
  },

  getHystori: (filterUser) => {
    return new Promise((resolve, reject) => {
      return resolve(getMessage(filterUser));
    });
  },

  updateMessage: (id, newMessage) => {
    return new Promise((resolve, reject) => {
      if (!id || !newMessage) {
        return reject("Pedido invalido");
      }
      return resolve(updateText(id, newMessage));
    });
  },

  killMessage: (id) => {
    return new Promise((resolve, reject) => {
      if (!id) return reject("Falta id");

      return resolve(deleteMessage(id));
    });
  },
};
