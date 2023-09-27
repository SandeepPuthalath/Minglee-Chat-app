const asyncErrorHandler = require("../utils/common/AsyncErrorHandler")
const authHelper = require("../helpers/authHelpers");
const AppError = require("../utils/common/AppError");
const HttpStatus = require("../utils/common/HttpStatus")

module.exports = function authController() {

    const helper = authHelper();

    const handleSignup = asyncErrorHandler(async (req, res) => {
        const { username, email, password } = req.body;
        const isExist = await helper.isUserExist(email);
        if (isExist) throw new AppError(`User already exists with email ${email}`, HttpStatus.CONFLICT);
        const newUser = await helper.createUser(username, email, password);
        const authTokens = await helper.createToken(newUser);

        res.status(HttpStatus.OK).json({ status: "success", message: "Signup successfull", authTokens })
    })

    const handleLogin = asyncErrorHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await helper.isUserExist(email);
        const isMatch = await helper.comparePassword(password, user);
        if (!isMatch) throw new AppError("Invalid email or password", HttpStatus.UNAUTHORIZED);
        const authTokens = await helper.createToken(user);
        res.status(HttpStatus.OK).json({ status: "success", message: "Signup successfull", authTokens })

    })

    return {
        handleSignup,
        handleLogin,
    }

}