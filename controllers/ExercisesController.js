const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');

router.get('/exercises', async (req, res, next) => {
    try {
        const exercises = await Exercise.find();
        res.status(200).json(exercises);
    } catch (error) {
        res.status(400);
        next(error)
    }
});

router.post('/exercises', async (req, res, next) => {
    const exercise = new Exercise(req.body)
    try {
        const savedExercise = await exercise.save();
        res.status(201).json(savedExercise);
    } catch (error) {
        res.status(400);
        next(error)
    }
});

router.get('/exercises/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const exercise = await Exercise.findById(id);
        res.status(200).json(exercise);
    } catch (error) {
        res.status(400);
        next(error);
    }
});

module.exports = router;