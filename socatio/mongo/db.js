const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/socket', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   

}).then(con => {
    console.log("connected database");

}).catch(err => {
    console.log("error", err);
})
module.exports = mongoose;