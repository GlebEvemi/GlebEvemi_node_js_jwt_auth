const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/games.controller");


module.exports = function(app) {


    app.post("/api/game", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.addGame);
    app.put("/api/game/:id", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.changeGame);
    app.delete("/api/game/:id", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.deleteGame);
    app.get("/api/game", controller.getGame);




};