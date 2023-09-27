const express = require("express");
const http = require('http');
const morgan = require("morgan");
const cookiParser = require("cookie-parser")
const cors = require("cors")


const Config = require("../server/utils/common/config");
const HttpStatus = require("./utils/common/HttpStatus");
const AppError = require("./utils/common/AppError");
const routes = require("./routes");
const errorHandler = require("./controllers/errorController");
const connectDb = require("./database/mongoDB/connection");


const app  = express()
app.use(express.json())
app.use(cookiParser())
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true,
}))
app.use(morgan("dev"))

const server = http.createServer(app);

connectDb();

//routes
routes(app);

// Global error handler
app.use(errorHandler)

app.all("*", (req, res, next) => {
    const err = new AppError(`Can't find ${req.originalUrl} on the server`, HttpStatus.NOT_FOUNT);
    next(err)
})

const PORT = Config.PORT || 8000;

server.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));