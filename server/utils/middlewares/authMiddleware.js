const jwt = require("jsonwebtoken");
const User = require("../../database/mongoDB/models/UserModel");
const asyncErrorHandler = require("../../utils/common/AsyncErrorHandler");
const Config = require("../common/config");
const HttpStatus = require("../common/HttpStatus");
const AppError = require("../common/AppError");


const protect = asyncErrorHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization
        && req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, Config.JWT_ACCESS_TOKEN_SECRET);
            req.user = await User.findById(decoded._doc?._id).select("-password");
            next();
        } catch (error) {
            res.status(HttpStatus.UNAUTHORIZED);
            throw new AppError("Not authorized, token failed", HttpStatus.UNAUTHORIZED);
        }
    } else {
        res.status(HttpStatus.UNAUTHORIZED);
        throw new AppError("Not authorized, token failed", HttpStatus.UNAUTHORIZED)
    }
})


module.exports = {
    protect,
}