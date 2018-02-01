//ALCHEMY CODE LAB
const name = prompt('Do you enjoy being at Alchemy Code Lab?');
console.log(name);

if (name.toLowerCase() === 'yes' || name.toLowerCase() === 'y'){
    alert('Hey, me too!');

} else if (name.toLowerCase() === 'no' || name.toLowerCase() === 'n'){
    alert;('Then why are you here?');

} else {
    alert('Time to code or get off the pot!');
}

//PACKERS FAN
const header = prompt('Are the Green Bay Packers your favorite NFL team?');
console.log(header);

if (header.toLowerCase() === 'yes' || header.toLowerCase() === 'y'){
    alert('Well yeah of course they are!');

} else if (header.toLowerCase() === 'no' || header.toLowerCase() === 'n'){
    alert('I knew you had bad taste');

} else {
    alert('Nobody ever went pro by being indecisive..');
}

//HAVE YOU SEEN THIS SHOW
const show = prompt('Have you seen the show Black Mirror?');
console.log(show);            

if  (show.toLowerCase() === 'yes' || show.toLowerCase() === 'y' ){
    alert('It\'s good right?! but dont watch it before bed!');

} else if (show.toLowerCase() === 'no' || show.toLowerCase() === 'n' ){
    alert('Don\'t watch it it\'s scary!!');

} else {
    alert('Invalid answer YO!!');
}

//DRINK MATE
const tea = prompt('Do you drink Yerba Mate?');
console.log(tea);

if  (tea.toLowerCase() === 'yes' || tea.toLowerCase() === 'y'){
    alert('I\'m all hyped out on caffeine!!');

} else if (tea.toLowerCase() === 'no' || tea.toLowerCase() === 'n'){
    alert('It gets you hyped on caffeine!!' );

} else {
    alert('This is a yes or no quesion bro');
}

//MUSIC
const music = prompt('Do you listen to ambient music when falling asleep?');
console.log(music);

if (music.toLowerCase() === 'yes' || music.toLowerCase() === 'y'){
    alert('STILL HYPED ON CAFFEINE!!');

} else if (music.toLowerCase() === 'no' || music.toLowerCase() === 'n'){
    alert('It\'s relaxing you should try it...');

} else {
    alert('I wish a thousand years insomnia upon you.. ');
}

//GUESS MY AGE
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
    }}

//HOW MANY STATES
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
    }}