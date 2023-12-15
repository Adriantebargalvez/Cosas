const express = require('express');
const router = express.Router();
const movieCtrl = require('../movie.controller');

router.post('/', movieCtrl.addMovie);
router.get('/',movieCtrl.getMovies);
router.get('/movie/:id', movieCtrl.getMovie);
router.get('/:id', movieCtrl.updateMovie);


module.exports = router;