const server = require("./src/app.js");
const db = require("./db.js");
const port = 3001;

server.listen(port, () => {
  console.log(`Chat app listening on port ${port}`);
});

db();
