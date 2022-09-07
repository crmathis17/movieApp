const Movies = require("../models/movie.model")

const addMovie = (req, res) => {
    Movies.create(req.body)
    .then((newMovie) => {
        res.json({newMovie});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const allMovies = (req, res) => {
    Movies.find()
    .then((listMovies) => {
        res.json(listMovies);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const oneMovie = (req, res) => {
    Movies.findOne({_id: req.params.id})
    .then((singleMovie) =>{
        res.json(singleMovie);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const editMovie = (req, res) => {
    Movies.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,
    })
    .then((editedMovie) => {
        res.json({editedMovie});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
};

const removeMovie = (req, res) => {
    Movies.deleteOne({_id: req.params.id})
    .then((deleteMovie) => {
        res.json({deleteMovie});
    })
    .catch((err) => {
        res.status(400).json({err});
    });
}


module.exports = {addMovie, allMovies, oneMovie, editMovie, removeMovie};