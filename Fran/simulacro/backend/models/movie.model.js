const mongoose = require('mongoose');
const{Schema} = mongoose;

const movieSchema = new Schema ({
    title:{type:String, require:true},
    year:{type:Number, require:true},
    director:{type:String, require:true},
    plot:{type:String, require:true},
    poster:{type:String, require:true},
    genres:[{type:String, require:true, default: null}],
    imdb:{
        rating:{type:Number, required:true},
        votes:{type:Number, required:true}
    }
});
module.exports = mongoose.model('Movies',movieSchema,'movies2023');