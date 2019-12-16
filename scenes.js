// All Macbeth scenes are stored in the scenes variable

var scenes = {
    testScene: {
        question: "what do you choose?",
        options: ["test2", "testScene", "test2"],
        links: ["test2", "testScene", "test2"],
        description: "asdfg testScene",
        id: "test1"
    },
    test2: {
        question: "what do you choose?",
        options: ["test2", "testScene", "test3"],
        links: ["test2", "testScene", "test3"],
        description: "asdfg test2",
        id: "test2"
    },
    test3: {
        question: "what do you choose?",
        options: ["test2", "testScene", "test4"],
        links: ["test2", "testScene", "test4"],
        description: "asdfg test3",
        id: "test3"
    },
    test4: {
        question: "what do you choose for test4?",
        options: ["test2", "testScene", "test2"],
        links: ["test2", "testScene", "test2"],
        description: "asdfg test4",
        id: "test4"
    },
}

// Get keys in an array for saving
sceneIds = []
for (k in scenes)
    sceneIds.push(k)