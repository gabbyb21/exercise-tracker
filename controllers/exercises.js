const Exercise = require('../models/exercise');

module.exports = {
  index,
  new: newExercise,
  create,
  show
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