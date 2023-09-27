const authRoutes = require("./auth");
const userRoutes = require("./user")




module.exports = function routes(app){

    app.use("/auth", authRoutes());
    app.use("/user", userRoutes())
}