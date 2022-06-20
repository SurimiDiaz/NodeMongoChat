//chat
const Model = require("./model.js");

module.exports = {
  createChat: (users) => {
    return new Promise((resolve, reject) => {
      if (!users) return reject("Necesitamos users");
      console.log(users);
      const newChat = new Model({ users: users });
      newChat.save();

      return resolve("Chat creado!");
    });
  },

  listChats: () => {
    return new Promise((resolve, reject) => {
      //traer todos los chats
      const messages = Model.find()
        //para relacionar a los users con los chats
        .populate("users")
        .exec((error, populated) => {
          if (error) {
            return reject(error);
          }
          resolve(populated);
        });
    });
  },
};
