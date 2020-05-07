// console.log("Up and running!");

// let cardOne = "queen";
// let cardTwo = "queen";
// let cardThree = "king";
// let cardFour = "king";

// console.log("User flipped " + cardOne);

// console.log("User flipped " + cardThree);


// alert('Hello, friends.');
// const cards = ["queen", "queen", "king", "king"];
const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

const cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        // console.log("You found a match!");
        alert("You found a match!");
    } else {
        // console.log("Sorry, try again.");
        alert("Sorry, try again.");
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    // let cardOne = cards[0];
    // cardsInPlay.push(cardOne);
    // console.log("User flipped " + cardOne);

    // let cardTwo = cards[2];
    // cardsInPlay.push(cardTwo);
    // console.log("User flipped " + cardTwo);

    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
        // if (cardsInPlay[0] === cardsInPlay[1]) {
        //     alert("You found a match!");
        // } else {
        //     alert("Sorry, try again.");
        // }
        checkForMatch();
    }
}

function createBoard() {

    for (let i = 0; i < cards.length; i++) {
        const cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

// flipCard(0);
// flipCard(2);

createBoard();


