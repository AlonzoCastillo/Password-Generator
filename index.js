const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15 // This sets the password length you want to have 
let passwordOne = document.getElementById("password-one") // this allows you to pull the javascript to the HTML page 
let passwordTwo = document.getElementById("password-two")

function randomCharacters() {
     let randomCharacter = Math.floor(Math.random() * characters.length)
     return characters[randomCharacter]
} // This function will return a random character from the array above but use the length to go through everyone. Math.floor sets it to a whole number, Math.random is a random decimal generator but only from 0-3 so i have to multiply by the characters.length to get the total range of chacters in the array.  

function generateNewPassword() {
    let newPassword = ""
    for (let i = 0; i < passwordLength; i++){
            newPassword += randomCharacters()
        }
        return newPassword
} // the variable newPassword is set to a blank sting, the for loop after that is then set to run the variable from above "passwordLength" all the way up to 15. this case, 15 characters because we passs through the randomCharacter function. the newPassword is then += to keep the character from before all the way up to 15 characters. then return the function to execute the end of the function
 
function generatePassword() {
    passwordOne.textContent = generateNewPassword()
    passwordTwo.textContent = generateNewPassword()
} // This button is then called by running this function to generate the password to the HTML template. 

