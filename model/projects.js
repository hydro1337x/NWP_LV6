var mongoose = require('mongoose');
var blobSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    jobsdone: String,
    start: Date,
    end: Date,
    members: [String],
    leader: { type: Schema.Types.ObjectId, ref: 'User' },
    isArchived: Boolean
});
mongoose.model('Project', blobSchema);
