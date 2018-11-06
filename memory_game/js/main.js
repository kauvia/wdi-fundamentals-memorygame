console.log("Up and running!");

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

function checkForMatch(){
    if (cardsInPlay.length === 2){
        if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
            document.getElementById("game-text").innerHTML = "You found a match!";
        } else {
            document.getElementById("game-text").innerHTML = "Sorry, try again.";
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
}

createBoard ();