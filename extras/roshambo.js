function pickThrow(){
    const random = Math.floor(Math.random() * 3);
    if(random===0) return 'rock';
    else if(random===1) return 'paper';
    else return 'scissors';
};

function pickWinner(humanThrow,computerThrow){
    if(humanThrow===computerThrow) return 'tie';
    if(humanThrow==='rock'){
        if(computerThrow==='paper') return 'computer';
        if(computerThrow==='scissors') return 'human';
    }else if(humanThrow==='paper'){
        if(computerThrow==='rock') return 'human';
        if(computerThrow==='scissors') return 'computer';
    }else{
        if(computerThrow==='rock') return 'computer';
        if(computerThrow==='paper') return 'human';
    };
};

module.exports = {
    pickThrow:pickThrow,
    pickWinner:pickWinner
};