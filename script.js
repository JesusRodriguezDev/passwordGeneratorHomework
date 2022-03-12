// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "!@#$%^&*()"
  ]

  var charsToUse = "";

  var pass = ""

  var passLength = window.prompt("Enter password length from 8 to 128");
   if (!passLength || (passLength < 8 || passLength > 128)){
    window.alert('Password length cannot be blank and needs to be between 8 and 128 characters');
     return
   }


   var lowerCase = window.confirm("Would you like to include lower case letters?");

   if(lowerCase){
     window.alert("You would like to use lower case letters");
  }else {window.alert("You don't want to use lower case letters")}


  var upperCase = window.confirm("Would you like to include upper case letters?");

  if(upperCase){
    window.alert("You would like to use upper case letters");
 }else {window.alert("You don't want to use upper case letters")}

 var numeric = window.confirm("Would you like to include numbers?");

   if(numeric){
     window.alert("You would like to use numbers");
  }else {window.alert("You don't want to use numbers")}

  var specialChars = window.confirm("Would you like to include special characters?");

   if(specialChars){
     window.alert("You would like to use special characters");
  }else {window.alert("You don't want to use special characters")}

  if(lowerCase && upperCase && numeric && specialChars){
    charsToUse = characters[0] + characters[1] + characters[2] + characters[3];
  }else if(lowerCase && upperCase && numeric && !specialChars){
    charsToUse = characters[0] + characters[1] + characters[2];
  }else if(lowerCase && upperCase && !numeric && !specialChars){
    charsToUse = characters[0] + characters[1];
  }else if(lowerCase && !upperCase && !numeric && !specialChars){
    charsToUse = characters[0] ;
  }else if(lowerCase && !upperCase && numeric && specialChars){
    charsToUse = characters[0] + characters[2] + characters[3];
  }else if(lowerCase && !upperCase && numeric && !specialChars){
    charsToUse = characters[0] + characters[1] + characters[2];
  }else if(lowerCase && upperCase && numeric && !specialChars){
    charsToUse = characters[0] + characters[1] + characters[2];
  }else if(!lowerCase && !upperCase && !numeric && specialChars){
    charsToUse = characters[3];
  }else if(!lowerCase && !upperCase && numeric && specialChars){
    charsToUse = characters[2] + characters[3];
  }else if(!lowerCase && upperCase && numeric && specialChars){
    charsToUse = characters[1] + characters[2] + characters[3];
  }else if(!lowerCase && upperCase && !numeric && specialChars){
    charsToUse = characters[1] + characters[3];
  }else if(!lowerCase && upperCase && !numeric && !specialChars){
    charsToUse = characters[1] ;
  }else if(!lowerCase && !upperCase && numeric && !specialChars){
    charsToUse = characters[2] ;
  }else if(lowerCase && !upperCase && !numeric && specialChars){
    charsToUse = characters[0] + characters[2] ;
  }


  for(i = 0; i < passLength; i++){
    var randomNumber = Math.floor(Math.random() * charsToUse.length);
    pass += charsToUse.substring(randomNumber, randomNumber +1);
    
  }
  return pass;
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
