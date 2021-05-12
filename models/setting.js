const mongoose  = require('mongoose');
const Schema = mongoose.Schema;


const Settings = new Schema({
    applyTab: {
        type : Boolean,
        required : true
    },
},{
    versionKey: false 
}
);

module.exports = mongoose.model('Settings', Settings)