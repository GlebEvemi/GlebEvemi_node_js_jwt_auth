const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/genre.controller");


module.exports = function(app) {


    app.post("/api/genre", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.addGenre);
    app.put("/api/genre/:id", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.changeGenre);
    app.delete("/api/genre/:id", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.deleteGenre);
    app.get("/api/genre", controller.getGenre);




};