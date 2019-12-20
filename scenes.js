// All Macbeth scenes are stored in the scenes variable
// Scenes are based off of this macbeth text: http://shakespeare.mit.edu/macbeth/full.html

var scenes = {
    //******************** Act 1 ********************//
    //******* Scene 1.1 *******//
    sistersIntro: {
        description: ["Thunder and lightning. Enter three witches", "First Witch: When shall we meet again?", "Second Witch: When the battle's lost and won.", "Third Witch: At sunset.", "First Witch: Where?", "Second Witch: Upon the heath.", "Third Witch: There to meet with Macbeth.", "First Witch: Anon.", "All: Fair is foul, and foul is fair; Hover through the fog and filthy air.", "Exeunt"],
        question: "Begin your adventure?",
        options: ["Start"],
        links: ["duncanIntro"]
    },
    //******* Scene 1.2 *******//
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
        description: ["Duncan: Hey, who goes there?", "Enter Ross", "Malcolm: The worthy thane of Ross", "Lennox: What is that look in your eyes? What have you seen?", "Ross: God save the king!", "Duncan: Where have you travelled from thane?", "Ross: From Fife, great king. Norway has terrible numbers, but has assistance form the traitorous thane of Cawdor. But that Bellona's bridegroom confronted and crushed his lavish spirits, letting the victory fall on us.", "Duncan: Great news again!", "Ross: But now the Norweyan King craves mercy, presenting ten thousand dollars to our general use.", "Duncan: No more will the thane of Cawdor deceive our interests, pronounce him dead. Greet Macbeth with his former title.", "Ross: I'll see it done.", "Duncan: What he hath lost noble Macbeth hath won.", "Exeunt"],
        question: "Continue",
        options: ["Continue"],
        links: ["chestnutStory"]
    },
    //******* Scene 1.3 *******//
    chestnutStory: {
        description: ["Thunder. Enter the three Witches", "First Witch: Where have you been sister?", "Second Witch: Killing swine.", "Third Witch: And you, sister?", "First Witch: A sailor's wife had chestnuts in her lap, and munched and munched and munched. 'Give me' I asked. 'Aroint thee, witch!' the rump-fed ronyon cried. Her husband's gone to Aleppo, master o'the Tiger. But in a sieve I'll thither sail. Like a rat without a tail, I'll do, I'll do, and I'll do.", "Second Witch: I'll give thee a wind.", "First Witch: You're kind. Look what I have.", "Second Witch: Show me, show me.", "First Witch: Here I have a pilot's thumb. Wrecked as homeward he did come.", "Drum within", "Third Witch: A drum, a drum!, Macbeth is here!"],
        question: "Continue",
        options: ["Continue"],
        links: ["macbethBanquoEncounterWitches"]
    },
    macbethBanquoEncounterWitches: {
    	description: ["Enter Macbeth and Banquo", "Macbeth: So foul and fair a day I have not seen.", "Banquo: How far is it to Forres? What are these creatures in withered and wild attire? They don't look like inhabitants of the earth, and yet they are so."],
        question: "What will Macbeth do?",
        options: ["Speak to the creatures", "Attack the creatures"],
        links: ["speakToCreatures", "attackCreatures"]
    }, 
    attackCreatures: {
        description: ["Macbeth: Whatever you are, you shouldn't be here! Begone, or prepare to perish!", "Banquo: At arms!", "First Witch: You may try, feeble ones", "Second Witch: But be warned, no blade shall pierce our flesh.", "Third Witch: You shouldn't have resorted to such hostility, Macbeth, king hereafter.", "Macbeth: King? I shall become king?", "First Witch: Indeed."],
        question: "Continue",
        options: ["Continue"],
        links: ["banquoProphecy"]
    },
    speakToCreatures: {
        description: ["Macbeth: Speak, if you can, what are you?", "First Witch: All hail Macbeth! Hail to thee, thane of Glamis!", "Second Witch: All hail Macbeth, hail to thee, thane of Cawdor", "Third Witch: All hail Macbeth, thou shalt be king hereafter!"],
        question: "Continue",
        options: ["Continue"],
        links: ["banquoProphecy"]
    },
    banquoProphecy: {
        description: ["Banquo: Good sirs, you greet with present grace and great prediction of noble having and royal hope, but to me you speak not. If you can look into the seeds of time and say which grain will grow and which will not, speak then to me! I neither beg nor fear your favors nor your hate.", "First Witch: Hail!", "Second Witch: Hail!", "Third Witch: Hail!", "First Witch: Lesser than Macbeth, and greater.", "Second Witch: Not so happy, yet much happier.", "Third Witch: Thou shalt get kings, though thou be none. So all hail, Macbeth and Banquo!", "First Witch: Banquo and Macbeth, all hail!"],
        question: "What will Macbeth do?",
        options: ["Demand more info", "Run away"],
        links: ["macbethDemandsMore", "macbethRunsAway"]
    },
    macbethRunsAway:  {
        description: ["Macbeth: Strange creatures from the beyond, I cannot believe your false words. This is too much!", "Macbeth runs away", "Banquo: I understand your spoken words, but I too cannot fall for your tricks.", "Banquo runs away to follow Macbeth"],
        question: "Continue",
        options: ["Continue"],
        links: ["macbethBanquoReasonWitches"]
    },
    macbethDemandsMore: {
        description: ["Macbeth: Stay, you imperfect speakers, tell me more! I know I am thane of Glamis, but how of Cawdor? That thane lives. To be king stands not within the prospect of belief, no more than to be the thane of Cawdor. How do you know this strange intelligence? Why upon this blasted heath you stop our way with such prophetic greeting? Speak, I charge you!", "Witches vanish", "Banquo: The earth hath bubbles, as the water has, and these are of them. Wither are they vanished?", "Macbeth: Into the air; and what seemed corporal melted as breath into the wind. Would they have stayed!"],
        question: "Continue",
        options: ["Continue"],
        links: ["macbethBanquoReasonWitches"]
    },
    macbethBanquoReasonWitches: {
        description: ["Banquo: Were such things here as we do speak about? Or have we eaten on the insane root that takes the reason prisoner?", "Macbeth: Your children shall be kings.", "Banquo: You shall be king.", "Macbeth: And thane of Cawdor too. Went it not so?", "Banquo: To the selfsame tune and words. Who's here?", "Enter Ross and Angus"],
        question: "Continue",
        options: ["Continue"],
        links: ["macbethThaneCawdor"]
    },
    macbethThaneCawdor: {
        description: ["Ross: The king hath happily received, Macbeth, the news of thy success, and when he reads thy personal venture in the rebels' fight, his wonders and his praises do contend which should be thine or his. Silenced with that, in viewing o'er the rest o' the selfsame day, he finds thee in the stout Norweyan ranks, nothing afeard of what thyself didst make, strange images of death. As thick as hail came post with post, and every one did bear thy praises in his kingdom's great defence, and pour'd them down before him.", "Angus: We are sent to give thee from our royal master thanks. Only to herald thee into his sight, not pay thee.", "Ross: And, for an earnest of a greater honour, he bade me, from him, call thee thane of Cawdor. In which addition, hail, most worthy thane! For it is thine.", "Banquo: What, can the devil speak true?"],
        question: "What will Macbeth do?",
        options: ["Disbelieve Ross", "Accept the position"],
        links: ["macbethThaneCawdorDenied", "macbethThaneCawdorAccepted"]
    },
    macbethThaneCawdorDenied: {
        description: ["Macbeth: The thane of Cawdor lives, why do you dress me in borrowed robes?", "Angus: Who was the thane lives yet. But under heavy judgment bears that life which he deserves to lose. Whether he was combined with those of Norway, or did line the rebel with hidden help and vantage, or that with both he labour'd in his country's wreck, I know not. But treasons capital, confess'd and proved, have overthrown him.", "Macbeth: How did this happen so suddenly? I must know the truth!", "Ross: Calm down Worthy Macbeth, you have it.", "Macbeth [aside]: Could the creatures be true? No, impossible. I cannot fall for their trickery. I must find out the truth from one who could never be tricked.", "Macbeth: We must go to the king, I need to hear this from him.", "Ross: Very well."],
        question: "Continue",
        options: ["Continue"],
        links: ["macbethMustSeeKing"]
    },
    macbethThaneCawdorAccepted: {
        description: ["Macbeth: The thane of Cawdor, I am honored.", "Angus: Dear Macbeth, you do not seem surprised?", "Macbeth: Let's just say it was to be expected. Everyone could see the former thane was growing untrustworthy, so it was only a matter of time.", "Macbeth [Aside]: Glamis, and thane of Cawdor! The greatest is behind.", "To Ross and Angus", "Macbeth [aside]: Thank you for your pains.", "To Banquo", "Macbeth [aside]: Do you not hope your children shall be kings, when those that gave the thane of Cawdor to me promised no less to them?", "Banquo: That trusted home might yet enkindle you unto the crown, besides the thane of Cawdor. But 'tis strange and oftentimes, to win us to our harm, the instruments of darkness tell us truths, win us with honest trifles, to betray's in deepest consequence.", "Macbeth: Come, I must see the king. I must thank him for this gift.", "Banquo: Very gladly.", "Macbeth: Till then, enough. Come, friends.", "Exeunt"],
        question: "Continue",
        options: ["Continue"],
        links: ["macbethMustSeeKing"]
    },
    //******* Scene 1.4 *******//
    macbethMustSeeKing: {
        description: ["Forres, the palace. Flourish. Enter Duncan, Malcolm, Donalbain, Lennox, and Attendants", "Duncan: Is execution done on Cawdor? Are not those in commission yet return'd?", "Malcolm: My liege, they are not yet back. But I have spoke with one that saw him die, who did report that very frankly he confess'd his treasons.", "Duncan: There's no art to find the mind's construction in the face. He was a gentleman on whom I built an absolute trust.", "Enter Macbeth, Banquo, Ross, and Angus", "Duncan: O worthiest cousin! My worthy Cawdor! The sin of my ingratitude even now was heavy on me. Only I have left to say, more is thy due than more than all can pay.", "Macbeth [aside]: The king has said so, I am the true thane of Cawdor.", "Macbeth: The service and the loyalty I owe, in doing it, pays itself.", "Duncan: Welcome hither. Noble Banquo, that hast no less deserved, nor must be known no less to have done so. Let me enfold thee and hold thee to my heart.", "Banquo: There if I grow, the harvest is your own.", "King Duncan and Banquo hug"],
        question: "Continue",
        options: ["Continue"],
        links: ["princeMalcolm"]
    }, 
    princeMalcolm: {
        description: ["Duncan: My plenteous joys, we will establish our estate upon our eldest, Malcolm, whom we named hereafter the Prince of Cumberland, which honor must not unaccompanied invest him only. But signs like nobleness, like stars, shall shine on all deservers. From hence to Inverness, and bind us further to you.", "King Duncan's eldest son, Malcolm, is crowned prince", "Macbeth: I'll be myself the harbinger and make joyful the hearing of my wife with your approach, so humbly take my leave.", "Macbeth [aside]: The Prince of Cumberland! that is a step on which I must fall down, or else o'erleap, for in my way it lies. Stars, hide your fires; let not light see my black and deep desires. The eye wink at the hand; yet let that be, which the eye fears, when it is done, to see.", "Exit Macbeth", "Duncan: He is full so valiant, and in his commendations I am fed. It is a banquet to me. Let's after him, whose care is gone before to bid us welcome.", "Flourish. Exeunt"],
        question: "Continue",
        options: ["Continue"],
        links: ["ladyMacbethLetter"]
    },
    //******* Scene 1.5 *******//
    ladyMacbethLetter: {
        description: ["Enter Lady Macbeth, reading a letter", "Lady macbeth: 'They met me in the day of success, and I have learned by the perfectest report, they have more in them than mortal knowledge. When I burned in desire to question them further, they made themselves air, into which they vanished. Whiles I stood rapt in the wonder of it, came missives from the king, who all-hailed me 'Thane of Cawdor;' by which title, before, these weird sisters saluted me, and referred me to the coming on of time, with 'Hail, king that shalt be!' This have I thought good to deliver thee, my dearest partner of greatness, that thou mightst not lose the dues of rejoicing, by being ignorant of what greatness is promised thee. Lay it to thy heart, and farewell.'", "Lady Macbeth: Glamis thou art, and Cawdor; and shalt be what thou art promised. yet do I fear thy nature; it is too full o' the milk of human kindness to catch the nearest way. Thou wouldst be great; art not without ambition, but without the illness should attend it. What thou wouldst highly, that wouldst thou holily; wouldst not play false, and yet wouldst wrongly win. Thou'ldst have, great Glamis, that which cries 'Thus thou must do, if thou have it; and that which rather thou dost fear to do than wishest should be undone.' Hie thee hither, that I may pour my spirits in thine ear; and chastise with the valour of my tongue all that impedes thee from the golden round, which fate and metaphysical aid doth seem to have thee crown'd withal.", "Enter a messenger", "Lady Macbeth: What is your tidings?", "Messenger: The king comes here to-night", "Lady Macbeth: Thou'rt mad to say it. Is not thy master with him? who, were't so, would have inform'd for preparation.", "Messenger: So please you, it is true: our thane is coming. One of my fellows had the speed of him who, almost dead for breath, had scarcely more, than would make up his message.", "Lady Macbeth: Give him tending, he brings great news.", "Exit Messenger"],
        question: "What will Lady Macbeth do?",
        options: ["Plot murder", "Be a great host"],
        links: ["ladyMacbethYesMurder", "ladyMacbethNoMurder"]
    },
    ladyMacbethNoMurder: {
        description: ["Lady Macbeth: This is a great fortune! The King doesn't visit just anyone's home for dinner. We are honored!", "Lady Macbeth greets Macbeth with pride upon his arrival home", ],
        question: "Continue",
        options: ["Continue"],
        links: ["housePreparesDinner"]
    },
    housePreparesDinner: {
        description: ["The house prepares for dinner fit for a King", "Macbeth wonders about the witches prophecy, but forgets about it during the dinner festivities"],
        question: "Continue",
        options: ["Continue"],
        links: ["greatKingDinner"],
    },
    greatKingDinner: {
        description: ["Duncan: That was a lovely dinner. Thank you honorable Macbeth, you are truly in my trust.", "Duncan returns to his home in full health", "Lady Macbeth dismisses Macbeth's strange interactions with the witches, calling them unmanly and unholy", "Macbeth also dismisses them as absurd"],
        question: "Continue",
        options: ["Continue"],
        links: ["kingDuncanDies"],
    },
    kingDuncanDies: {
        description: ["King Duncan, on his deathbed from a life lived to the fullest", "Duncan: My most trusted Macbeth, you have worked under me for the past few years in my failing health. It is now time for me to pass on my torch and title to another, none other than you.", "Macbeth is crowned King in good favor, it just took time", "Lady Macbeth and Macbeth reflect on the old forgotten prophecy from the witches like an old story"],
        question: "Finish",
        options: ["Finish"],
        links: ["endingHonorableKingMacbeth"],
    },
    ladyMacbethYesMurder: {
        description: ["Lady Macbeth: The raven himself is hoarse that croaks the fatal entrance of Duncan under my battlements. Come, you spirits that tend on mortal thoughts, unsex me here, and fill me from the crown to the toe top-full of direst cruelty! make thick my blood. Stop up the access and passage to remorse that no compunctious visitings of nature shake my fell purpose, nor keep peace between the effect and it! Come to my woman's breasts, and take my milk for gall, you murdering ministers, wherever in your sightless substances you wait on nature's mischief! Come, thick night, and pall thee in the dunnest smoke of hell, that my keen knife see not the wound it makes, nor heaven peep through the blanket of the dark, to cry 'Hold, hold!'"],
        question: "Continue",
        options: ["Continue"],
        links: ["macbethAndLadyPlanMurder"]
    },
    macbethAndLadyPlanMurder: {
        description: ["Macbeth arrives home and is greeted by Lady Macbeth", "Lady macbeth proposes her plan to Macbeth to murder King Duncan"],
        question: "Continue",
        options: ["Continue"],
        links: ["DuncanEntersMacbethCastle"]
    },
    DuncanEntersMacbethCastle: {	// Needed?
        description: ["King Duncan arrives to the Macbeth Castle", "He complements their home", "He wishes to speak with Macbeth rather than Lady Macbeth"],
        question: "Continue",
        options: ["Continue"],
        links: ["macbethAfraidOfMurder"]
    },
    macbethAfraidOfMurder: {
        description: ["Macbeth is in his room", "Lady Macbeth is upset that he has left the chamber, King Duncan has asked for Macbeth", "Macbeth isn't feeling great about planning to murder King Duncan", "Lady Macbeth thinks that he is unmanly for such thoughts"],
        question: "What will Macbeth do?",
        options: ["Agree to murder", "Put Lady Macbeth in her place", "Say no to murder"],
        links: ["banquoFleanceOnWatch", "macbethStereotypeMan", "macbethSayNoToMurder"]
    },
    macbethStereotypeMan: {
        description: ["Macbeth insults Lady macbeth for having such ambition", "Macbeth says she is unwomanly for such thoughts"],
        question: "What will Macbeth do?",
        options: ["Plot murder himself", "Say no to murder"],
        links: ["macbethSoloMurder", "macbethSayNoToMurder"]
    },
    macbethSoloMurder: {
        description: ["Macbeth decides to plan murder on his own", "He kills King Duncan while he sleeps, and then freaks out about the blood", "The guards wake up and Macbeth is caught red-handed at the scene of the crime", "Macbeth is tried for his murderous crime and found guilty"],
        question: "Continue",
        options: ["Continue"],
        links: ["endingTraitorMacbeth"]
    },
    macbethSayNoToMurder: {
        description: ["Macbeth shuts down the idea of murder", "Macbeth double-trusts the King, he doesn't want to commit murder among friends"],
        question: "What should Lady macbeth do?",
        options: ["Plot murder herself", "Say no to murder"],
        links: ["ladyMacbethSoloMurder", "housePreparesDinner"]
    },
    ladyMacbethSoloMurder: {
        description: ["Lady Macbeth decides to plan murder on her own", "Lady Macbeth thinks ahead and compromises the guards with alcohol", "She enters Duncan's room, but cannot bring herself to kill the kind King, as he looks like her own father", "Lady Macbeth leaves the room and Duncan is safe"],
        question: "Continue",
        options: ["Continue"],
        links: ["endingCowardLadyMacbeth"]
    },
// Act 2
banquoFleanceOnWatch: {	// Needed?
        description: ["Banquo and Fleance are on watch", "Banquo is tired from bad dreams about the witches", "Banquo wants to discuss the witches with Macbeth"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethKillsDuncan: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
ladyMacPutsDaggersBack: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
ladyMacBraverThanMacbeth: {	// Needed?
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
porterRant: {	// Needed?
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
awakeDuncan: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
menMakeAMeeting: {
        description: ["todo: todo"],
        question: "What will Malcolm and Donalbain do?",
        options: ["Stay", "Flee"],
        links: ["malcolmDonalbainStay", "malcolmDonalbainFlee"]
    },
malcolmDonalbainLeave: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
malcolmDonalbainStay: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
rossAndOldMan: {  // Needed?
        description: ["todo: todo"],
        question: "Continue",
        options: ["Continue"],
        links: ["introMacduff"]
    },
introMacduff: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
// Act 3
banquoWonders: {
        description: ["Enter Banquo", "todo: todo"],
        question: "Continue",
        options: ["Continue"],
        links: ["kingMacbethPlansDinner"]
    },
kingMacbethPlansDinner: {
        description: ["Sennet sounded. Enter Macbeth, as king, Lady Macbeth, as queen, Lennox, Ross, Lords, Ladies, and Attendants", "todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethPlansBanquoMurder: {
        description: ["Exit Attendant", "todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethSpeaksToMurderers: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
kingMacbethInformsLadyMacbeth: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
banquoMurdered: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
murderersDontKill: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
murderersKillBanquo: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
murderersKillBoth: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethHearsOfNone: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethHearsOfBanquo: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethHearsOfBoth: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethGreetsBanquo: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethSeesBanquo: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethSeesBoth: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
pleasantDinner: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
dinnerEnded: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethFitBanquo: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethFitBoth: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
dinnerBroken: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
// Scene 3.5
introHecate: {  // Needed?
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macduffUpdate: {  // Needed?
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
// Act 4
witchesMakePotion: {  // Needed?
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macbethWantsInfo: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
apparitionOne: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
apparitionTwo: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
apparitionThree: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
ghostBanquoKings: {  // Needed?
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
lennoxFoundMacbeth: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
// Scene 4.2
ladyDuffWonders: {  // Needed?
        description: ["todo: todo"],
        question: "Continue",
        options: ["Continue"],
        links: ["sonMacduffWonders"]
    },
sonMacduffWonders: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macduffFamilyMurdered: { // Missing the scene that macbeth decides to do this
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
macduffFamilySad: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
// Scene 4.3



    // 0-1-2-4-5-6-8-9-11-12-13-15-16-17-18
    //******************** Endings ********************//
    endingHonorableKingMacbeth: {   // Good ending 1/?
        description: ["Honorable King Macbeth [Ending 1/?]"],
        question: "",
        options: [""],
        links: [""],
    },
    endingTraitorMacbeth: {   // Bad ending 2/?
        description: ["Unprepared Macbeth [Ending 2/?]"],
        question: "",
        options: [""],
        links: [""],
    },
    endingCowardLadyMacbeth: {   // Good ending 3/?
        description: ["Faint-Hearted Lady Macbeth [Ending 3/?]"],
        question: "",
        options: [""],
        links: [""],
    },
    //******************** Todo Scene ********************//
    todo: {
        description: ["todo: todo"],
        question: "todo",
        options: ["todo"],
        links: ["todo"]
    },
}

