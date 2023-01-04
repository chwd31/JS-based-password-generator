// Assignment code here
// Need to have inputs of length, special characters, and should be validated

function generatePassword() {
  // string of arrays to pull from
  var str = [    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."],
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  ];

  // get user input
  var passLength = parseInt(prompt("choose a length between 8 to 128 characters"));
  var charLower = prompt("Should your password include lowercase? Yes/no");
  var charUpper = prompt("Should your password include uppercase? Yes/no");
  var specChar = prompt("Should your password include special characters? Yes/no");
  var numeric = prompt("Should your password include numbers? Yes/no");

  // validate passLength
  if (passLength < 8 || passLength > 128) {
    alert("Password length must be between 8 and 128 characters. Please reload the page and try again.");
    return;
  }

  // build user_input array based on user input
  var user_input = [];
  charLower == "yes" ? user_input.push(str[0]) : 0;
  charUpper == "yes" ? user_input.push(str[1]) : 0;
  specChar == "yes" ? user_input.push(str[2]) : 0;
  numeric == "yes" ? user_input.push(str[3]) : 0;

  if (user_input.length > 0) {
    // initialize password
    var password = "";

    // concatenate a random character from each array in user_input to password
    for (let i = 0; i < passLength; i++) {
      password += user_input[Math.floor(Math.random() * user_input.length)][Math.floor(Math.random() * user_input[0].length)];
    }

    return password;
  } else {
    alert("Must select at least one option from the prompts. Please reload the page and try again.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
