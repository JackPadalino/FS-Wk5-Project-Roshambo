const html=require('html-template-tag');

function listAllPlayers(players){
    return html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/style.css"/>
    <title>Roshambo</title>
</head>
<body>
    <div id='playersList'>
        <h1>Players</h1>
        ${players.map(player=>
            `<p><a href="/player/${player.id}">${player.username}</a></p>`
        )}
    </div>
</body>
</html>
`;
};

function playerDetails(player,results){
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
    <div id='playerDetails'>
        <h1>${player.username}</h1>
        <p><b>Games: </b>${results.games} <b>Wins: </b>${results.wins} <b>Losses: </b>${results.losses} <b>Ties: </b>${results.ties}</p>
        <form method="POST" action="/player/${player.id}?_method=PUT">
            <label for="username">New username</label>
            <input type="text" name="username" />
            <button type="submit">Submit</button>
        </form>
    </div>
</body>
</html>
`;
};

module.exports = {
    listAllPlayers:listAllPlayers,
    playerDetails:playerDetails
};