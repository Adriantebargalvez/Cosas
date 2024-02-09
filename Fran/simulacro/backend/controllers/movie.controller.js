const MovieModel = require('../models/movie.model');
const movieCtrl = {};
//AÑADIR O CREAR
movieCtrl.addMovie = async (req,res) =>{
    const myMovie = new MovieModel(req.body);
await myMovie.save()
    .then(() => {
        res.json({status: 'Movies Inserted Successfully'})
    })
    .catch(err => res.send(err.message))

}
//LISTADO TODAS
movieCtrl.getMovies = async (req, res) => {
    const movies = await MovieModel.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err))
}
//LISTADO ID
movieCtrl.getMovie = async (req,res) => {
    const movie = await MovieModel.findById(req.params.id)
        .then((data) => {
            if (data!=null) res.json(data)
            else res.json({status: 'Movie does not exit'})
        })
        .catch(err => console.error(err));
}
//BUSCAR POR NOMBRE
movieCtrl.getByName = async (req,res) => {
    const movie = await MovieModel.find({title: {$regex:req.params.name}})
        .then((data) => {
            if (data!=null) res.json(data)
            else res.json({status: 'Movie does not exit'})
        })
        .catch(err => console.error(err));
}
//ACTUALIZAR
movieCtrl.updateMovie = async (req, res) =>{
    const movie = req.body;
    await MovieModel.findByIdAndUpdate(
        req.params.id,
        {$set: movie},
        {new: true}
    )
        .then((data)=>{
            if(data!=null) res.json({status:'Movie successfully Updated',data})
            else res.json({status: 'Movies does not exit'})
        })
        .catch(err => res.send(err.message));


}
//DELETE
movieCtrl.deleteMovie = async (req, res) => {
    await MovieModel.findByIdAndDelete(req.params.id)
        .then((data)=>{
        if(data!=null) res.json({status:'Movies Succsessfully Deleted'})
        else res.json({status:'Movie does not exist'})
    })
        .catch(err => res.send(err.message));

}
//GENEROS EXISTENTES
movieCtrl.getGenres = async (req, res) =>{
    await MovieModel.find().distinct('genres')
        .then((data) => res.json(data))
        .catch((err) => res.send(err.message))
}
module.exports= movieCtrl