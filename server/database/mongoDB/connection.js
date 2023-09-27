const mongoose = require("mongoose");
const Config = require("../../utils/common/config");
const MONGODB_URI = Config.MONGODB_URI

const connectDb = () => {

    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    ).then(() => {
        console.log("Database connected successfully")
    }).catch((err) => {
        console.error(err)
    })
}

module.exports = connectDb
