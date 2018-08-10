let logoutput = "";
let log = (msg) => {
    logoutput+=msg;
}

let hands = ["rock", "paper", "scissors"]
let wins = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
}

let getHand = () => {
    let h = parseInt(Math.random() * 10) % 3
    return hands[h]
}

let p1 = {
    name: "Player 1",
    getHand: getHand
}

let p2 = {
    name: "Player 2",
    getHand: getHand
}

let p3 = {
    name: "Player 3",
    getHand: getHand
}

let p4 = {
    name: "Player 4",
    getHand: getHand
}

let playRound = (p1, p2) => {
    let p1h = p1.getHand()
    let p2h = p2.getHand()
    let winsValue = wins[p1h]
    log(`${p1h} == ${p2h}`)

    if (p1h == p2h) {
        log("tie")
        return playRound(p1, p2)
    } else if (winsValue == p2h) {
        log(`${p1.name} wins`)
        return p1
    } else {
        log(`${p2.name} wins`)
        return p2
    }
}

let playGame = (p1, p2, winCount) => {
    let p1Count = 0
    let p2Count = 0
    let winner = false
    let checkEndGame = (a, winCount) => {
        if (a == winCount) {
            winner = true
        }
    }
    let round = 1

    while (!winner) {
        log(`Round: ${round}`)
        let w = playRound(p1, p2)
        if (w == p1) {
            p1Count++
            checkEndGame(p1Count, winCount)
        } else {
            p2Count++
            checkEndGame(p1Count, winCount)
        }
        round++
    }

    if (p1Count > p2Count) {
        log(`${p1.name} wins`)
        return p1
    } else {
        log(`${p2.name} wins`)
        return p2
    }
}

let playTournament = (p1, p2, p3, p4, playUntil) => {
    let game1Winner = playGame(p1, p2, playUntil)
    let game2Winner = playGame(p3, p4, playUntil)
    let finalWinner = playGame(game1Winner, game2Winner, playUntil)
    log(`${finalWinner.name} is the world`)
}

//playTournament(p1, p2, p3, p4, 5)