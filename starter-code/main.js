//variables to represent the cards
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//card length
var cardLength = 4; 


//function to create board
var createBoard = function() {

	//get the board 
	var gameBoard = document.getElementById("game-board");

	//create div elements representing the number of cards
	for(var i=0; i<cardLength; i++)
	{
		var divItem = document.createElement('div');
		divItem.className = 'card';
		gameBoard.appendChild(divItem);

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