const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntriesSchema = new Schema({
    entry: {
        type: Object,
        required: true
    },
});
module.exports = mongoose.model('MsgDb', EntriesSchema);