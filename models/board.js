  
const mongoose  = require('mongoose');
const Schema = mongoose.Schema;


const Boards = new Schema({
    title: {
        type : String,
        required : true
    },
    contents:{
        type: String,
        required : true
    },
    regTime:{
        type: Date,
        default: Date.now
    },
},{
    versionKey: false 
}
);

Boards.statics.create = function(title, contents) {
    const board = new this({
        title,
        contents
    })
    return board.save()
}

Boards.statics.delete = function(id) {
   Boards.deleteOne({_id:id});
}
module.exports = mongoose.model('Boards', Boards)