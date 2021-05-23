// Assignment code here

//Variables

var confirmLower = 'abcdefghijklmnopqrstuvwxyz';
var confirmUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var confirmNumber = '123456789'
var confirmSpecial = ' !#$%&()*+,-./<=>?@[\]^_`{|}~'

//random number generator function
function randomNumber(min,max){
    var value = Math.floor(Math.random()* (max-min+1)+min)
    return value;
};

//**generates a random lowercase /
function randomSymbol() {
    var value = confirmSpecial[randomNumber(0, (confirmSpecial.lenght) - 1)];
    return value;
};

//generates random number
function randomNumberChar() {
    var value = confirmNumber[randomNumber(0, (confirmNumber.lenght)-1)];
    return value;
};

//generates random uppercase
function randomUpper() {
    var value = confirmUpper[randomNumber(0, (confirmUpper.length)-1)];
    return value;
};

//generates random lowercase
function randomLower() {
    var value = confirmLower[randomNumber(0,(confirm.length)-1)];
    return value;
};

 //prompt to identify how long password will be
var findPassLenght = function() {
    var passLenght = prompt ("How many charecters do you want your password to contain?");
    if (typeof (parseInt(passLenght)) !=='number' || passLenght<= 8 || passLenght >=128 || !passLenght) {
        alert("Please enter valid number")
        return findPassLenght();
    }
    return passLenght;
};


//creating conditions for password:
var passConditions = function(){
    //creating  empty array
    var passArray = [];
    
}

while (passArray.lenght === 0){
    var lowerCase = confirm ("Would you like your password to contain lowercase characters?");
    if (lowerCase === true) {
        //adds the random function
        passArray.push(randomLower);
    } else{
    };

    var upperCase = confirm ("Would you like your password to contain uppercase characters?")
    if (upperCase === true){
        // adds the random function
        passArray.push(randomUpper);
    } else{

    };

    var specChar = confirm("Would you like your password to contain special charatcter?")
    if (specChar === true){
        //adds the random function
        passArray.push(randomSymbol);
       }
       else{
    };

    var numb = confirm("Would you like your password to contain numbers?")
    if (numb === true){
        //adds the random function
        passArray.push(randomNumberChar);
    }
        else{
        };

    
    
























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
