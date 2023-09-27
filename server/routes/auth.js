const express = require("express")
const authController = require("../controllers/authController")


module.exports = function authRoutes(){
    const router = express.Router()
    const controller = authController()

    router.post("/signup", controller.handleSignup);
    
    router.post("/login", controller.handleLogin);



    return router
}