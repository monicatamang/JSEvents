// Creating a function that when the user clicks on their space bar, a new tweet is generated and printed to the DOM each time
// Note: Since e is an array of objects, we can restrict the 'keypress' event to have the user only press on the space bar and not any other key by using the 'keyCode'
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

function revealImage(e) {
    // console.log(e);
    // boxes[i].style.opacity = `0`;
    // let squares = document.getElementsByClassName(`box`);
    // for(i = 0; i < squares.length; i++) {
    
    // }
    // let boxOne = document.getElementById(`box1`);
    // boxOne.style.opacity = `0`;
    // boxOne.removeEventListener(`mouseover`, revealImage);
    // let boxTwo = document.getElementById(`box2`);
    // boxTwo.style.opacity = `0`;
    // let boxThree = document.getElementById(`box3`);
    // boxThree.style.opacity = `0`;
    // let boxFour = document.getElementById(`box4`);
    // boxFour.style.opacity = `0`;
    // let boxFive = document.getElementById(`box5`);
    // boxFive.style.opacity = `0`;
    // let boxSix = document.getElementById(`box6`);
    // boxSix.style.opacity = `0`;
    // let boxSeven = document.getElementById(`box7`);
    // boxSeven.style.opacity = `0`;
    // let boxEight = document.getElementById(`box8`);
    // boxEight.style.opacity = `0`;
    // let boxNine = document.getElementById(`box9`);
    // boxNine.style.opacity = `0`;
}

function showVideo(e) {
    document.getElementById(`shortVideo`).style.display = `block`;
    document.getElementById(`clickEffectContainer`).style.background = `#bc8f8f80`;
    document.getElementById(`instructionsOne`).style.background = `#bc8f8f80`;
} 

// Adding an event when the user presses on their space bar
let page = document.body;
page.addEventListener(`keypress`, generateTweet);

let boxes = document.getElementsByClassName(`box`);
for(i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener(`mouseover`, revealImage);
}

let videoButton = document.querySelector(`button`);
videoButton.addEventListener(`click`, showVideo);