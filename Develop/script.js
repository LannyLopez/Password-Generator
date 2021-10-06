// Assignment code here
var lowerCase = "abcdefghijklmnoqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var aNumbers = "1234567890";
var specialCharacters = "!@#$%^&*()";

function randomUpCase(){
  return upperCase[Math.floor(Math.random() * upperCase.length)]
};

function randomLowerCase(){
  return lowerCase[Math.floor(Math.random() * lowerCase.length)]
};

function randomNumber(){
  return aNumbers[Math.floor(Math.random() * aNumbers.length)]
};

function randomSpCharacter(){
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
};

function generatePassword(){
  // declare var in final result 
var passLength = window.prompt("Pick between 8-128 for a password")
 if(passLength <= 7 || passLength >= 129){
   window.alert ("Please pick a valid option")
  return 
   
 }
console.log(passLength)

 var upCase = window.confirm("Would you like Uppercase Characters");
 // if (upCase === true) include uppercase letters

  if (upCase === true){randomUpCase();}

 var lowCase = window.confirm("Would you like Lowercase Characters")
// if (lowCase === true) include lower case
  
  if (lowCase === true){randomLowerCase();}


 var numbs = window.confirm("Would you like Numbers")
//if (numbs === true) include numbers

  if (numbs === true){randomNumber();}

 var sCharacters = window.confirm("Would you like Special Characters")
//if (sCharacters === true) include special characters

  if (sCharacters === true){randomSpCharacter();}
//store answers in obj
 const userResponse = {
  pLength: passLength,
  upper: upCase,
  low: lowCase,
  numz: numbs,
  special: sCharacters,
};




console.log(userResponse)

//tell user that they must have at least one option chosen
if (!upCase && !lowCase && !numbs && !sCharacters){
window.alert("Please chose at least one option")
return };
const passwordCharacter = []
for(let i = 0; i < passLength; i++) {
const character = userResponse[Math.floor(Math.random() * passLength) ]
passwordCharacter.push(character)
}
return passwordCharacter

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);