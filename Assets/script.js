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
var charactersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charactersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charactersSpecial = ["!", "@", "#", "$", "%", "^", "*"];
var charactersNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// declare empty master array that will contain characters for randomized password based on user choice
passwordChoice = [];

// declare variable to contain T/F for gen pw
var createPassword = confirm("Would you like to generate a password?");

// prompt to start sequence for generating pw
if (createPassword == true) {
  // prompt for length, in characters, of pw to be generated, stored in passwordLength
  passwordLength = prompt("Between 8 and 128 characters, how many long would you like the password to be?", "8-128");
  // parseInt changes string to num, stored in passwordLengthNum
  passwordLengthNum = parseInt(passwordLength);
  // Y/N for password to contain uppercase letters
  useUpper = confirm("Do you want your password to include UPPERCASE LETTERS?");
  // Y/N for password to contain lowercase letters
  useLower = confirm("Do you want your password to include lowercase letters?");
  // Y/N for password to contain special characters
  useSpecial = confirm("Do you want your password to include special characters?");
  // Y/N for password to contain numbers
  useNumber = confirm("Do you want your password to include numbers?");
}
// ensure user input whole number between 8 and 128
// stop user input and alert
else {
  alert("Maybe another time.");
}

// // declare variables to push into password
// var charUpper;
// var charLower;
// var charSpecial;
// var charNumber;

// push character type arrays into master array depending on user choice
function characterChoice() {
if (useUpper == true) {
  for (let i = 0; i < charactersUpper; i++)
  passwordChoice.push(charactersUpper[i]);
};
if (useLower == true) {
  for (let i = 0; i < charactersLower; i++)
  passwordChoice.push(charactersLower[i]);
};
if (useSpecial == true) {
  for (let i = 0; i < charactersSpecial; i++)
  passwordChoice.push(charactersSpecial[i]);
};
if (useNumber == true) {
  for (let i = 0; i < charactersNumber; i++)
  passwordChoice.push(charactersNumber[i]);
};
};

characterChoice();
console.log(passwordChoice);

// create funtion generatePassword
function generatePassword() {
  var passwordString = "";
  characterChoice();
  // for loop to index master array for passwordLengthNum and push into password
  for (let i = 0; i < (passwordLengthNum + 1); i++) {
    passwordChoice[Math.floor(Math.random() * passwordChoice.length)];
    passwordString = passwordChoice.value;
    return passwordString;
  };
};


// // get random uppercase letter
// function randomUpper() {
//   charUpper = charactersUpper[Math.floor(Math.random() * charactersUpper.length)]
// };

// // get random lowercase letter
// function randomLower() {
//   charLower = charactersLower[Math.floor(Math.random() * charactersLower.length)]
// };

// // get random special character
// function randomSpecial() {
//   charSpecial = charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
// };

// // get random number
// function randomNumber() {
//   charNumber = charactersNumber[Math.floor(Math.random() * charactersNumber.length)]
// };