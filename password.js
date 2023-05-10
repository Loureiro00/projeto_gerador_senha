let passowordLength =16
function generatePassword(){
    const chars = "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNOPQRSTVWXYZ123456789?!@&*(){}[]"

    let passoword = ""

    for ( let i = 0; i<passowordLength; i++){
        const randomNumber = Math.floor(Math.random()* chars.length)
        passoword += chars.substring(randomNumber,randomNumber + 1)
    }

    const inputEl = document.querySelector("#passoword")
    inputEl.value = (passoword)
    
    console.log(passoword)

}

const passowordLengthEl = document.querySelector("#passoword-length")
passowordLengthEl.addEventListener("input", function(){
     passowordLength = passowordLengthEl.value
    console.log(passowordLength)
    generatePassword()
})

generatePassword()