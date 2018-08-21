let hands = ['rock', 'paper', 'scissors'];

let getHand = () => {
    return hands[(parseInt(Math.random()*10)%3)];
}

let player1 = {
    name : 'John',
    getHand : getHand
}

let player2 = {
    name : 'Sam',
    getHand : getHand
}

let win = {
    rock : "scissors",
    scissors : "paper",
    paper : "rock"
};

let playRound = (player1, player2) => {
    let p1h = player1.getHand();
    let p2h = player2.getHand();

    let r = win[rock];

    if ( p1 == "rock" && )

   
}