const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    taskName: String,
    taskDate: String,
    taskUrgency: Number,
    taskCompleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('task', taskSchema);