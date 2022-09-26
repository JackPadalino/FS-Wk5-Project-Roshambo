const express=require('express');
const router = express.Router();

const {
    Player,Game
} = require('../db');

// importing player views
const{
    listAllPlayers,playerDetails
} = require('../views/player');

// test route
router.get('/',async(req,res,next)=>{
    try{
        const players = await Player.findAll();
        res.send(listAllPlayers(players));
    }catch(error){
        next('Oops! Something went wrong!');
    };
});

router.get('/:id',async(req,res,next)=>{
    try{
        const playerId = req.params.id;
        const player = await Player.findByPk(playerId);
        const games = await Game.findAll({
            where:{
                playerId:playerId
            }
        });
        const wins = await Game.findAll({
            where:{
                playerId:player.id,
                result:'human'
            }
        });
        const losses = await Game.findAll({
            where:{
                playerId:player.id,
                result:'computer'
            }
        });
        const results = {wins:wins.length,losses:losses.length};
        res.send(playerDetails(player,games,results));
    }catch(error){
        next('Oops! Something went wrong!');
    };
});

router.put('/:id',async(req,res,next)=>{
    try{
        const playerId = req.params.id;
        const newUsername = req.body.username;
        const player = await Player.findByPk(playerId);
        await player.update({
            username:newUsername
        });
        res.redirect(`/player/${player.id}`)
    }catch(error){
        next('Oops! Something went wrong!');
    };
});

module.exports = router;