/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer, dice, gamePalying, dice1;

function init() {
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePalying = true;

    document.querySelector('.dice').style.display = "none";

    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector('.player-0-panel').classList.add("active");
}
init();

function nextPlayer() {
    var s = document.querySelector(".dice");
    s.style.display = "none";
    roundScore = 0;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

// //button Roll 
// document.querySelector('.btn-roll').addEventListener("click", function () {
//     if (gamePalying) {
//         //Click on the Roll Button
//         dice = Math.floor(Math.random() * 6) + 1;
//         var s = document.querySelector(".dice");
//         console.log(dice);
//         s.src = "dice-" + dice + ".png"
//         s.style.display = "block";

//         //update score
//         if (dice == 1) {
//             nextPlayer();
//             // document.querySelector(".player-0-panel").classList.remove('active');
//         } else {
//             roundScore += dice;
//             document.querySelector("#current-" + activePlayer).textContent = roundScore;
//         }
//     } else {
//         alert("We Have a Winner");
//         alert("If you want to Start New Game then Click on New Game");
//     }
// })

//Button Hold

document.querySelector('.btn-hold').addEventListener("click", function () {
    if (gamePalying) {
        score[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];

        if (score[activePlayer] >= 50) {
            console.log(score[activePlayer]);
            document.querySelector("#name-" + activePlayer).textContent = "WINNER !";
            document.querySelector(".dice").style.display = "none";
            document.querySelector('.player-' + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            gamePalying = false;
            roundScore = 0;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        } else
            nextPlayer();
    } else {
        alert("We Have a Winner");
        alert("If you want to Start New Game then Click on New Game");
    }
})

document.querySelector(".btn-new").addEventListener("click", init);




/*



A Player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn



*/


//button Roll
document.querySelector('.btn-roll').addEventListener("click", function () {
    if (gamePalying) {
        //Click on the Roll Button
        dice1 = dice;
        dice = Math.floor(Math.random() * 6) + 1;
        var s = document.querySelector(".dice");
        console.log(dice);
        s.src = "dice-" + dice + ".png"
        s.style.display = "block";

        //update score
        if (dice == 6 && dice1 == 6) {
            document.querySelector("#score-" + activePlayer).textContent = 0;
            nextPlayer();

            // document.querySelector(".player-0-panel").classList.remove('active');
        } else if (dice == 1)
            nextPlayer();
        else {
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }
    } else {
        alert("We Have a Winner");
        alert("If you want to Start New Game then Click on New Game");
    }
})




/* 

Add an input field to the HTML where players can set the winning score, so that they can change the perdefined score of 100.
    Hint: you can read that value with the .value property in javascript. 

*/