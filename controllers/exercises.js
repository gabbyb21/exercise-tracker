const Exercise = require('../models/exercise');

module.exports = {
  index,
  new: newExercise,
  create,
  show,
  edit, 
  update,
  delete: deleteExercise
}


function newExercise(req, res) {
  res.render('exercises/new', {errorMsg: ''})
}

async function create(req, res) {
  try {
    await Exercise.create(req.body);
    res.redirect('/exercises');
  } catch (err) {
    res.render('exercises/new')
  }
}

async function index(req, res) {
  const allExercises = await Exercise.find({})
  res.render('exercises/index', {
    exercises: allExercises
  });
}

async function show(req, res) {
  const exercise = await Exercise.findById(req.params.id)
  res.render('exercises/show', {
    exercise
  })
}

async function edit(req, res) {
  const exercise = await Exercise.findById(req.params.id)
  res.render('exercises/edit', {
    exercise
  });
}

async function update(req, res) {
  try {
    const updatedExercise = {
      name: req.body.name,
      video: req.body.video,
      sets: req.body.sets,
      reps: req.body.reps,
      weight: req.body.weight
    };
    await Exercise.findByIdAndUpdate(req.params.id, updatedExercise);
      const exercises = await Exercise.find()
      res.render('exercises/index', {exercises})
  } catch(err) {
    console.log(err)
  }
}

async function deleteExercise(req, res) {
  try {
    await Exercise.findByIdAndRemove(req.params.id)
    res.redirect('/exercises');
  } catch(err) {
    console.log(err)
  }
}