const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/team.controller");


module.exports = function(app) {


    app.post("/api/team", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.addTeam);
    app.put("/api/team/:id", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.changeTeam);
    app.delete("/api/team/:id", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], controller.deleteTeam);
    app.get("/api/team", controller.getTeam);




};