const db = require("../models");
const config = require("../config/auth.config");
const Genre = db.genre;


exports.addGenre = (req, res) => {
    Genre.create(
        req.body
    ).then(() => {
        res.send({ message: "Genre was succesfully added" });
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};


exports.getGenre = (req, res) => {
    Genre.findAll().then(genre => {
        res.status(200).json(
            genre
        )
    });

}

exports.changeGenre = (req, res) => {
    Genre.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(() => {
        res.send({ message: "Genre was succesfully changed" });
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};


exports.deleteGenre = (req, res) => {
    console.log("Trying to delete:", req.params.id);

    Genre.destroy({
            where: {
                id: req.params.id
            },
        })
        .then(deletedCount => {
            if (deletedCount === 0) {
                return res.status(404).send({ message: "Genre not found" });
            }
            res.send({ message: "Genre was successfully deleted by id" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};