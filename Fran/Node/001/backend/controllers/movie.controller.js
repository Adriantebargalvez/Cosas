const MovieModel = require('../models/movie.movel');
const movieCtrl={};

movieCtrl.addMovie = async (req, res) =>{
    const myMovie = new MovieModel(req.body);
    await myMovie.save()
        .then(()=>{
           res.json({status:'Movies Inserted Successfully'})
            })
        .catch(err => res.send(err.message))
}
movieCtrl.getMovies = async (req,res) => {
    const movies = await MovieModel.find()
        .then((data) => res.json(data))
        .catch((err) => console.error(err))
}
movieCtrl.getMovie = async (req, res)=>{
    const movie = await MovieModel.findById(req.params.id)
        .then((data) =>{
            if(data!=null) res.json(data)
            else res.json({status:'Movies does not exist'})
        })
        .catch(err => console.error(err));
}
movieCtrl.updateMovie = async (req,res) => {
    const movie = req.body;
    await MovieModel.findByIdAndUpdate(
        req.params.id,
        {$set: movie},
        {new: true}
    )
        .then((data) =>{
            if(data!=null) res.json({status: 'Movies Successfully Update',data})
            else res.json({status: 'Movies does not exit'})
        })
        .catch(err => res.send(err.message))
}
movieCtrl.deleteMovie = async (req, res) => {
    await MovieModel.findByIdAndDelete(req.params.id)
        .then((data) => {
          if(data!=null) res.json({status:'Movies Succsessfully Delete'})
            else res.json({status: 'Movies does not exist'})
        })
        .catch(err => res.send(err.message))
}
/*movieCtrl.getCategoria = async  (req,res) =>{
    await MovieModel.find().distinct('genres')
        .then((data) =>res.json(data))
        .catch((err) => res.send(err.message))
}*/
module.exports = movieCtrl;