// Pause button and menu JS for the Macbeth Choose Your Own Adventure

//******************** HTML Components ********************//
var pauseBtn = document.getElementById("pauseBtn")
var pauseMenu = document.getElementById("pauseMenu")

//******************** Toggle Pause Menu Visibility ********************//
function togglePauseMenu() {
    if (pauseMenu.style.visibility == "visible") {
        pauseMenu.style.visibility = "hidden"
        pauseMenu.style.height = "0"
    }
    else {
        pauseMenu.style.visibility = "visible"
        pauseMenu.style.height = "130px"
        pauseMenu.scrollIntoView()
    }
}
pauseBtn.setAttribute("onclick", "togglePauseMenu()")