const express = require('express');
const router = express.Router();
const Task = require("../models/Task");

// Créer une tâche
router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// Lire toutes les tâches
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json({data: tasks});
});

// Lire une tâche spécifique
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

// Mettre à jour une tâche
router.put('/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
});

// Supprimer une tâche
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Tâche supprimé" });
});

module.exports = router;