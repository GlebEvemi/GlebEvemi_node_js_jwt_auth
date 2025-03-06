const db = require("../models");
const config = require("../config/auth.config");
const Team = db.team;


exports.addTeam = (req, res) => {
    Team.create(
        req.body
    ).then(() => {
        res.send({ message: "Team was succesfully added" });
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};


exports.getTeam = (req, res) => {
    Team.findAll().then(team => {
        res.status(200).json(
            team
        )
    });

}

exports.changeTeam = (req, res) => {
    Team.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(() => {
        res.send({ message: "Team was succesfully changed" });
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};


exports.deleteTeam = (req, res) => {
    console.log("Trying to delete:", req.params.id);

    Team.destroy({
            where: {
                id: req.params.id
            },
        })
        .then(deletedCount => {
            if (deletedCount === 0) {
                return res.status(404).send({ message: "Team not found" });
            }
            res.send({ message: "Team was successfully deleted by id" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};