const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = model("Usuario", userSchema);