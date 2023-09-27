const User = require("../database/mongoDB/models/UserModel")


module.exports = function userHelper(){

    const fetchUser = async (id) =>{
        const user = await User.findById(id);
        return {
           _id: user?._id,
           username:user?.username,
           email: user?.email
        }
    }


    return {
        fetchUser,
    }
}