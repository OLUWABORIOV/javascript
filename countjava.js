// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
//for ( let count = 10;  count < 20;  count += 1 )  {
    
 //   console.log(count)

//}
//LOOP LOOP LOOP
// START        FINISH STEP SIZE
for (let i = 0; i < 6; i += 1) {
    console.log(i)
}
//start          finish   stepsize
for (let i = 10; i < 101; i += 10) {
    console.log(i)
}


for (let i = 0; i < Cards.length; i ++) {
    console.log(cards[i])
}

for (let i = 0; i < cards.lenght; i ++) {
    console.log([i])
}
for (let i = 0; i < sentence.length; i ++) {
    greetingEl.textContent += sentence[i]
}

let randomNumber = Math.random()

console.log(randonNumber)

let randomNumber = Math.random() * 6
console.log(randomNumber)




//letrandomNumber = Math.random()

//console.log(randomNumber)



/* 

What does Math.random() do?

Your answer: 0.58228337457779

let flooredNumber = Math.floor(12.4)

console.log(flooredNumber)


/* 

What does Math.floor() do to positive numbers?

Your answer:

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
