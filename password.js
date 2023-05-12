let passowordLength =16
const inputEl = document.querySelector("#passoword")
function generatePassword(){
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNOPQRSTVWXYZ123456789?!@&*(){}[]"

    let passoword = ""

    for ( let i = 0; i<passowordLength; i++){
        const randomNumber = Math.floor(Math.random()* chars.length)
        passoword += chars.substring(randomNumber,randomNumber + 1)
    }

    
    inputEl.value = (passoword)
}

function copy(){
    navigator.clipboard.writeText(inputEl.value)
}


const passowordLengthEl = document.querySelector("#passoword-length")
passowordLengthEl.addEventListener("input", function(){
     passowordLength = passowordLengthEl.value
    console.log(passowordLength)
    generatePassword()
})

document.querySelector("#copy-1").addEventListener("click",copy)
document.querySelector("#copy-2").addEventListener("click",copy)
generatePassword()
