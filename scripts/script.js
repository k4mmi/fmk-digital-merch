/******************** VARIABLES ********************/

// Define <body> in html
const bodyTag = document.getElementsByTagName("body")[0];

// Define btn icon
const colorThemeIcon = document.getElementById("color-theme-icon");

// Define color theme variable
let colorTheme = localStorage.getItem("colorTheme"); // If the local storage is empty, it means null

// Define digital flower (/digital/index.html) in html
const digiFlower = document.getElementById("digital-flower");

// Function change color theme by user settings
function colorModeChanger(input) {
    
    function colorModeSet(setTheme) {
        
        // Change class in <body>
        bodyTag.className = `${setTheme}-mode`;

        // Change theme variable
        colorTheme = setTheme;
        localStorage.setItem("colorTheme", colorTheme);

        // Change icon
        switch (setTheme) {
            case "dark": colorThemeIcon.src = directoryModifier + "assets/icons/moon.svg"; break;
            case "light": colorThemeIcon.src = directoryModifier + "assets/icons/sun.svg"; break;
        }

        if (digiFlower !== null) {
        
            switch (setTheme) {
                case "dark": digiFlower.src = directoryModifier + "assets/game-assets/digital-flower.png"; break;
                case "light": digiFlower.src = directoryModifier + "assets/game-assets/digital-flower-light.png"; break;
            }
    
        }
    }

    // Firsttime this function decide the color theme
    if (colorTheme === null) {

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            
            colorModeSet("light");

        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            
            colorModeSet("dark");

        }

    // Else do just theme swap
    } else if (input === "swap") {

        switch (colorTheme) {

            case "dark": colorModeSet("light"); break;

            case "light": colorModeSet("dark"); break;

        }

    } else {

        switch (colorTheme) {

            case "light": colorModeSet("light"); break;

            case "dark": colorModeSet("dark"); break;

        }

    }

}

/******************** ON LOAD ********************/

// First time chack
colorModeChanger();

console.log("%cWelcome in dev console! :3 If u are looking for source code: \nhttps://github.com/k4mmi/fmk-digital-merch", "color: #E73937; font-weight:bold;")