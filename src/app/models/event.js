const mongoose = require('../database/bdMongo');

const EventSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    dateEvent: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Event', EventSchema);