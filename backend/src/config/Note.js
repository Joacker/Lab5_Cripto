const { Schema,model } = require('mongoose');

const NoteSchema = new Schema({
    password:{
        type:String,
        required:true
    },
    ip:{
        type:String,
        required:true
    },
    SO:{
        type:String,
        required:true
    }
});

module.exports = model('Note',NoteSchema);