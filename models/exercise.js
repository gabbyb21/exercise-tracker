const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: {type: String, required: true},
  sets: Number, 
  reps: Number, 
  weight: String,
  video: String
});

module.exports = mongoose.model('Exercise', exerciseSchema);