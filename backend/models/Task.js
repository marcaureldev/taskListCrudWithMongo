const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean, required: false },
    createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
