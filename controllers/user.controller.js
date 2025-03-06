const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Review = db.review;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};


exports.userUpdate = (req, res) => {
    const userIdFromToken = parseInt(req.userId);
    const userIdFromParams = parseInt(req.params.id);
    console.log(userIdFromParams);
    console.log(userIdFromToken);
    if (userIdFromToken !== userIdFromParams) {
        return res.status(403).send({ message: "You can only edit your own profile!" });
    }
    User.update(
        req.body, {
            where: {
                id: userIdFromParams
            }
        }).then(() => {
        res.send({ message: "User was succesfully changed" });
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};


exports.addCommentToGame = (req, res) => {
    Review.create({
            id: req.body.id,
            name: req.body.name,
            gameId: req.params.gameid
        }).then(() => {
            res.send({ message: "Review was succesfully added" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};



exports.getAllUsers = (req, res) => {
    User.findAll({
        attributes: ["username", "email"]
    }).then(users => {
        res.status(200).json({
            users
        })
    });

}