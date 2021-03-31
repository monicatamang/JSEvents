// Creating a function that randomly changes the viewport's colour when the user hovers over the header title
function changeBackgroundColor(e) {
    let colors = [`white`, `lightgrey`, `beige`, `lightcyan`, `lavender`];
    let randomNum = Math.floor(Math.random() * colors.length);
    page.style.background = colors[randomNum];
}

// Creating a function that shows a video and changes the color of the box's background when the user clicks on the button
function showVideo(e) {
    document.getElementById(`shortVideo`).style.display = `block`;
    document.getElementById(`clickEffectContainer`).style.background = `#bc8f8f80`;
    document.getElementById(`instructionsOne`).style.background = `#bc8f8f80`;
}

// Creating a function that when the user clicks on their space bar, a new tweet is generated and printed to the DOM each time
// Note: Since e is an array of objects, we can restrict the 'keypress' event to have the user only press on the space bar and not any other key by using the 'keyCode'
// Creating an array of 10 tweets as strings (taken from Assignment W9C)
function generateTweet(e) {
    let tweets = [
        {
            tweet: `Thanks is short for Tom Hanks`,
            username: `@Co_Mill`,
            createdAt: `03-09-2021`,
            age: 26
        },
    
        {
            tweet: `I hope this email finds you lost at sea`,
            username: `@rudeunicorns`,
            createdAt: `02-21-2021`,
            age: 32
        },
    
        {
            tweet: `People watching is my favourite hobby`,
            username: `@KeithLeakJr`,
            createdAt: `10-28-2019`,
            age: 17
        },
    
        {
            tweet: `Yogurt expires exactly two days before you decide you want it. It's science.`,
            username: `@supershayne`,
            createdAt: `05-01-2020`,
            age: 29
        },
    
        {
            tweet: `I was born at a very young age`,
            username: `@kimmydoesstuff`,
            createdAt: `12-17-2020`,
            age: 27
        },
    
        {
            tweet: `I hope the all pigeons have a great day today`,
            username: `@Co_Mill`,
            createdAt: `01-14-2019`,
            age: 14
        },
    
        {
            tweet: `I just read "22nd" as "secondly second" in my head just now`,
            username: `@SmoshIan`,
            createdAt: `08-03-2020`,
            age: 20
        },
    
        {
            tweet: `There isn't a single virgo who believes in astrology`,
            username: `@supershayne`,
            createdAt: `02-08-2017`,
            age: 14
        },
    
        {
            tweet: `Who called it a subtweet instead of a tea sis statement`,
            username: `@supershayne`,
            createdAt: `09-05-2016`,
            age: 13
        },
    
        {
            tweet: `Why is it called creepypasta and not fettuccino afraido`,
            username: `@blaine_capatch`,
            createdAt: `02-03-2021`,
            age: 18
        }
    ];
    if(e.keyCode === 32) {
        let randomNum = Math.floor(Math.random() * tweets.length);
        document.getElementById(`randomTweets`).innerText = tweets[randomNum].tweet;
        document.getElementById(`usernames`).innerText = tweets[randomNum].username;
        document.getElementById(`dateCreated`).innerText = tweets[randomNum].createdAt;
    }
}

// Creating a function that 'reveals' an image when the user hovers over the pink box by changing the opacity of the image so that it shows up on the page, changing the background colour of the box, adding transition effects when the image is revealed
function revealImage(e) {
    square.style.opacity = `0`;
    square.style.transition = `all 0.5s ease-in-out`;
    document.querySelector(`img`).style.opacity = `1`;
    document.querySelector(`img`).style.transition = `all 5s ease-in-out`;
    document.getElementById(`instructionsThree`).style.background = `#daa52033`;
    document.getElementById(`hoverEffectContainer`).style.background = `#daa52080`;
}

// Adding an event when the user hovers over the header title and calling the function that carries out that specific event
let headerTitle = document.querySelector(`h1`);
headerTitle.addEventListener(`mouseover`, changeBackgroundColor);

// Adding an event when the user clicks on the 'watch video' button and calling the function that carries out that specific event
let videoButton = document.querySelector(`button`);
videoButton.addEventListener(`click`, showVideo);

// Adding an event when the user presses on their space bar and calling the function that carries out that specific event
let page = document.body;
page.addEventListener(`keypress`, generateTweet);

// Adding an event when the user hovers over the pink box and calling the function that carries out that specific event
let square = document.getElementById(`box`);
square.addEventListener(`mouseover`, revealImage);