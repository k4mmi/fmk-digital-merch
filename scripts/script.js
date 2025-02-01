/******************** DEFINE ALL VARIABLES ********************/

// Containtains all default vaules, this solution is good for reset all vaules in flower variable
const defaultFlower = { 
    id1: {
        // Status of the flower, null is default, can be changed to player name ("human", "bot")
        status: null,
        // Define a flower image in html
        html: document.getElementById("flower1"),
    },
    id2: {
        status: null,
        html: document.getElementById("flower2"),
    },
    id3: {
        status: null,
        html: document.getElementById("flower3"),
    },
    id4: {
        status: null,
        html: document.getElementById("flower4"),
    },
    id5: {
        status: null,
        html: document.getElementById("flower5"),
    },
    id6: {
        status: null,
        html: document.getElementById("flower6"),
    },
    id7: {
        status: null,
        html: document.getElementById("flower7"),
    },
    id8: {
        status: null,
        html: document.getElementById("flower8"),
    },
    id9: {
        status: null,
        html: document.getElementById("flower9"),
    }
};

let flower = defaultFlower;

let blockPlayerInput = false;

let blockHumanInput = false;

const menu = document.getElementById("container-menu-fmk");
const menuTextWinner = document.getElementById("menu-text-winner");

/******************** DEFINE ALL FLOWERS VARIABLES ********************/

function flowerReColor(inputFlowerId, inputColor) {

    // Take the default flower and edit the directory of the image
    inputFlowerId.html.src = inputFlowerId.html.src.slice(0, -4) + "_" + inputColor + inputFlowerId.html.src.slice(-4);
}

/******************** PLAY FUNCTION ********************/

function play(inputPlayer, inputMove) {

    // Chack if is the flower without owner
    if (inputMove.status === null) {

        
        // Check the player
        switch (inputPlayer) {
            
            case "human":
                
                if (blockPlayerInput === false && blockHumanInput === false) {
                    
                    // Set the new owner of the flower
                    inputMove.status = inputPlayer;
                    flowerReColor(inputMove, "red");
                    console.log(winChecker());

                    winChecker();

                    // Bot will play after human
                    bot();
                }
                break

            case "bot":

                if (blockPlayerInput === false) {

                    // Block the player and wait for bot
                    blockHumanInput = true;
                    
                    let botCooldown = setInterval(() => {
                        
                        // Set the new owner of the flower
                        inputMove.status = inputPlayer;
                        flowerReColor(inputMove, "white");
                        console.log(winChecker());

                        // Unblock human
                        blockHumanInput = false;

                        clearInterval(botCooldown);

                    }, 500)

                    winChecker();
                }
                break
        
            default:
                console.log("ERROR: illegal player"); 
                inputMove.status = null;
                break

        }
    }


}

/******************** BOT FUNCTION ********************/

function bot() {

    function botRandom() {
    
        // Generate random num 0-8
        let randomNum = Math.floor(Math.random() * 9);

        // console.log(randomNum);

        // Choose random flower
        switch (randomNum) {
            case 0:
                // The flower have to be without owner
                if (flower.id1.status === null) {
                    play("bot", flower.id1);
                    return true
                }
            case 1:
                if (flower.id2.status === null) {
                    play("bot", flower.id2);
                    return true
                }
                break;
            case 2:
                if (flower.id3.status === null) {
                    play("bot", flower.id3);
                    return true
                }
                break;
            case 3:
                if (flower.id4.status === null) {
                    play("bot", flower.id4);
                    return true
                }
                break;
            case 4:
                if (flower.id5.status === null) {
                    play("bot", flower.id5);
                    return true
                }
                break;
            case 5:
                if (flower.id6.status === null) {
                    play("bot", flower.id6);
                    return true
                }
                break;
            case 6:
                if (flower.id7.status === null) {
                    play("bot", flower.id7);
                    return true
                }
                break;
            case 7:
                if (flower.id8.status === null) {
                    play("bot", flower.id8);
                    return true
                }
                break;
            case 8:
                if (flower.id9.status === null) {
                    play("bot", flower.id9);
                    return true
                }
                break;
            default: 
                console.log("bot is dead");
                    return false;
        }
    }

    // I is set to prevent of infinity loop. If the random output will be false, it well repeat the cycle again.
    for (let x = null, i = 0; x !== true && i <= 100; ++i) {
        x = botRandom();
    }
}

/******************** WIN CHACKER ********************/

function winChecker() {

    switch (true) {

        case flower.id1.status === flower.id2.status && flower.id2.status === flower.id3.status && flower.id1.status !== null:
            /* 
                X X X
                . . .
                . . .
            */

            blockPlayers();
            endSequence(flower.id1.status);
            break;
    
        case flower.id4.status === flower.id5.status && flower.id5.status === flower.id6.status && flower.id4.status !== null:
            /* 
                . . .
                X X X
                . . .
            */
            blockPlayers();
            endSequence(flower.id4.status);
            break;
    
        case flower.id7.status === flower.id8.status && flower.id8.status === flower.id9.status && flower.id7.status !== null:
            /* 
                . . .
                . . .
                X X X
            */
            blockPlayers();
            endSequence(flower.id7.status);
            break;
    
        case flower.id1.status === flower.id4.status && flower.id4.status === flower.id7.status && flower.id1.status !== null:
            /* 
                X . .
                X . .
                X . .
            */
            blockPlayers();
            endSequence(flower.id1.status);
            break;
    
        case flower.id2.status === flower.id5.status && flower.id5.status === flower.id8.status && flower.id2.status !== null:
            /* 
                . X .
                . X .
                . X .
            */
            blockPlayers();
            endSequence(flower.id2.status);
            break;
    
        case flower.id3.status === flower.id6.status && flower.id6.status === flower.id9.status && flower.id3.status !== null:
            /* 
                . . X
                . . X
                . . X
            */
            blockPlayers();
            endSequence(flower.id3.status);
            break;
    
        // Diagonály
        case flower.id1.status === flower.id5.status && flower.id5.status === flower.id9.status && flower.id1.status !== null:
            /* 
                X . .
                . X .
                . . X
            */
            blockPlayers();
            endSequence(flower.id1.status);
            break;
    
        case flower.id3.status === flower.id5.status && flower.id5.status === flower.id7.status && flower.id3.status !== null:
            /* 
                . . X
                . X .
                X . .
            */
            blockPlayers();
            endSequence(flower.id3.status);
            break;

        default:

            // Chack if all flowers have owner
            switch (null){

                case flower.id1.status: break;
                case flower.id2.status: break;
                case flower.id3.status: break;
                case flower.id4.status: break;
                case flower.id5.status: break;
                case flower.id6.status: break;
                case flower.id7.status: break;
                case flower.id8.status: break;
                case flower.id9.status: break;

                default:
                // Nobody won
    
                blockPlayers();
                endSequence("nobody");
                break;

            }

    }
    
}

// Show the menu
function endSequence(inputWinner) {

    menu.style.display = "flex";

    switch (inputWinner) {
        case "human":
            textAnimation("Vítěztví")
            break;
        case "bot":
            textAnimation("Prohra")
            break;
        case "nobody":
            textAnimation("Remíza")
            break;
    }

    // Animation stolen from my different project :3
    // This animation looks like typing on keyboard
    function textAnimation(inputText) {

        // Define interval count
        let i = 0;
        
        let cooldownAnimation =  setInterval(() => {

            let intervalAnimation =  setInterval(() => {

                // Add one number to countiog of intervals
                ++i
                
                // Interval stopper
                if (i >= inputText.length) {
                    clearInterval(intervalAnimation);
                }

                // Slicing text by count of interval
                let text = inputText.slice(0, i);

                // Apply text string into html document
                menuTextWinner.innerHTML = text;

            }, 150)

            clearInterval(cooldownAnimation);

        }, 1500)

    }

}

// Block all players (bot and human)
function blockPlayers() {

    blockPlayerInput = true;
}

function resetGame() {

    flower = defaultFlower;

    blockPlayerInput = false;

    blockHumanInput = false;

    winner = null;

    menuTextWinner.innerHTML = "...";

    /* 
        Yeah, I know, it's stupid solution - I'm too lazy solve the problem
        with promise... and that JSON doesn't like the document.getElementById
        stuff. So... this stupid solution.
    */

    // Reset owner of flower
    flower.id1.status = null;
    flower.id2.status = null;
    flower.id3.status = null;
    flower.id4.status = null;
    flower.id5.status = null;
    flower.id6.status = null;
    flower.id7.status = null;
    flower.id8.status = null;
    flower.id9.status = null;

    // Reset flower images
    flower.id1.html.src = "../assets/game-assets/flower1.svg"
    flower.id2.html.src = "../assets/game-assets/flower2.svg"
    flower.id3.html.src = "../assets/game-assets/flower3.svg"
    flower.id4.html.src = "../assets/game-assets/flower4.svg"
    flower.id5.html.src = "../assets/game-assets/flower5.svg"
    flower.id6.html.src = "../assets/game-assets/flower6.svg"
    flower.id7.html.src = "../assets/game-assets/flower7.svg"
    flower.id8.html.src = "../assets/game-assets/flower8.svg"
    flower.id9.html.src = "../assets/game-assets/flower9.svg"
    console.log("game reset");

    menu.style.display = "none";

}