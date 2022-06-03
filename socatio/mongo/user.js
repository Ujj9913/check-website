const mongoose = require('mongoose');
var conn = require('./db')

var msgSchema = new mongoose.Schema({

    message: { type: String, required: true }
})


let Msg = conn.model('message1', msgSchema);

module.exports = Msg;
