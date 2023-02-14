// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// arrays containing characters that can compose a password
var charactersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var charactersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var charactersSpecial = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var charactersNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// declare empty master array that will contain characters for randomized password based on user choice
var passwordChoice = [];

// declare variable to contain T/F for gen pw
var createPassword = confirm("Would you like to generate a password?");

// create funtion generatePassword
function generatePassword() {
  characterChoice();
  var sample = [];
  // for loop to index master array for passwordLengthNum and push into password
  for (let i = 0; i <= passwordLengthNum; i++) {
    sample.push(passwordChoice[Math.floor(Math.random() * passwordChoice.length)]);
  };
  return sample.join('');
  // password.toString();
};

// ensure users wants to create a password
if (createPassword == true) {
  passwordParameters();
  passwordChoiceValidation();
} else {
  alert("Maybe next time. Refresh the browser and try again.");
};

// determine qualifications for password
function passwordParameters() {
  // prompt for length, in characters, of pw to be generated, stored in passwordLength
  passwordLength = prompt("Between 8 and 128 characters, how many long would you like the password to be? Any decimal or fractions will be rounded down to the nearest whole number.", "8-128");
  // parseInt changes string to num, stored in passwordLengthNum
  passwordLengthNum = Math.floor(parseInt(passwordLength));
  // ensure user inputs whole number between 8 and 128
  if ((passwordLengthNum < 8) || (passwordLengthNum > 128)) {
    alert("Please enter a whole number between 8 and 128. Refresh the page and try again.");
  } else {
    // Y/N for password to contain uppercase letters
    useUpper = confirm("Do you want your password to include UPPERCASE LETTERS?");
    // Y/N for password to contain lowercase letters
    useLower = confirm("Do you want your password to include lowercase letters?");
    // Y/N for password to contain special characters
    useSpecial = confirm("Do you want your password to include special characters?");
    // Y/N for password to contain numbers
    useNumber = confirm("Do you want your password to include numbers?");
  };
};

// ensure user selected at least one character type
function passwordChoiceValidation() {
  if (!useUpper && !useLower && !useSpecial && !useNumber) {
    alert("You must select at least one type of character. Refresh the page and try again.");
  } else {
    // alert user to click button to gen pw
    alert("Please click the 'Generate Password' button to see your result.")
  }
}

// push character type arrays into master array depending on user choice
function characterChoice() {
  if (useUpper == true) {
    for (i = 0; i < charactersUpper.length; i++)
      passwordChoice.push(charactersUpper[i]);
  };
  if (useLower == true) {
    for (i = 0; i < charactersLower.length; i++)
      passwordChoice.push(charactersLower[i]);
  };
  if (useSpecial == true) {
    for (i = 0; i < charactersSpecial.length; i++)
      passwordChoice.push(charactersSpecial[i]);
  };
  if (useNumber == true) {
    for (i = 0; i < charactersNumber.length; i++)
      passwordChoice.push(charactersNumber[i]);
  };
};