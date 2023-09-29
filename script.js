//Properties
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let responseMessage = ""
let gameMessage = document.getElementById("message-element")
console.log(gameMessage)

// I'll store th total-element <p> in a new variable called theTotal
let theTotal = document.getElementById("total-element")
let theCards = document.getElementById("card-element")

function startGame(){
    playGame()
}

function playGame() {
    theCards.textContent = "Cards: " + cards[0] + " " + [1]
    // Display the total on the page
    theTotal.textContent = "Sum: " + sum
}

    if (sum < 21) {
        responseMessage = "Do you want another card?"
    } else if (sum === 21) {
        responseMessage = "Blackjack!"
        hasBlackjack = true
    } else if (sum > 21) {
        responseMessage = "You lose. Sorry, chump."
        isAlive = false
    }

    gameMessage.textContent = responseMessage

function newCard() {
    let card = 2
    sum += card
    cards.push(card)
    console.log(cards)
 playGame()
    }

    //Where should we start counting?
// Where is the finish line?
//What is the step size we should use?