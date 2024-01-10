const MovieModel = require('../models/movie.movel');
const movieCtrl={};

movieCtrl.addMovie = async (req, res) =>{
    const myMovie = new MovieModel(req.body);
    await myMovie.save()
        .then(()=>{
           res.status(201).json({status:'Juguete Inserted Successfully'})
            })
        .catch(err => res.send(err.message))
}
movieCtrl.getMovies = async (req,res) => {
    const  pageSize = req.params.size;
    const skip = (req.params.page -1)*pageSize;
    const movies = await MovieModel.find().limit(pageSize).skip(skip)
        .then((data) => res.json(data))
        .catch((err) => console.error(err))
}
movieCtrl.getMovie = async (req, res)=>{
    const movie = await MovieModel.findById(req.params.id)
        .then((data) =>{
            if(data!=null) res.json(data)
            else res.status(404).json({status:'Movies does not exist'})
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
            else res.status(404).json({status: 'Movies does not exit'})
        })
        .catch(err => res.send(err.message))
}
movieCtrl.deleteMovie = async (req, res) => {
    await MovieModel.findByIdAndDelete(req.params.id)
        .then((data) => {
          if(data!=null) res.json({status:'Movies Succsessfully Delete'})
            else res.status(404).json({status: 'Movies does not exist'})
        })
        .catch(err => res.send(err.message))
}
movieCtrl.getCategoria = async  (req,res) =>{
    await MovieModel.find().distinct('categoria')
        .then((data) =>res.json(data))
        .catch((err) => res.send(err.message))
}
movieCtrl.getByName = async (req, res)=>{
    const movie = await MovieModel.find({title: {$regex:req.params.name}})
        .then((data) =>{
            if(data!=null) res.json(data)
            else res.json({status:'Movies does not exist'})
        })
        .catch(err => console.error(err));
}


module.exports = movieCtrl;