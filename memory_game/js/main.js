let cards = [
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
let cardsInPlay = [];

function shuffle(deck) {
    var i = deck.length,
        j = 0,
        k;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        k = deck[i];
        deck[i] = cards[j];
        deck[j] = k;
    }
};

function resetWrongMatch(){

    let cardElement = document.getElementsByTagName("img");
    for (var i = 0; i < cards.length; i++){
        cardElement[i].setAttribute("src","images/back.png");
        cardElement[i].setAttribute("data-id",i);
    };
    cardsInPlay = [];
};

function resetFinishedMatch(){
    resetWrongMatch();
    shuffle(cards);
};

let x=0;
function checkForMatch(){
    if (cardsInPlay.length === 4){
        document.getElementById("game-text").innerHTML = "You won!";
        setTimeout(resetFinishedMatch,500);
    }
    else if (cardsInPlay.length === 2){
        if (cardsInPlay[0].rank === cardsInPlay[1].rank) {        
            document.getElementById("game-text").innerHTML = "You found a match!";
        } else {
            document.getElementById("game-text").innerHTML = "Sorry, try again.";
            setTimeout(resetWrongMatch, 250);
        }
    }    
};

function flipCard(){
    let cardId = this.getAttribute("data-id");
    cardsInPlay.push(cards[cardId]);
    this.setAttribute("src",cards[cardId].cardImage);
    checkForMatch();
};

function createBoard(){
    for (var i = 0; i < cards.length; i++){
        let cardElement = document.createElement("img");
        cardElement.setAttribute("src","images/back.png");
        cardElement.setAttribute("data-id",i);
        cardElement.addEventListener("click",flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }
    shuffle(cards);
};

createBoard ();