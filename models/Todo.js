const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    todo: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        required: true
    }
});

module.exports = Todo = mongoose.model('todo', TodoSchema);