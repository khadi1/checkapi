const mongoose = require('mongoose');

const configDB = async () => {
    try {
        mongoose.connect(process.env.local);
        console.log("DB is successfully connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports = configDB