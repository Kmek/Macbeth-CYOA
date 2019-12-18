// Pause button and menu JS for the Macbeth Choose Your Own Adventure

//******************** HTML Components ********************//
var pauseBtn = document.getElementById("pauseBtn")
var pauseMenu = document.getElementById("pauseMenu")
var genSaveBtn = document.getElementById("genSaveBtn")
var saveInput = document.getElementById("saveInput")
var enterSaveBtn = document.getElementById("enterSaveBtn")

//******************** Toggle Pause Menu Visibility ********************//
function togglePauseMenu() {
    pauseMenu.classList.toggle("pauseMenuHidden")
    pauseMenu.classList.toggle("pauseMenuVisible")

    pauseMenu.scrollIntoView()
}
pauseBtn.setAttribute("onclick", "togglePauseMenu()")

//******************** Get Keys ********************//
// Get keys in an array for saving
var sceneIds = []
for (k in scenes)
    sceneIds.push(k)

//******************** Generate Save ********************//
genSaveBtn.onclick = function() {
    console.log("todo1")
}

//******************** Load Save ********************//
enterSaveBtn.onclick = function() {
    console.log("todo2")
}