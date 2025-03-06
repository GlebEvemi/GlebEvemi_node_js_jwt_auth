module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("games", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        release_date: {
            type: Sequelize.STRING
        },
        rating: {
            type: Sequelize.FLOAT
        },
        times_listed: {
            type: Sequelize.INTEGER,
        },
        number_of_reviews: {
            type: Sequelize.INTEGER
        },
        plays: {
            type: Sequelize.INTEGER
        },
        playing: {
            type: Sequelize.INTEGER
        },
        backlogs: {
            type: Sequelize.INTEGER
        },
        wishlist: {
            type: Sequelize.INTEGER
        },
        summary: {
            type: Sequelize.STRING
        },
    });

    return Game;
};