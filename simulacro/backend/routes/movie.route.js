const express = require('express');
const router = express.Router();
const movieCtrl=require('../controllers/movie.controller');

//AÑADIR
router.post('/',movieCtrl.addMovie);
//LISTADO DE TODAS
router.get('/',movieCtrl.getMovies);
//LISTADO POR ID
router.get('/movie/:id',movieCtrl.getMovie);
//ACTUALIZAR
router.patch('/:id',movieCtrl.updateMovie);
//DELETE
router.delete('/:id',movieCtrl.deleteMovie)
//VER GENEROS QUE EXISTEN
router.get('/genres',movieCtrl.getGenres);
//BUSCAR POR NOMBRE
router.get('/movieByName/:name',movieCtrl.getByName)
module.exports = router;