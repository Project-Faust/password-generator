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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// click button to start sequence for generating pw
if (confirm("Would you like to generate a password?", "8-128") == true) {
  passwordLength = prompt("Between 8 and 128 characters, how many long would you like the password to be?");
  passwordLengthNum = parseInt(passwordLength);
} 
// else {
//   return
// }


// for loop to index array(s) for passwordLengthNum


// prompts for pw requirements: LENGTH (8-128); LOWERCASE; UPPERCASE; NUMERIC; SPECIAL
