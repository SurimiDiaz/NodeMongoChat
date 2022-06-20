require("dotenv").config();

const Model = require("./model.js");

module.exports = {
  addMessage: (message) => {
    const myMessage = new Model(message); //nueva clase del modelo
    myMessage.save();
  },
  getMessage: async (filterUser) => {
    const query = {};
    //filtros
    if (filterUser) {
      query.user = new RegExp(filterUser, "i");
    }
    //traer todos los mensajes
    const messages = await Model.find(query);

    return messages;
  },

  updateText: async (id, newMessage) => {
    //busca el mensaje por id y cambia el contenido de la propiedad message por newMessage
    const messageFindById = await Model.findById(id);
    messageFindById.message = newMessage;

    const messageUpdated = await messageFindById.save();

    return messageUpdated;
  },

  deleteMessage: async (id) => {
    return await Model.deleteOne({
      _id: id,
    });
  },
};
