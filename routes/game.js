const express=require('express');
const router = express.Router();

const {
    Player,Game
} = require('../db');

// importing game views
const{
    game,gameDetails
}=require('../views/game')

const{
    pickThrow,pickWinner
} = require('../extras/roshambo');

router.get('/',async(req,res,next)=>{
    try{
        const players = await Player.findAll();
        const games = await Game.findAll({
            order:[['createdAt','DESC']],
            include:Player
        });
        res.send(game(players,games));
    }catch(error){
        next(error);
    };
});

router.get('/:id',async(req,res,next)=>{
    try{
        const gameId = req.params.id;
        const game = await Game.findByPk(gameId);
        const player = await Player.findByPk(game.playerId);
        res.send(gameDetails(game,player));
    }catch(error){
        next('Oops! Something went wrong!');
    }; 
});

router.post('/',async(req,res,next)=>{
    const playerId = req.body.playerId;
    const humanThrow = req.body.choice;
    const computerThrow = pickThrow();
    const winner = pickWinner(humanThrow,computerThrow);
    const newGame = await Game.create({
        result:winner,
        playerId:playerId
    });
    res.redirect(`/game`);
});

module.exports = router;