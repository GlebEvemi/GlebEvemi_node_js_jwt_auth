const db = require("../models");
const config = require("../config/auth.config");
const Game = db.game;


exports.addGame = (req, res) => {
    Game.create(
        req.body
    ).then(() => {
        res.send({ message: "Game was succesfully added" });
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};


exports.getGame = (req, res) => {
    Game.findAll().then(game => {
        res.status(200).json(
            game
        )
    });

}

exports.changeGame = (req, res) => {
    Game.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(() => {
        res.send({ message: "Game was succesfully changed" });
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};


exports.deleteGame = (req, res) => {
    console.log("Trying to delete:", req.params.id);

    Game.destroy({
            where: {
                id: req.params.id
            },
        })
        .then(deletedCount => {
            if (deletedCount === 0) {
                return res.status(404).send({ message: "Game not found" });
            }
            res.send({ message: "Game was successfully deleted by id" });
        })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};