const { protect } = require("../utils/middlewares/authMiddleware");
const authRoutes = require("./auth");
const userRoutes = require("./user")




module.exports = function routes(app){

    app.use("/api/auth", authRoutes());
    app.use("/api/user", protect, userRoutes())
}