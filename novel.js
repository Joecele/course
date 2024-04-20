var scenes = {
    start: {
        background: 'dog.jpg',//Backrground image for scene
        dialog: "Welcome to the visual novel. To progress the story, click on the white text; you can't miss it!!!",//flavor text inside the box
        music:'theme03.mp3',//music that plays along it
        onContinue: function() { goToScene('start2'); }//clicking will take you to accoicated scene
    },
    start2: {
        background: 'dog.jpg',
        dialog: "Wow, you can follow instructions. Hooray! There will be a scenario where you have a choice. Click on the box to choose one!!!",
        choices: [//shows 2 boxes for users to click on
            { text: "The button that kills you", action: function() { goToScene('end2'); } },//clicking will take you to accoicated scene
            { text: "The button that continues the story. You should choose this one, you gotta bro", action: function() { goToScene('Thinker'); } }//clicking will take you to accoicated scene
        ]
    },
    Thinker: {
        background: 'Thinker.jpg',
        dialog: "You are the definition of an average Joe. Forgettable existence, who slaves away at his 9 to 5 job!!! But today is gonna change!!!",
        onContinue: function() { goToScene('choice1'); }
    },
    choice1: {
        background: 'choice1.png',
        dialog: "GET BACK TO WORK, YOU FUCKING JOBBER! YOU'RE USELESS. YOUR ASS IS USELESS! SLACK OFF ONE MORE TIME AND YOU'RE FIRED!",
        music: '9to5.mp3',
        choices: [
            { text: "Do your work like a good boy!!!!", action: function() { goToScene('Goodboypath'); } },
            { text: "Eat shit, asshole. I'm surprised you won the sperm race", action: function() { goToScene('FightBossMan'); } }
        ]
    },
    Goodboypath: {
        background: 'Depression.jpg',
        dialog: "This decision has skewed your life; you are complacent and less dependent.",
        onContinue: function() { goToScene('years'); }
    },
    years: {
        background: '60years.jpg',
        dialog: "Before you knew it, days, weeks, years, decades passed by. Fleeting opportunities passed by; time marched on, but you are left behind. Before you knew it, you are 60 years old.",
        onContinue: function() { goToScene('Goodbyesolong'); }
    },
    Goodbyesolong: {
        background: 'sad.jpg',
        dialog: "Now it's 80, at least you spent your years well, right???????",
        onContinue: function() { resetNovel(); }
    },


    FightBossMan: {
        background: 'Bossmanfight.png',
        dialog: "The Boss Lunges at you he raises his right arm to jab you. However You have no combat experience you only watched anime during your break. ",
        music:'Lunge.mp3',
        onContinue: function() { goToScene('CounterAttack'); }
    },
    CounterAttack: {
        background: 'Bossmanfight.png',
        dialog: "This is your moment you are at operating at 120% of your potential!!!",
        choices: [
            {
                text: "Unload 17 rounds into him",
                action: function() { goToScene('Unload17intohim'); }
            },
            {
                text: "Quickly shift your head away from the jab",
                action: function() { goToScene('dodge'); }

            }
        ]
    },
    dodge: {
        background: 'Dodge.png',
        dialog: " Holy shit it worked You thought to yourself. This is perfect moment to counter attack",
        choices: [
            {
                text: "Hook the fucker in the liver",
                action: function() { goToScene('Combo1'); }
            },
            {
                text: "RUN AWAAAYYYYYYYYYYYYY",
                action: function() { goToScene('RUN'); }

            }
        ]
    },
   Combo1: {
    background: 'combo1.webp',
    dialog: "You attempt a liver shot but...",
    onContinue: function() { goToScene('ComboBreaker'); }
},
ComboBreaker: {
    background: 'combobreaker.png',
    dialog: "DING! YOU ARE DONE AND FIRED. The boss yells and yells. You slumber into an abyss of despair.",
    onContinue: function() { resetNovel(); }
},
    RUN: {
        background: 'RUN',
        dialog: "YOU RAN AWAY FROM YOUR BOSS CAUSE YOU ARE NO MATCH YOU ARE NOTHING BUT USELESS ANT TO HIM",
        onContinue: function() { goToScene('RUN2'); }
    },
    RUN2: {
        background: 'RUN.png',
        dialog: "You arrive at a empty room. You look at the sunset through the glasswindow... The boss arrives",
        onContinue: function() { goToScene('Duel1'); }
    },
    Duel1: {
        background: 'Duel.png',
        dialog: "You stare at the boss... He too stares at you back",
        onContinue: function() { goToScene('Duel2'); }
    },
    Duel2: {
        background: 'Duel.png',
        dialog: "The Boss-'Any last words???'",
        onContinue: function() { goToScene('Duel3'); }
    },
    Duel3: {
        background: 'Duel.png',
        dialog: "You state with confidence Nah id win ",
        onContinue: function() { goToScene('Confrontation'); }
    },
    Confrontation: {
        background: 'KICK.jpg',
        dialog: "The boss sprints and jumps into the air preparing a dive kick. THE BOSS YELLS I WILL END YOUR WEAKASS YOUR WAGIE BODY IS MINE!",
        music:'redmist.mp3',
        choices: [
            {
                text: "Slide to the Left!!!",
                action: function() { goToScene('Goodending'); }
            },
            {
                text: "Counter attack again",
                action: function() { goToScene('Wow'); }
            }
        ]
    },
    Goodending: {
        background: 'Goodending.jpg',
        dialog: "Slide to the left!!! The boss falls and plummets. 5 seconds later, you hear a pitiful splat! Thanks for playing",
        music:'theme03.mp3',
        onContinue: function() { resetNovel(); }
    },
    Wow: {
        background: 'Wow.jpg',
        dialog: "You experience the full brunt of the force, resulting in you being kicked out at mach 10 out of the window. The boss laughs as you fall.",
        music:'bad end.mp3',
        onContinue: function() { resetNovel(); }
    },
    Unload17intohim: {
        background: '17rounds.png',
        dialog: "Your inability to conjure a firearm due to this being real life has resulted. A K.O on your behalf",
        music:'bad end.mp3',
        onContinue: function() { resetNovel(); }
    },
    end2: {
        background: 'end2.jpg',
        dialog: "What did i say it literally killed you",
        music:'bad end.mp3',
        onContinue: function() { resetNovel(); },//resets the novel and takes users back to start regarding reset novel

}
}
//Loads the visual novel setup
function initNovel() {
    document.getElementById('dialogDiv').addEventListener('click', function(event) {//checks if its a button or not if it is continue
        if (scenes[currentScene].onContinue && !event.target.matches('button')) {
            scenes[currentScene].onContinue();//continues to next scene
        }
    });
    goToScene('start');//loads first scene
}

function playMusic(track) {// play music
    var audioElement = document.getElementById('backgroundMusic');//access audio elements
    audioElement.src = track;//sets the source of file
    audioElement.play().catch(function(error) {
        console.error("Error has been present try restarting it ", error);
    });
}

function goToScene(sceneName) {
    var scene = scenes[sceneName];//retrives the details from scens object
    currentScene = sceneName;// sets the current scene variable


    var backgroundDiv = document.getElementById('background');
    backgroundDiv.style.backgroundImage = scene.background ? `url('${scene.background}')` : '';


    updateDialog(scene.dialog, scene.choices);// update dialog divison with new scene details


    manageMusic(scene.music);//manages music transition
}

function manageMusic(musicTrack) {
    var audioElement = document.getElementById('backgroundMusic');

    if (!audioElement.paused) {
        audioElement.pause();
    }

    audioElement.src = '';


    if (musicTrack) {
        audioElement.src = musicTrack;
        audioElement.play().catch(function(error) {
            console.error("Error has been present try restarting it ", error);
        });
    }
}





//updates the text and chocices
function updateDialog(dialog, choices) {
        var dialogDiv = document.getElementById('dialogDiv');
        dialogDiv.innerHTML = '';//clearrs text that exists

        var dialogText = document.createElement('p');//creates new paragrahp
        dialogText.textContent = dialog;//set text based on dialog
        dialogDiv.appendChild(dialogText);// adds parahraph


        if (choices) {//if theres choices
            choices.forEach(function(choice) {
                var button = document.createElement('button');//puts text on button
                button.textContent = choice.text;
                button.onclick = function() {
                    choice.action();//ensures action is on click
                    event.stopPropagation();
                };
                dialogDiv.appendChild(button);
            });
        }
    }

function resetNovel() {
    goToScene('start');// goes to teh start
}
