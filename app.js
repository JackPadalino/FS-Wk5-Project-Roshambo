const express = require('express');
const methodOverride = require('method-override');
const gameRouter = require('./routes/game');
const playerRouter = require('./routes/player');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use('/player',playerRouter);
app.use('/game',gameRouter);

app.listen(PORT,()=>{
    console.log(`Connected to https://localhost:${PORT}...`)
});