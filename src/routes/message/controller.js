// La logica del componente, como diet_module en la PI
const store = require("./store.js");
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
      store.addMessage(fullMessage);

      return resolve("Mensaje enviado!");
    });
  },

  getHystori: () => {
    return new Promise((resolve, reject) => {
      return resolve(store.getMessage());
    });
  },
};
