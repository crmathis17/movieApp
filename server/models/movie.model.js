const mongoose = require("mongoose");

const MovieListSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        require: [true, "Movie title is required!"],
        minLength: [2, "Title must be 2 characters minimum!"],
    },

    plot: {
        type: String,
        require: [true, "What is this movie about?"],
        minLenght: [5, "Plot must be 5 characters minimum!"],
    },

    service: {
        type: String,
        require: [true, "Where can I find this movie?"],
    },

    audience: {
        type: String,
        require: [true, "Can I watch without my S/O?"],
    },

    notes: {
        type: String,
        require: [false],
    },
},
{timestamps: {createdAt: true}}
);


module.exports = mongoose.model("Movies", MovieListSchema);