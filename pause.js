// Pause button and menu JS for the Macbeth Choose Your Own Adventure

//******************** HTML Components ********************//
var pauseBtn = document.getElementById("pauseBtn")
var pauseMenu = document.getElementById("pauseMenu")
var genSaveBtn = document.getElementById("genSaveBtn")
var saveInput = document.getElementById("saveInput")
var enterSaveBtn = document.getElementById("enterSaveBtn")

//******************** Toggle Pause Menu Visibility ********************//
function togglePauseMenu() {
    // Toggle classes
    pauseMenu.classList.toggle("pauseMenuHidden")
    pauseMenu.classList.toggle("pauseMenuVisible")
    // Reset save input
    saveInput.style.backgroundColor = "#ffffff"
    saveInput.value = ""
    // Move to the pause menu
    pauseMenu.scrollIntoView()
}
pauseBtn.setAttribute("onclick", "togglePauseMenu()")

//******************** Scene Keys ********************//
// Get keys in an array for saving
var sceneIds = []
for (k in scenes)
    sceneIds.push(k)

var currentScenes = []

//******************** Generate Save ********************//
genSaveBtn.onclick = function() {
    let save = sceneIds.indexOf(currentScenes[0])
    for (let i = 1; i < currentScenes.length; i++) {
        // Find the index of each scene name in sceneIds[]
        save = save + "-" + sceneIds.indexOf(currentScenes[i])
        // console.log(currentScenes[i], sceneIds.indexOf(currentScenes[i]))
    }

    // Display the created save in the saveInput
    saveInput.value = save
}

//******************** Load Save ********************//
enterSaveBtn.onclick = function() {
    // Get the entered save
    let save = []
    save = saveInput.value.split("-")

    // Validate the save by checking if the scenes can be accessed in the given order
    let check = false
    for (let i = 1; i < save.length; i++) {
        check = false
        // Ensure that only a valid scene # is entered
        if (save[i] >= sceneIds.length) 
            break
        // Ensure the scene can be accessed from the previous
        if (scenes[sceneIds[save[i - 1]]].links.includes(sceneIds[save[i]]))
            check = true
        else 
            break
    }
    if (save.length < 2 || save[0] != "0" || !check) {
        saveInput.style.backgroundColor = "#c42b2b"
        return 0
    }

    // Reset the story div and currentScenes
    storyDiv.innerHTML = ""
    currentScenes = []

    // Build the story
    for (let i = 0; i < save.length; i++)
        loadScene(sceneIds[save[i]])
}