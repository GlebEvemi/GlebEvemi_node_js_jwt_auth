const { FOREIGNKEYS } = require("sequelize/lib/query-types");

module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("reviews", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        gameId: {
            FOREIGNKEYS: true,
            type: Sequelize.INTEGER
        }
    });

    return Review;
};