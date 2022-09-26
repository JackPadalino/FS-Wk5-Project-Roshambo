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
        next(error);
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
        res.send(playerDetails(player,games));
    }catch(error){
        next(error);
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
        next(error);
    };
});

module.exports = router;