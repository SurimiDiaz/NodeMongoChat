require("dotenv").config();

const db = require("mongoose");
const Model = require("./model.js");
const { DB_USER, DB_PASSWORD } = process.env;

//Clase nativa de Js para hacer cualquier promesa
db.Promise = global.Promise;

//Conexion a la base de dato de Atlas
db.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@chatplatzi.pqhyhuk.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);
console.log("db conectado con exito");
module.exports = {
  addMessage: (message) => {
    const myMessage = new Model(message); //nueva clase del modelo
    myMessage.save();
  },
  getMessage: async () => {
    const messages = await Model.find(); //traer todos los mensajes

    return messages;
  },
};
