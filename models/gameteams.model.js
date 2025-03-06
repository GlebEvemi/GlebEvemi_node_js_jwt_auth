const { FOREIGNKEYS } = require("sequelize/lib/query-types");

module.exports = (sequelize, Sequelize) => {
    const GameTeams = sequelize.define("GameTeams", {
        gameId: {
            type: Sequelize.INTEGER,
            references: {
                model: "game",
                key: "id"
            }
        },
        teamId: {
            type: Sequelize.INTEGER,
            references: {
                model: "team",
                key: "id"
            }
        }
    });
    return GameTeams;
};