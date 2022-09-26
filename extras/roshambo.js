function pickThrow(){
    const random = Math.floor(Math.random() * 3);
    if(random===0) return 'rock';
    else if(random===1) return 'paper';
    else return 'scissors';
};

function pickWinner(humanThrow,computerThrow){
    if(humanThrow===computerThrow) return 'tie';
    if(humanThrow==='rock' && computerThrow==='paper') return 'computer';
    if(humanThrow==='rock' && computerThrow==='scissors') return 'human';
    if(humanThrow==='paper' && computerThrow==='rock') return 'human';
    if(humanThrow==='paper' && computerThrow==='scissors') return 'computer';
    if(humanThrow==='scissors' && computerThrow==='rock') return 'computer';
    if(humanThrow==='scissors' && computerThrow==='paper') return 'human';
};

module.exports = {
    pickThrow:pickThrow,
    pickWinner:pickWinner
};