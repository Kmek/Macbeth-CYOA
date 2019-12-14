// Main JS for the Macbeth Choose Your Own Adventure

//******************** Constants ********************//
const storyDiv = document.getElementById("story")
const buttonDiv = document.getElementById("buttons")

//******************** Load Scene Button ********************//
function loadScene(scene) {
    console.log(scene)
    var newDiv = document.createElement("div")
    newDiv.setAttribute("class", "row")

    var storyText = document.createElement("p")
    storyText.innerHTML = scene.description
    newDiv.append(storyText)
    
    storyDiv.append(newDiv)
}

loadScene(scenes.testScene)
loadScene(scenes.testScene)
loadScene(scenes.testScene)