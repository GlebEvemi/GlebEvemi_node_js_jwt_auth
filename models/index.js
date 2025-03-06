const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.game = require("../models/game.model.js")(sequelize, Sequelize);
db.genre = require("../models/genre.model.js")(sequelize, Sequelize);
db.review = require("../models/review.model.js")(sequelize, Sequelize);
db.team = require("../models/team.model.js")(sequelize, Sequelize);
db.gamegenres = require("../models/gamegenres.model.js")(sequelize, Sequelize);
db.gameteams = require("../models/gameteams.model.js")(sequelize, Sequelize);


db.game.belongsToMany(db.genre, { through: db.gamegenres });
db.genre.belongsToMany(db.game, { through: db.gamegenres });

db.game.belongsToMany(db.team, { through: db.gameteams });
db.team.belongsToMany(db.game, { through: db.gameteams });




db.role.belongsToMany(db.user, {
    through: "user_roles"
});

db.user.belongsToMany(db.role, {
    through: "user_roles"
});

db.ROLES = ["user", "admin", "moderator"];


module.exports = db;