const express = require("express");
const Express = express();

Express.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

Express.listen(3000);

module.exports = Express;
