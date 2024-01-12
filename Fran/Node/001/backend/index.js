const express = require ('express');
const morgan = require ('morgan');
const cors  = require ('cors');
const app  = express();
const {mongoose} = require ('./database');
const {json} = require ("express");
const movieCtrl = require("./controllers/movie.controller");
// Settings
app.set ('port', process.env.PORT || 3000);
//Middleware
app.use (morgan('dev'));
app.use (cors ());
app.use (express.json());
//Routes

app.use ('/api/juguetes', require ('./routes/movie.route'));
//app.use('/:page/:size', movieCtrl.getMovies);
//app.use('/movie/:id', movieCtrl.getMovie);
app.use('/',(req, res) => res.send('API in /api/juguetes'));
//start the serve
app.listen(app.get('port'), () => {
    console.log('Server on port:',app.get('port'));
})