const express=require('express');
const router = express.Router();

const {
    Player,Game
} = require('../db');

// importing game views
const{
    gameDetails
}=require('../views/game')

// test route
router.get('/:id',async(req,res,next)=>{
    try{
        const gameID = req.params.id;
        const game = await Game.findByPk(gameID);
        const player = await Player.findByPk(game.playerId);
        res.send(gameDetails(game,player));
    }catch(error){
        next('Oops! Something went wrong!');
    }; 
});

module.exports = router;