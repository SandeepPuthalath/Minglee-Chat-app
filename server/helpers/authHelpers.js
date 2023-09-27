const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const User = require("../database/mongoDB/models/UserModel")
const Config = require("../utils/common/config")



module.exports = function authHelper(){

    const isUserExist = async (email) =>{
        const user = await User.findOne({email:email});
        return user? user: {}
    }

    const createUser = async (username, email, password) =>{
        const newUser = new User({
            username,
            email,
            password
        })

        await newUser.save()

        return newUser;

    }

    const createToken = async (user) =>{
        let authTokens = {
            access:"",
            refresh:""
        }
        const {password, ...payload} = user;

        authTokens.access = jwt.sign(payload, Config.JWT_ACCESS_TOKEN_SECRET);

        return authTokens

    }

    const comparePassword = async (password, user) =>{
        return await bcrypt.compare(password, user?.password)? true : false;
    }



    return {
        isUserExist,
        createUser,
        createToken,
        comparePassword,
    }

}