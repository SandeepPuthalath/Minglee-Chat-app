const express = require("express");
const http = require('http');


const Config = require("../config");

const app  = express()
app.use(express.json())


const server = http.createServer(app);



const PORT = Config.PORT || 8000;

server.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));