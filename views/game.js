const html=require('html-template-tag');

function game(players){
    return html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <title>Roshambo</title>
</head>
<body>
    <div id='playersList'>
    <h1>Roshambo</h1>
    <form method="POST" action="/game">
        <label for="player">Player</label>
        <select id="select" name="playerId">
            ${players.map((player) =>
                `
                <option value="${player.id}">${player.username}</option>
                `
            )}
        </select>
        <label for="roshambo">Choice</label>
        <select id="select" name="choice">
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
        </select>
        <button type="submit">Submit</button>
    </form>
    </div>
</body>
</html>
`;
};

function gameDetails(game,player){
    return html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <title>Roshambo</title>
</head>
<body>
    <div id='playersList'>
    <h1>Game details</h1>
    <p>In a battle between <b>Computer</b> and <b>${player.username}</b> the winner is...<b>${game.result}!</b></p>
    </div>
</body>
</html>
`;
};

module.exports = {
    game:game,
    gameDetails:gameDetails
};