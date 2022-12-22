// Assignment code here
// Need to have inputs of length, special characters, and should be validated
var passLength = prompt("choose a length between 8 to 128 characters")
var charLower = prompt("Should your password include lowercase? Yes/no")
var charUpper = prompt("Should your password include uppercase? Yes/no")
var specChar = prompt("Should your password include special characters? Yes/no")
var numeric = prompt("Should your password include numbers? Yes/no")


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // string of array to pull from
  var str = [ ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], 
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."],
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
]
// determining user input in password generator
  var user_input;
  charLower == "yes" ? user_input=str[0]: 0;
  charUpper == "yes" ? user_input+=str[1]: 0;
  specChar == "yes" ? user_input+=str[2]: 0;
  numeric == "yes" ? user_input+=str[3]: 0;

  if (user_input) {
    var x = Math.floor(Math.random() * passLength.length);
    var password = user_input[x];

    for (let i = 0; i<passLength; i++){
      x = Math.floor(Math.random() * passLength.length);
      console.log(x);
      password += user_input[x];
    }
  }else{
    alert("Must select an item from prompt.  Please reload page and start again");
  }
      
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
