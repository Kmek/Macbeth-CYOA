// Main JS for the Macbeth Choose Your Own Adventure

//******************** Constants ********************//
const storyDiv = document.getElementById("story")
const buttonDiv = document.getElementById("buttons")

//******************** Load Scene Button ********************//
function loadScene(scene) {
    // Add new row to the story div
    var newDiv = document.createElement("div")
    newDiv.setAttribute("class", "row")

    var storyText = document.createElement("p")
    storyText.innerHTML = scene.description
    newDiv.append(storyText)
    
    storyDiv.append(newDiv)

    // Set buttons in the buttons div
    buttonDiv.innerHTML = ""
    for (let i = 0; i < scene.options.length; i++) {
        let option = document.createElement("button")
        option.innerHTML = scene.options[i]
        option.setAttribute("onclick", ("loadScene(scenes['" + scene.links[i] + "'])"))
        buttonDiv.append(option)
    }

    // Move down the page
    buttonDiv.scrollIntoView()
}

loadScene(scenes.testScene)