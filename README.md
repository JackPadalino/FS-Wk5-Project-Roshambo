## Fullstack Junior Phase Week 5 Project: Roshambo
- Using Sequelize to build db schema and make db queires
- Using Express router to handle routes

#### Criteria
- [ ] Create a table using Sequelize, including:
    - Games
        - Result: A string that's either "computer", "human", or "tie"
        - Every game has one human player
    - Player
        - username: A string representing a players name / username
        - Every player has many games
- [ ] Create a seed for the above table
- [ ] Create an express server, including the routes:
    - GET /game/:gameId
        - Returns the winner for the game matching the given ID as well as the player for the game
    - GET /player
        - Returns a list of all players
    - GET /player/:playerId
        - Returns a specific player, along with their games played
    - PUT /player/:playerId
        - Body:
    - username: string representing a username
    - Updates a players name to be the given name
    - HINT: use Postman to test this out
#### EXTRA CREDIT: POST /game
- Body:
    - symbol: A players chosen move - either "rock", "paper", or "scissors"
    - playerId: the ID of the player playing the game
- Does the following:
    - Pick a random symbol using javascript for the computer
    - Compare randomly selected move to the users move
    - Scissors beats paper
    - Paper beats Rock
    - Rock beats Scissors
    - Create a game with the resulting winner
    - Send the result to the client

#### Next steps
- Experiment with Postman