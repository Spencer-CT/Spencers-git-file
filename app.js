const questions = ['Do you enjoy being at Alchemy Code Lab?',
    'Are the Green Bay Packers your favorite NFL team?',
    'Have you seen the show Black Mirror?',
    'Do you drink Yerba Mate?',
    'Do you listen to ambient music when falling asleep?'
];

const verdict = ['yes', 'y', 'no', 'n'];

const affirmR = ['Hey, me too!',
    'Well yeah of course they are!',
    'It\'s good right?! but dont watch it before bed!',
    'I\'m all hyped out on caffeine!!',
    'STILL HYPED ON CAFFEINE!!'
];

const neggyR = ['Then why are you here?',
    'I knew you had bad taste',
    'Don\'t watch it it\'s scary!!',
    'It gets you hyped on caffeine!!',
    'It\'s relaxing you should try it...'
];

const otherwiseR = ['Time to code or get off the pot!',
    'Nobody ever went pro by being indecisive..',
    'Invalid answer YO!!',
    'This is a yes or no quesion bro',
    'I wish a thousand years insomnia upon you.. '
];

function queries() {
    for (let q = 0; q < 5 ; q++) {
        const header = prompt(questions[q]);
        console.log(header);
        
        if (header.toLowerCase() === verdict[0] || header.toLowerCase() === verdict[1]){
            alert(affirmR[q]);
        
        } else if (header.toLowerCase() === verdict[2] || header.toLowerCase() === verdict[3]){
            alert(neggyR[q]);
        
        } else {
            alert(otherwiseR[q]);
        }
    }
}

queries();

//GUESS MY AGE
function age() {
    for ( i = 0; i < 10; i++) {
        const guess = parseInt(prompt('How old am I? Take a guess.'));
        if( guess <= 14){
            alert('Too young, by a long shot.');
    
        }else if( guess < 20){
            alert('Keep goin up.');
    
        }else if( guess <= 26){
            alert('Oh why thank you. But no.');
    
        } else if( guess >= 28){
            alert('little too old');
    
        } else if( guess >= 30){
            alert('Not yet... Thankfully'); 
    
        }else if ( guess === 27){
            alert('Well I didn\'t think it was so obvious.. But yes!');
            break;
        }
    }
}

age();

//HOW MANY STATES
function states() {
    for ( i = 0; i < 4; i++) {
        const guess = parseInt(prompt('How many stated do you think I\'ve lived in?'));
        if( guess <2){
            alert('\"States\" means MORE than one..');
    
        }else if( guess < 3){
            alert('Getting closer.');
    
        }else if( guess > 3){
            alert('That is too many');
    
        }else if ( guess === 3){
            alert('Yep! Wisconsin, Colorado & Oregon');
            break;
        }
    }
}

states();