const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/review.controller");


module.exports = function(app) {


    app.post("/api/review", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.addReview);
    app.put("/api/review/:id", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.changeReview);
    app.delete("/api/review/:id", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.deleteReview);
    app.get("/api/review", controller.getReview);


};