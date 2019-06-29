const mongoose = require('../database/bdMongo');

const UserSchema = mongoose.Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('User', UserSchema);