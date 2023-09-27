const mongoose = require('mongoose');
const bcrypt = require("bcrypt");


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        require: true,
    },
    password: {
        type: String,
        unique: true,
        trim: true,
        require: true,
    },
    pic: {
        type: String,
        trim: true,
    }
},
    {
        timestamps: true
    }
);

UserSchema.pre("save", async function (next) {
    try {
        if (!this.isModified('password')) return next();
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        this.password = hashedPassword
    } catch (error) {
        next(error)
    }
})

UserSchema.index({ email: 1 });




module.exports = mongoose.model("User", UserSchema);