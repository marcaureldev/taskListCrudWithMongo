const express = require('express');
const router = express.Router();
const Task = require("../models/Task");

// Créer une tâche
router.post('/', async (req, res) => {
    try {
        const service = new Task(req.body);
        await service.save();
        res.status(201).json(service);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// Lire toutes les tâches
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Lire tous les tâches
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.createdAt);
    res.json(task);
});

// Mettre à jour une tâche
router.put('/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.createdAt, req.body, { new: true });
    res.json(task);
});

// Supprimer une tâche
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.createdAt);
    res.json({ message: "Tâche supprimé" });
});

module.exports = router;