// All Macbeth scenes are stored in the scenes variable

var scenes = {
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