const {
    db,Player,Game
}=require('.');

const seedDB=async()=>{
    // clearing the DB before seeding
    await db.sync({force:true,logging:false});

    // creating Player instances
    const jack = await Player.create({
        username:'TheShuffler',
    });
    const jasmine = await Player.create({
        username:'ModernBoheme',
    });
    const frank = await Player.create({
        username:'GoMetz',
    });

    // creating Game instances
    const games = [
		{result:'computer',playerId:jack.id},
		{result:'human',playerId:jasmine.id},
		{result:'tie',playerId: frank.id},
		{result:'computer',playerId: jack.id},
		{result:'human',playerId:jasmine.id},
	];
    
    games.forEach(async(game)=>{
        return await Game.create(game)
    });
};

seedDB();