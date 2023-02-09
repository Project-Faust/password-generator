// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// arrays containing characters that can compose a password
const charactersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charactersSpecial = ["!", "@", "#", "$", "%", "^", "*"];
const characterNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// click button to start sequence for generating pw
if (confirm("Would you like to generate a password?") == true) {
  // prompt for length, in characters, of pw to be generated, stored in passwordLength
  passwordLength = prompt("Between 8 and 128 characters, how many long would you like the password to be?", "8-128");
  // parseInt changes string to num, stored in passwordLengthNum
  passwordLengthNum = parseInt(passwordLength);
  // Y/N for password to contain uppercase letters
  useUpper = prompt("Do you want your password to include UPPERCASE LETTERS?")
    // Y/N for password to contain lowercase letters
  useLower = prompt("Do you want your password to include lowercase letters?")
    // Y/N for password to contain special characters
  useSpecial = prompt("Do you want your password to include special characters?")
    // Y/N for password to contain numbers
  useNumber = prompt("Do you want your password to include numbers?")
}

console.log(passwordLengthNum);

// get random uppercase letter
function randomUpper() {
  [Math.floor(Math.random(charactersUpper.length))]
};

// get random lowercase letter
function randomLower() {
  [Math.floor(Math.random(charactersLower.length))]
}

// get random special character
function randomSpecial() {
  [Math.floor(Math.random(charactersSpecial.length))]
};

// get random number
function randomNumber() {
  [Math.floor(Math.random(characterNumber.length))]
};

// for loop to index array(s) for passwordLengthNum
function generatePassword() {
  for (i = 0; i < passwordLengthNum++; i++) {
  }
};