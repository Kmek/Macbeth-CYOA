// All Macbeth scenes are stored in the scenes variable

var scenes = {
    sistersIntro: {
	  description: ["First Witch: When shall we meet again?", "Second Witch: When the battle's lost and won.", "Third Witch: At sunset.", "First Witch: Where?", "Second Witch: Upon the heath.", "Third Witch: There to meet with Macbeth.", "First Witch: Anon.", "All: Fair is foul, and foul is fair; Hover through the fog and filthy air."],
        question: "Begin your adventure?",
        options: ["Start"],
        links: ["duncanIntro"]
    },
    duncanIntro: {
        description: ["Duncan: Aah! A bloody soldier!", "Malcolm: Don't worry, he bravely brings good news.", "Sergeant: The merciless Macdonwald has been slain by none other than the brave Macbeth. He sliced the villan down his front and mounted his dismembered head on our battlements", "Duncan: Joyous news!"],
        question: "what do you choose?",
        options: ["test2", "testScene", "test2"],
        links: ["test2", "testScene", "test2"]
  	},
    
    testScene: {
        description: "asdfg testScene",
        question: "what do you choose?",
        options: ["test2", "testScene", "test2"],
        links: ["test2", "testScene", "test2"]
    },
    test2: {
        description: "asdfg test2",
        question: "what do you choose?",
        options: ["test2", "testScene", "test3"],
        links: ["test2", "testScene", "test3"]
    },
    test3: {
        description: "asdfg test3",
        question: "what do you choose?",
        options: ["test2", "testScene", "test4"],
        links: ["test2", "testScene", "test4"]
    },
    test4: {
        description: "asdfg test4",
        question: "what do you choose for test4?",
        options: ["test2", "testScene", "test2"],
        links: ["test2", "testScene", "test2"]
    },
}

// Get keys in an array for saving
sceneIds = []
for (k in scenes)
    sceneIds.push(k)
