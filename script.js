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
			let card ={
				suit: suits[i],
				value: values[j]
			};
			deck.push(card);
		}
	}
	return deck;
}

function getCardString(card)
{
	return card.value + " of " + card.suit;
}

function getNextCard(){
	return deck.shift();
}

let deck = createDeck();

let playerCards = [ getNextCard(),getNextCard() ];

console.log("Welcome to blackjack");

console.log("you are dealt: ");
console.log(" " + getCardString(playerCards[0]) );
console.log(" " + getCardString(playerCards[1]) );