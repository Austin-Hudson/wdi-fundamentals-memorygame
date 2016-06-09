//variable to represent the cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = []; 


//card length
var cardLength = 4; 

//images for cards
var backOfCard = "_Back.png";
var queenCard = "Spades 12.png";
var kingCard = "Spades 13.png";

//function to create board
var createBoard = function() {

	//get the board 
	var gameBoard = document.getElementById("game-board");

	//create div elements representing the number of cards
	for(var i=0; i<cards.length; i++)
	{
		var cardItem = document.createElement('img');
		cardItem.src = backOfCard; 
		cardItem.className = 'card';
		gameBoard.appendChild(cardItem);
		// this will set the card's 'data-card' to be the element of the array
		//data-attributes are meant to store data about an element that is not
		//tied to a style, i.e. "king"
		cardItem.setAttribute('data-card', cards[i]);
		// when a card is clicked the function isTwoCards will be executed
		cardItem.addEventListener('click', isTwoCards);

	}

}

var isMatch = function(cards){
	if (cards[0] === cards[1]) {alert("Cards Match!");}
	else {alert("Cards Don't Match!");}
	return cards[0] === cards[1]; 
}

//checks to see if there are cards in play
var isTwoCards = function(){
	// add card to array of cards in play
	cardsInPlay.push(this.getAttribute('data-card'));

	//get the card value and set it to it's value img
	var card = this.getAttribute('data-card');
	if (card === "queen"){
		this.src = queenCard; 
	}
	else if (card === "king"){
		this.src = kingCard; 
	}

	//if you have two cards in play check for match
	if(cardsInPlay.length === 2){
		//pass the cardsInPlay as an argument to isMatch function
		isMatch(cardsInPlay);

		//clear cards in play array for next try
		cardsInPlay = []; 

		//reload window
		location.reload(); 

	}
}

var resetCards = function() {
	for(var i=0; i<cards.length; i++) {
		document.getElementsByClassName("card").src = backOfCard; 
	}	

}


//call the create board
createBoard(); 

/*
if(cardOne === cardTwo){
	alert("You found a match!"); 
}


if else (cardOne !== cardThree){
	alert("Sorry, try again.");
}


if  else (cardOne !== cardFour){
	alert("Sorry, try again.");

/*
if else (cardTwo !== cardThree){
	alert("Sorry, try again.");
}

if else(cardTwo !== cardFour){
	alert("Sorry, try again.");
}

if else(cardThree === cardFour){
	alert("You found a match");
}
*/