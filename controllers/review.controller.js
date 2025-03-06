const db = require("../models");
const config = require("../config/auth.config");
const Review = db.review;


exports.addReview = (req, res) => {
    Review.create(
        req.body
    ).then(() => {
        res.send({ message: "Review was succesfully added" });
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};


exports.getReview = (req, res) => {
    Review.findAll().then(review => {
        res.status(200).json(
            review
        )
    });

}

exports.changeReview = (req, res) => {
    Review.update(
        req.body, {
            where: {
                id: req.params.id
            }
        }).then(() => {
        res.send({ message: "Review was succesfully changed" });
    })

    .catch(err => {
        res.status(500).send({ message: err.message });
    });
};


exports.deleteReview = (req, res) => {
    console.log("Trying to delete:", req.params.id);

    Review.destroy({
            where: {
                id: req.params.id
            },
        })
        .then(deletedCount => {
            if (deletedCount === 0) {
                return res.status(404).send({ message: "Review not found" });
            }
            res.send({ message: "Review was successfully deleted by id" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};