let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true 
let message = ""

if (sum <= 20) {
  message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
   isAlive = false
}
console.log(message)


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

function Start Game() {
    
}








