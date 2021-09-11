const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    name: {
        type = String,
        required = true
    },
    lastName: {
        type = String,
        required = true
    },
    profession: {
        type =String,
        required = false
    },
    age: {
        type  = Number,
        required = false
    },
})
module.exports = mongoose.model("users", userSchema)
