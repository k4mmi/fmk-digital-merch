/******************** DEFINE ALL VARIABLES ********************/

// Define digital flower in html as variable
const digitalFlower = document.getElementById("digital-flower");

// Define displayed count in html as variable
const pointCountHtml = document.getElementById("point-count");

// Define cost <span> in HTML
const multiplierCostHtml = document.getElementById("multiplier-cost");
const autoclickerCostHtml = document.getElementById("autoclicker-cost");

// Define point cout variable
let pointCount = localStorage.getItem("pointCount");

// Define multiplier modifier and lvl
let multiplierModifierLevel = localStorage.getItem("multiplierModifierLevel");
let multiplierModifier = localStorage.getItem("multiplierModifier");
let multiplierCost = localStorage.getItem("multiplierCost");

// Define autoclicker modifier and lvl
let autoclickerLevel = localStorage.getItem("autoclickerLevel");
let autoclicker = localStorage.getItem("autoclicker");
let autoclickerCost = localStorage.getItem("autoclickerCost");

// Define variable for interval
let autoclickerInterval;

/******************** STORAGE ********************/

function localStorageLoad() {
    
    // If is pointCountLocalStorage empty, the start number will be 0
    if (localStorage.getItem("pointCount") === null) {

        // Set points to 0
        pointCount = 0;

    } else {

        pointCount = Number(pointCount);
        
    }

    // If is multiplierModifierLevel empty, the start number will be 0
    if (localStorage.getItem("multiplierModifierLevel") === null) {

        // Set points to 0
        multiplierModifierLevel = 0;
        multiplierModifier = 1;
        multiplierCost = 100; // Default starting cost

    } else {
        
        multiplierModifierLevel = Number(multiplierModifierLevel);
        multiplierModifier = Number(multiplierModifier);
        multiplierCost = Number(multiplierCost);

    }

    // If is pointCountLocalStorage empty, the start number will be 0
    if (localStorage.getItem("autoclickerLevel") === null) {

        // Set points to 0
        autoclickerLevel = 0;
        autoclicker = 1;
        autoclickerCost = 500; // Default starting cost

    } else {
        console.log("im here, lvl")
        autoclickerLevel = Number(autoclickerLevel);
        autoclicker = Number(autoclicker);
        autoclickerCost = Number(autoclickerCost);

    }

    displayUpdate();
    // localStorageSave();

}

// Push all important variables to local storage
function localStorageSave() {

    localStorage.setItem("pointCount", pointCount);

    localStorage.setItem("multiplierModifierLevel", multiplierModifierLevel);
    localStorage.setItem("multiplierModifier", multiplierModifier);

    localStorage.setItem("autoclickerLevel", autoclickerLevel);
    localStorage.setItem("autoclicker", autoclicker);

    localStorage.setItem("multiplierCost", multiplierCost);
    localStorage.setItem("autoclickerCost", autoclickerCost);
    
}

/******************** POINTS ********************/

function pointIncrease(inputCount = null) {

    // No param will add 1 point
    if (inputCount === null) {

        // Add vaule to count
        ++pointCount;

    } else if (inputCount === "modifier") {

        // Add vaule to count
        pointCount = pointCount + (1 * multiplierModifier);

    } else {

        // Add vaule to count
        pointCount += inputCount

    }

    // Local storage stuff
    pointCountLocalStorage = pointCount;
    localStorage.setItem("pointCount",pointCount);

    // console.log(pointCount);

    // Update displayed number in html
    displayUpdate();
    localStorageSave();

}

function pointDecrease(inputCount = null) {

    // No param will add 1 point
    if (inputCount === null) {

        // Add vaule to count
        --pointCount;

    } else {

        // Add vaule to count
        pointCount -= inputCount;

    }

        // Local storage stuff
        pointCountLocalStorage = pointCount;
        localStorage.setItem("pointCount",pointCount);
    
        console.log(pointCount);
    
        // Update displayed number in html
        displayUpdate();
        localStorageSave();

}

/********* PURCHASE **********/

function autoclickerFunction() {
    
    if (autoclickerLevel > 0) {

        clearInterval(autoclickerInterval);
        
        autoclickerInterval = setInterval( () => {

            pointIncrease("modifier")

        }, 4000 / autoclicker)
    }

}


// Update displayed information in html 
function displayUpdate() {

    pointCountHtml.innerHTML = pointCount;
    multiplierCostHtml.innerHTML = multiplierCost;
    autoclickerCostHtml.innerHTML = autoclickerCost;

}

/******************** PURCHASE ********************/

function purchaseItem(inputItem) {

    switch (inputItem) {

        case "multiplier":
            
            // If player has enought points, player will be able to buy the item
            if (pointCount >= multiplierCost) {

                pointDecrease(multiplierCost);

                multiplierCost *= 3;
                multiplierModifier *= 2;
                ++multiplierModifierLevel

            }

            break

        case "autoclicker":


            if (pointCount >= autoclickerCost) {

                pointDecrease(autoclickerCost);

                autoclickerCost *= 3;
                autoclicker *= 2;
                ++autoclickerLevel
                autoclickerFunction()

            }
            break

    }

    localStorageSave();
    displayUpdate()

}

/******************** ON LOAD ********************/

localStorageLoad();

displayUpdate();

autoclickerFunction()
