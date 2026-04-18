// Sanjay Shipley April 17th 2026
const buttons = document.getElementById('buttons');
const message = document.getElementById('message');
const title = document.getElementById('mood-title');
// get all of the elements on that page that we need
const moods = {
    // contain all of the themes that the page will transition to
    happy:  {
        name: 'Happy',
        bg: '#FFD700',
        text: '#fcf7a9',
        message: 'Warm smiles and the suns kisses!'
    },
    calm:  {
        name: 'Calm',
        bg: '#a6f8ff',
        text: '#8ab9c2',
        message: 'Peaceful serenity of a beautiful day!'
    },
    excited:  {
        name: 'Excited',
        bg: '#63c940',
        text: '#2b571d',
        message: 'High-energy anticipation!'
    },
    chill:  {
        name: 'Chill',
        bg: '#424561',
        text: '#9da5eb',
        message: 'A clear mind and a quiet environment'
    },
    mysterious:  {
        name: 'Mysterious',
        bg: '#120000',
        text: '#610000',
        message: 'Shrouded in questions'
    }
};

buttons.addEventListener('click', function(event) {
    // add an event listener to the buttons
    if (event.target.classList.contains('mood-btn')) {
        // if one of their classes is mood-btn

        const mood = event.target.getAttribute('data-mood');
        const theme = moods[mood];
        // get the proper theme

        document.body.style.backgroundColor = theme.bg;
        document.body.style.color = theme.text;
        message.textContent = theme.message;
        title.textContent = theme.name;
        // change content accordingly
    }
});