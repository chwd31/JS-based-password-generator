// Assignment code here
// Need to have inputs of length, special characters, and should be validated
var passLength = prompt("choose a length between 8 to 128 characters")
var charType = prompt("should the password include Uppercase, numeric and/or special characters")
var specChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
var chars = "abcdefghijklmnopqrstuvwxyz"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  for (var i = 0; i <= passLength; i++) {
    if (specChar = "yes") {
      
    } else {
      var randomNumber = Math.floor (Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
