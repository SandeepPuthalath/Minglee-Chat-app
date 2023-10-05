const User = require("../database/mongoDB/models/UserModel")


module.exports = function userHelper() {

    const fetchUser = async (id) => {
        const user = await User.findById(id).select("-password");
        return user;
    }

    const searchUser = async (search, session) => {
        console.log(search)
        const keyword = search ? {
            $or: [
                {
                    username: {
                        $regex: search, $options: "i"
                    }
                },
                {
                    email: {
                        $regex: search, $options: "i"
                    }
                }
            ],

        } : {}

        const user = await User.find(keyword).find({ _id: { $ne: session?._id }});
        console.log(user)
        return user
    }


    return {
        fetchUser,
        searchUser,
    }
}