// All Macbeth scenes are stored in the scenes variable

var scenes = {
	// Act 1
    sistersIntro: {
        description: ["Thunder and lightning. Enter three witches", "First Witch: When shall we meet again?", "Second Witch: When the battle's lost and won.", "Third Witch: At sunset.", "First Witch: Where?", "Second Witch: Upon the heath.", "Third Witch: There to meet with Macbeth.", "First Witch: Anon.", "All: Fair is foul, and foul is fair; Hover through the fog and filthy air.", "Exeunt"],
        question: "Begin your adventure?",
        options: ["Start"],
        links: ["duncanIntro"]
    },
    duncanIntro: {
        description: ["Alarum within. Enter Duncan, Malcolm, Donalbain, Lennox, with Attendants, meeting a bleeding Sergeant", "Duncan: Aah! A bloody soldier!", "Malcolm: Don't worry, he brings news from battle.", "Sergeant: The merciless Macdonwald has been slain by none other than the brave Macbeth. He sliced the villain down his front and mounted his dismembered head on our battlements", "Duncan: Joyous news!", "Sergeant: Indeed, but the Norweyan lord is beginning a fresh assault as we speak", "Duncan: No worries, how are the captains Macbeth and Banquo?", "Sergeant: As much as I could see, they were both in the thick of it. But I can speak no longer, my gashes cry for help."],
        question: "What will Duncan do?",
        options: ["Demand more info", "Request surgeons"],
        links: ["demandInfo", "getSurgeons"]
    },
    getSurgeons: {
        description: ["Duncan: This is good news. Please, attend to his wounds, get him surgeons.", "Exit Sergeant, attended"],
        question: "Continue",
        options: ["Continue"],
        links: ["thaneCawdor"]
    },
    demandInfo: {
        description: ["Duncan: Please, I must know. Where are they? How do they fair? Tell me more I demand you! Tell me!", "Sergeant: My wounds overtake me, I'm sorry dear king...", "The Sergeant falls to the ground and is carried out of the room."],
        question: "Continue",
        options: ["Continue"],
        links: ["thaneCawdor"]
    },
    thaneCawdor: {
        description: ["Duncan: Hey, who goes there?", "Enter Ross", "Malcolm: The worthy thane of Ross", "Lennox: What is that look in your eyes? What have you seen?", "Ross: God save the king!", "Duncan: Where have you travelled from thane?", "Ross: From Fife, great king. Norway has terrible numbers, but has assistance form the traitorous thane of Cawdor. But that Bellona's bridegroom confronted and crushed his lavish spirits, letting the victory fall on us.", "Duncan: Great news again!", "Ross: But now the Norweyan King craves mercy, presenting ten thousand dollars to our general use.", "Duncan: No more will the thane of Cawdor deceive our interests, pronounce him dead. Greet Macbeth with his former title.", "Ross: I'll see it done.", "Duncan: What he hath lost noble Macbeth hath won."],
        question: "Continue",
        options: ["Continue"],
        links: ["macbethBanquoEncounterWitches"]
    },
    /* chestnutStory: {
        description: ["First Witch: Where have you been sister?", "Second Witch: Killing swine.", "Third Witch: And you, sister?", "First Witch: A sailor's wife had chestnuts in her lap, and munched and munched and munched. 'Give me' I asked. 'Aroint thee, witch!' the rump-fed ronyon cried. Her husband's gone to Aleppo, master o'the Tiger. But in a sieve I'll thither sail. Like a rat without a tail, I'll do, I'll do, and I'll do.", "Second Witch: I'll give thee a wind.", "First Witch: You're kind. Look what I have.", "Second Witch: Show me, show me.", "First Witch: Here I have a pilot's thumb. Wrecked as homeward he did come.", "Third Witch: A drum, a drum!, Macbeth is here!"],
    }, */
    macbethBanquoEncounterWitches: {
    	description: ["Macbeth: so foul and fair a day I have not seen.", "Banquo: How far is it to Forres? What are these creatures in withered and wild attire? They don't look like inhabitants of the earth, and yet they are so."],
        question: "What will Macbeth do?",
        options: ["Speak to the creatures", "Attack the creatures"],
        links: ["speakToCreatures", "attackCreatures"]
    }, 
    attackCreatures: {
        description: ["Macbeth: Whatever you are, you shouldn't be here! Begone, or prepare to perish!", "Banquo: At arms!", "First Witch: You may try, feeble ones", "Second Witch: But be warned, no blade shall pierce our flesh.", "Third Witch: You shouldn't have resorted to such violence, Macbeth."],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
    speakToCreatures: {
        description: ["Macbeth: Speak, if you can: what are you?"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
 
    todo: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
    testScene: {
        description: ["testScene text"],
        question: "what do you choose?",
        options: ["testScene", "todo"],
        links: ["testScene", "todo"]
    }
}

