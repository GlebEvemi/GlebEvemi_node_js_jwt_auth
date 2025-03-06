const express = require("express");
const cors = require("cors");
const db = require("./models");
const Role = db.role;
const Game = db.game;
const Team = db.team;
const Genre = db.genre;
const Review = db.review;
const GameGenres = db.gamegenres;
const GameTeams = db.gameteams;

const app = express();

const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


app.use(express.json());


app.use(express.urlencoded({ extended: true }));

async function resetDatabase() {
    await db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await db.sequelize.sync({ force: true });
    await db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");

    console.log("Database reset and synced!");
    initial();
    seedDatabase();
}

resetDatabase();


app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});


require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/game.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}

//////////////////////////////////////////////////////////////////////////////////////
function seedDatabase() {
    Game.bulkCreate([
        { id: 1, title: "Cyber Adventure", release_date: "2022-11-15", rating: 8.5, times_listed: 1200, number_of_reviews: 350, plays: 5000, playing: 300, backlogs: 600, wishlist: 1500, summary: "Futuristic RPG with immersive storytelling" },
        { id: 2, title: "Fantasy Quest", release_date: "2021-07-23", rating: 9.0, times_listed: 950, number_of_reviews: 420, plays: 6700, playing: 450, backlogs: 800, wishlist: 1200, summary: "Explore a magical realm in this epic adventure" },
        { id: 3, title: "Space Odyssey", release_date: "2023-03-10", rating: 8.2, times_listed: 890, number_of_reviews: 320, plays: 4200, playing: 280, backlogs: 700, wishlist: 1300, summary: "Sci-fi exploration game with deep lore" },
        { id: 4, title: "Zombie Apocalypse", release_date: "2020-10-31", rating: 7.8, times_listed: 1500, number_of_reviews: 500, plays: 8000, playing: 600, backlogs: 900, wishlist: 1400, summary: "Survive the undead horde in this action-packed thriller" },
        { id: 5, title: "Knight’s Honor", release_date: "2019-06-20", rating: 9.1, times_listed: 1100, number_of_reviews: 470, plays: 7000, playing: 550, backlogs: 1000, wishlist: 1600, summary: "A medieval RPG with intense sword combat" },
        { id: 6, title: "Mecha Wars", release_date: "2023-01-15", rating: 8.6, times_listed: 980, number_of_reviews: 400, plays: 5300, playing: 330, backlogs: 650, wishlist: 1200, summary: "Giant robot battles in a futuristic world" },
        { id: 7, title: "Pixel Dungeon", release_date: "2021-09-12", rating: 7.5, times_listed: 870, number_of_reviews: 310, plays: 4100, playing: 290, backlogs: 800, wishlist: 1100, summary: "A roguelike dungeon crawler with pixel-art charm" },
        { id: 8, title: "Shadow Assassin", release_date: "2022-04-25", rating: 8.9, times_listed: 1050, number_of_reviews: 450, plays: 6200, playing: 420, backlogs: 900, wishlist: 1500, summary: "Stealth-based action game set in a feudal era" },
        { id: 9, title: "Alien Invasion", release_date: "2020-08-19", rating: 7.9, times_listed: 990, number_of_reviews: 350, plays: 4900, playing: 310, backlogs: 770, wishlist: 1250, summary: "Defend Earth from extraterrestrial threats" },
        { id: 10, title: "Cybernetic Future", release_date: "2023-05-01", rating: 8.4, times_listed: 1070, number_of_reviews: 390, plays: 5800, playing: 380, backlogs: 920, wishlist: 1320, summary: "An open-world cyberpunk RPG with hacking mechanics" },
        { id: 11, title: "Fantasy Kingdoms", release_date: "2018-12-05", rating: 9.3, times_listed: 1250, number_of_reviews: 540, plays: 8100, playing: 640, backlogs: 1300, wishlist: 1750, summary: "Strategic empire-building in a magical world" },
        { id: 12, title: "Warrior’s Path", release_date: "2021-06-14", rating: 8.7, times_listed: 1020, number_of_reviews: 410, plays: 5600, playing: 390, backlogs: 880, wishlist: 1400, summary: "A brutal action RPG with dynamic combat" },
        { id: 13, title: "Deep Space Expedition", release_date: "2022-10-22", rating: 8.1, times_listed: 970, number_of_reviews: 370, plays: 4600, playing: 310, backlogs: 740, wishlist: 1180, summary: "Exploration and survival in deep space" },
        { id: 14, title: "Lost in Time", release_date: "2020-02-18", rating: 8.2, times_listed: 910, number_of_reviews: 360, plays: 4300, playing: 300, backlogs: 710, wishlist: 1150, summary: "Time-traveling adventure with mind-bending puzzles" },
        { id: 15, title: "Dark Sorcery", release_date: "2021-11-09", rating: 9.0, times_listed: 1100, number_of_reviews: 500, plays: 7800, playing: 550, backlogs: 1200, wishlist: 1700, summary: "Master dark magic in a fantasy RPG" },
        { id: 16, title: "Battle Arena", release_date: "2017-08-30", rating: 7.6, times_listed: 870, number_of_reviews: 330, plays: 3900, playing: 270, backlogs: 680, wishlist: 1050, summary: "Multiplayer fighting game with diverse characters" },
        { id: 17, title: "Wasteland Survivors", release_date: "2019-04-22", rating: 8.3, times_listed: 920, number_of_reviews: 380, plays: 4400, playing: 320, backlogs: 750, wishlist: 1150, summary: "Survival game set in a post-apocalyptic world" },
        { id: 18, title: "Kingdom’s Fall", release_date: "2016-10-05", rating: 9.2, times_listed: 1300, number_of_reviews: 600, plays: 8900, playing: 700, backlogs: 1500, wishlist: 1900, summary: "A grand strategy game with medieval conquests" }
    ]);

    Genre.bulkCreate([
        { id: 1, name: "Action" },
        { id: 2, name: "RPG" },
        { id: 3, name: "Adventure" },
        { id: 4, name: "Strategy" },
        { id: 5, name: "Shooter" },
        { id: 6, name: "Music" },
        { id: 7, name: "Fighting" },
        { id: 8, name: "Arcade" },
        { id: 9, name: "Visual Novel" },
        { id: 10, name: "Tactical" },
        { id: 11, name: "Racing" },
    ]);

    Review.bulkCreate([
        { id: 1, name: "Amazing game with stunning graphics!", gameId: 1 },
        { id: 2, name: "Great mechanics, but the story is lacking.", gameId: 3 },
        { id: 3, name: "An absolute masterpiece!", gameId: 5 },
        { id: 4, name: "Could be better, but enjoyable nonetheless.", gameId: 4 },
        { id: 5, name: "Best game of the year!", gameId: 6 },
        { id: 6, name: "Mediocre at best, expected more.", gameId: 7 },
        { id: 7, name: "Incredible soundtrack and atmosphere!", gameId: 8 },
        { id: 8, name: "The gameplay is addictive and fun.", gameId: 12 },
        { id: 9, name: "A few bugs, but still worth playing.", gameId: 10 },
        { id: 10, name: "Multiplayer mode is amazing!", gameId: 9 },
        { id: 11, name: "Not as good as the previous installment.", gameId: 16 },
        { id: 12, name: "A solid experience, highly recommend!", gameId: 18 },
        { id: 13, name: "The controls feel a bit clunky.", gameId: 17 },
        { id: 14, name: "Engaging story with deep characters.", gameId: 14 },
        { id: 15, name: "Too short, but overall fantastic!", gameId: 13 }
    ]);

    Team.bulkCreate([
        { id: 1, name: "Epic Devs" },
        { id: 2, name: "Pixel Wizards" },
        { id: 3, name: "NextGen Studios" },
        { id: 4, name: "GameCraft Inc." },
        { id: 5, name: "Virtual Pioneers" },

    ]);

    GameGenres.bulkCreate([
        { gameId: 1, genreId: 1 },
        { gameId: 1, genreId: 2 },
        { gameId: 2, genreId: 2 },
        { gameId: 2, genreId: 3 },
        { gameId: 3, genreId: 3 }
    ]);

    GameTeams.bulkCreate([
        { gameId: 1, teamId: 1 },
        { gameId: 2, teamId: 2 },
        { gameId: 3, teamId: 1 }
    ]);

    console.log("Database seeded successfully!");
}


///////////////////////////////////////////////////////////////////////////////////