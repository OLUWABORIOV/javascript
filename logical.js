let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}
function generateCertificate() {
    console.log("Generating certificate....")
}
let hasSolvedChallenge = false
let hasHintLeft = false

if (hasSolvedChallenge === false && hasHintLeft === false)
showSolution()

function showSolution() {
  console.log("Showing the solutio....")
}


let age = 15
if  (age < 6) {
    console.log("free")
}
else if (age < 18) {
    console.log("child discount")
}

else if (age < 27) {
    console.log("student discount")
}
else if (age < 67) {
    console.log("full price")
}
else  {
    console.log("senior citizen discount")
}
let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

