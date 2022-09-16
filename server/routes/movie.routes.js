const movieController = require("../controllers/movie.controller");

module.exports = (app) => {
    app.post("/api/movies", movieController.addMovie);
    app.get("/api/movie", movieController.allMovies);
    app.get("/api/movie/:id", movieController.oneMovie);
    app.put("/api/edit/:id", movieController.editMovie);
    app.delete("/api/movie/:id", movieController.removeMovie);
};