// Assignment code here
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S","T","U","V","W","X","Y","Z"];
var aNumbers = [1,2,3,4,5,6,7,8,9,0];
var specialCharacters = ["!","@","#","$","%","&","*"];


function generatePassword(){
var passLength = window.prompt("Pick between 8-128 for a password")
 if(passLength <= 7 || passLength >= 129){
   window.alert ("Please pick a valid option")
  return 
   
 }

 var upCase = window.confirm("Would you like Uppercase Characters");
 

 var lowerCase = window.confirm("Would you like Lowercase Characters")



 var Numz = window.confirm("Would you like Numbers")



 var sCharacters = window.confirm("Would you like Special Characters")



}
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