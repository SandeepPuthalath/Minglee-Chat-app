const asyncErrorHandler= require("../utils/common/AsyncErrorHandler")

module.exports = function authController(){

    const handleSignup = asyncErrorHandler(async (req, res) =>{
        console.log(req.body)
    })

    return {
        handleSignup,
    }

}