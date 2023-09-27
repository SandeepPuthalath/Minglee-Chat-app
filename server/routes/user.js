const express = require("express");
const userController = require("../controllers/userController");


module.exports = function userRoutes() {
    const router = express.Router();
    const controller = userController()
    router
        .route("/:id")
        .get(controller.handleFetchingUser)

    
    return router;
}