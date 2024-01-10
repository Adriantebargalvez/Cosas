const express = require('express');
const movieCtrl = require('../movie.controller');
const router = express.Router();

router.get('/paged/:page/:size', movieCtrl.getMovies);
router.get('/movie/:id', movieCtrl.getMovie);
router.post('/', movieCtrl.addMovie);
router.patch('/:id', movieCtrl.updateMovie);
router.delete('/:id', movieCtrl.deleteMovie);
router.get('/categoria',movieCtrl.getCategoria);
router.get('/juguetesByName/:name',movieCtrl.getByName);

module.exports = router;