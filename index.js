 
let cards = [] //array is an ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
      return 10
    }  else if (randomNumber === 1) {
         return 11
    } else {
        return randomNumber
    } 
 }


function  startGame() {
 isAlive = true
 renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++) {
      cardsEl.textContent += cards[i] + " "
    }
    

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
  console.log(cards)
  renderGame()
}

//function rollDice() {
//  let randomNumber = Math.floor(Math.random() * 6) + 1
 // return  randomNumber
//}
 //console.log( (rollDice) )
/* 

Write down all the possible values randomNumber can hold now!

 


*/



/* 

Write down all the possible values randomNumber can hold now!

 


*/
 




//letrandomNumber = Math.random()

//console.log(randomNumber)



/* 

What does Math.random() do?

Your answer: 0.58228337457779

*/
//if (sum < 21) {
//    console.log("Do you want to draw a new card? 🙂")
//}
//else if (sum === 21) {
//    console.log("Wohoo! You've got Blackjack! 🥳")
//}
//else if (sum > 21) {
//    console.log("You're out of the game! 😭")
//}

//let age = 22

//if (age < 21) {
//    console.log("You can not enter the club 😭")
//}
//else {
//    console.log("Welcome! 🥳")
//}

//let age = 45

//if(age < 100) {
//    console.log("Not eligible 😭")
//} else if (age === 100) {
//    console.log("Here is your birthday card from the king! 🥳")
//}
//else  {
//    console.log("Not eligible, you have already gotten one")
//}

