//user

const Model = require("./model.js");

module.exports = {
  addUser: (user) => {
    return new Promise((resolve, reject) => {
      if (!user) return reject("se necesita usuaruio");

      const myUser = new Model(user);
      myUser.save();

      return resolve("Usuario creado");
    });
  },

  getUsers: async (userName) => {
    const query = {};

    if (userName) {
      query.name = new RegExp(userName, "i");
    }

    const foundUsers = await Model.find(query);

    return foundUsers;
  },
};
