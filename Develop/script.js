// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var charactersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersSpecial = ["!", "@", "#", "$", "%", "^", "*"];
var characterNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// click button to start sequence for generating pw
if (confirm("Would you like to generate a password?") == true) {
  passwordLength = prompt("Between 8 and 128 characters, how many long would you like the password to be?", "8-128");
  passwordLengthNum = parseInt(passwordLength);
} 


// for loop to index array(s) for passwordLengthNum


// prompts for pw requirements: LENGTH (8-128); LOWERCASE; UPPERCASE; NUMERIC; SPECIAL
