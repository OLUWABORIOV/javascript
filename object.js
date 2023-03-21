let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log( course.tags)

let airbnbcastlelisting = {
    name: "Fenton",
    location: "North Berwick",
    host: "Alan",
    price: 2723,
    guests: 13,
    amenities: ["Shampoo", "Washer"]
    isconducive = true,
    airbnbisfine = true,
    if ( isconducive === true && airbnbisfine === true )
    console.log( airbnbcastlelisting.price )
    console.log( consol.price )
    console.log( console.guests)
}

let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/caste2.png"]
}

console.log(castle.price)
console.log(castle.isSuperHost)
        
    
// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {
    name: "OLUWABORI",
    chips: 200,
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playeEl = document.getElementById("player-el")
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl

// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

let person = {
    name: "OLUWABORI",
    age: 23,
    country: "Nigeria"
}

function logData() {
    console.log(person.name + "is" + person.age + "years old and lives in" + person.country)
}
logData()

