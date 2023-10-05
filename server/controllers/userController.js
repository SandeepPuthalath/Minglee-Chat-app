const userHelper = require("../helpers/userHelper");
const AppError = require("../utils/common/AppError");
const asyncErrorHandler = require("../utils/common/AsyncErrorHandler");
const HttpStatus = require("../utils/common/HttpStatus");



module.exports = function userController() {

    const helper = userHelper()

    const handleFetchingUser = asyncErrorHandler(async (req, res) => {
        const { id } = req.params;
        if (!id) throw new AppError("Bad request", HttpStatus.BAD_REQUEST);
        const user = await helper.fetchUser(id);
        if (!user) throw new AppError("User was not found", HttpStatus.NOT_FOUND);

        res.status(HttpStatus.OK).json(user);
    });

    const handleFetchingAllUser = asyncErrorHandler(async (req, res) => {
        const search = req.query.search;
        const user = req.user;
        const results = await helper.searchUser(search, user)

        res.status(HttpStatus.OK).json(results)
    })


    return {
        handleFetchingUser,
        handleFetchingAllUser,
    }
}