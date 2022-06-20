const Model = require("./model.js");

module.exports = {
  addMessage: (message) => {
    const myMessage = new Model(message); //nueva clase del modelo
    myMessage.save();
  },
  getMessage: (filterUser) => {
    return new Promise((resolve, reject) => {
      const query = {};

      //filtros
      if (filterUser) {
        query.user = new RegExp(filterUser, "i");
      }
      //traer todos los mensajes
      const messages = Model.find(query)
        //para relacionar a los users con los mensajes
        .populate("user")
        .exec((error, populated) => {
          if (error) {
            return reject(error);
          }
          resolve(populated);
        });
    });
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
