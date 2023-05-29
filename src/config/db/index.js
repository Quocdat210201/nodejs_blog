const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/enducation_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connect Successfully!!!!!!!!!!!!!!!!");
    } catch (error) {
        console.log("Connect Failire!!!!!!");
    }
}

module.exports = { connect }