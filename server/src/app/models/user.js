const mongoose = require('../database/bdMongo');

const UserSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true }
})

module.exports = mongoose.model('User', UserSchema);