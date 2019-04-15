//
//BlackJack
//by rastogiujj12
//

let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
let values = ['Ace', 'King', 'Queen' , 'Jack',
	'Ten', 'Nine', 'Eight', 'Seven', 'Six',
	'Five', 'Four', 'Three', 'Two'];



function createDeck(){
	let deck = []
	for(i=0;i<suits.length;i++){
		for(j=0;j<values.length;j++){
			deck.push(values[j] + " of " + suits[i]);
		}
	}
	return deck;
}

function getNextCard(){
	return deck.shift();
}

let deck = createDeck();



console.log(deck);



let playerCards = [ getNextCard(),getNextCard() ];

console.log("Welcome to blackjack");

console.log("you are dealt: ");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);