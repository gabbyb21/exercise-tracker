var express = require('express');
var router = express.Router();

const exercisesCtrl = require('../controllers/exercises');

// /exercises

router.get('/', exercisesCtrl.index);

router.get('/new', exercisesCtrl.new);

router.post('/', exercisesCtrl.create);

router.get('/:id', exercisesCtrl.show);




module.exports = router;
