module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define("teams", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
    });

    return Team;
};