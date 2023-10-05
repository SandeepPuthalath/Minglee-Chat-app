const mongoose = require("mongoose")


const chatSchema = mongoose.Schema({
    chatName: { type: String, trim: true },
    isGroupCht: { type: Boolean, default: false },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    latestMessages: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'message'
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
)


const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;

