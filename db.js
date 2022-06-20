const db = require("mongoose");
const { DB_USER, DB_PASSWORD } = process.env;

//Clase nativa de Js para hacer cualquier promesa
db.Promise = global.Promise;

//Conexion a la base de dato de Atlas

const connect = async () => {
  await db.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@chatplatzi.pqhyhuk.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  );
  console.log("db conectado con exito");
};

module.exports = connect;
