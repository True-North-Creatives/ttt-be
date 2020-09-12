/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const {validationResult} = require('express-validator');

const Exercises = require('../models/Exercises');

module.exports = createExercise = async(req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty())return res.status(400).json({errors: errors.array()});
    const {URL,Title,MainMuscleGroup,Type,Equipment,Difficulty,
        HowToPerformExercise} = req.body;
    
    let {OtherMuscleGroups,Mechanics,DetailedMuscleGroup} = req.body;

        try {
            let exrecise = await Exercises.findOne({Title});
            if(exrecise) return res.status(400).json({msg: 'exercise already exists'});

            if(OtherMuscleGroups.length === 0 || OtherMuscleGroups === undefined || OtherMuscleGroups === null)OtherMuscleGroups = "N/A";
            if(Mechanics.length === 0 || Mechanics === undefined || Mechanics === null) Mechanics = "N/A";
            if(DetailedMuscleGroup.length === 0 || DetailedMuscleGroup === undefined || DetailedMuscleGroup === null) DetailedMuscleGroup = "N/A";
            
            exrecise = new Exercises({
                URL,Title,Type,MainMuscleGroup,Equipment,Difficulty,HowToPerformExercise,OtherMuscleGroups,Mechanics,DetailedMuscleGroup
            });
            await exrecise.save();
            res.json(exrecise);
            
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error')
        }
        
}

module.exports = updateExercise = async(req,res) =>{

    const errors = validationResult(req);
    if(!errors.isEmpty())return res.status(400).json({errors: errors.array()});
    const {URL,Title,MainMuscleGroup,Type,Equipment,Difficulty,
        HowToPerformExercise} = req.body;
    
    let {OtherMuscleGroups,Mechanics,DetailedMuscleGroup} = req.body;
    try {
        const exercise = await Exercises.findById(req.params.id);

        if(!exercise || exercise === {}) res.status(400).json({msg: 'exercise does not exist'});

        if(OtherMuscleGroups.length === 0 || OtherMuscleGroups === undefined || OtherMuscleGroups === null)OtherMuscleGroups = "N/A";
        if(Mechanics.length === 0 || Mechanics === undefined || Mechanics === null) Mechanics = "N/A";
        if(DetailedMuscleGroup.length === 0 || DetailedMuscleGroup === undefined || DetailedMuscleGroup === null) DetailedMuscleGroup = "N/A";

        exercise.URL = URL;
        exercise.Title = Title;
        exercise.MainMuscleGroup = MainMuscleGroup;
        exercise.Type = Type;
        exercise.Equipment = Equipment;
        exercise.Difficulty = Difficulty;
        exercise.DetailedMuscleGroup = DetailedMuscleGroup;
        exercise.HowToPerformExercise = HowToPerformExercise;
        exercise.Mechanics = Mechanics;
        exercise.OtherMuscleGroups = OtherMuscleGroups;

        await exercise.save();
        res.json(exercise);

    } catch (err) {
        console.log(err.message);
            res.status(500).send('Server Error')
    }

}

module.exports = getAllExercises = async(req,res) =>{
    try {
        const exercises = await Exercises.find().select('Title MainMuscleGroup OtherMuscleGroups Type Equipment Difficulty');
        res.json(exercises);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}

module.exports = deleteExercise = async (req,res) =>{
    try {
        await Exercises.findByIdAndRemove(req.params.id);
        res.json({msg: 'Exercise removed'});
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
}
