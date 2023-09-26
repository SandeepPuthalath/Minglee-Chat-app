const authRoutes = require("./auth")



module.exports = function routes(app){

    app.use("/auth", authRoutes())

}