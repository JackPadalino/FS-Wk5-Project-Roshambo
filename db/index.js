const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/roshambo');


const Player = db.define('player',{
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    being:{
        type:Sequelize.STRING,
        allNull:false
    }
});

const Game = db.define('game',{
    player1Id: {
        type: Sequelize.INTEGER,
        references: {
          model: Player,
          key: 'id'
        }
      },
    player2Id: {
        type: Sequelize.INTEGER,
        references: {
            model: Player,
            key: 'id'
        }
    },
    winner:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

Game.hasMany(Player);
Player.belongsTo(Game);

module.exports = {
    db,
    Game,
    Player,
    PlayerGame
};