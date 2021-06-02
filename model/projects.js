var mongoose = require('mongoose')
const Schema = mongoose.Schema

var blobSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    jobsdone: String,
    start: Date,
    end: Date,
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    leader: { type: Schema.Types.ObjectId, ref: 'User' },
    isArchived: Boolean
});
mongoose.model('Project', blobSchema);
