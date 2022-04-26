var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node-mongodb', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;

var userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email:String
});

var userModel=mongoose.model('users',userSchema);

module.exports = userModel;