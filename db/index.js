const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/roshambo');


const Game = db.define('game',{
    result:{
        type:Sequelize.ENUM(['human','computer','tie']),
        allowNull:false
    }
});

const Player = db.define('player',{
    username:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    },
});

Player.hasMany(Game);
Game.belongsTo(Player);

module.exports = {
    db,
    Game,
    Player
};