const { FOREIGNKEYS } = require("sequelize/lib/query-types");

module.exports = (sequelize, Sequelize) => {
    const GameGenres = sequelize.define("GameGenres", {
        gameId: {
            type: Sequelize.INTEGER,
            references: {
                model: "game",
                key: "id"
            }
        },
        genreId: {
            type: Sequelize.INTEGER,
            references: {
                model: "genre",
                key: "id"
            }
        }
    });
    return GameGenres;
};