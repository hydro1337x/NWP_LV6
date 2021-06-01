var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String
});

mongoose.model('User', blobSchema);
