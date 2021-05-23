// Assignment code here

//Variables

var confirmLower = 'abcdefghijklmnopqrstuvwxyz';
var confirmUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var confirmNumber = '123456789'
var confirmSpecial = ' !#$%&()*+,-./<=>?@[\]^_`{|}~'

//random number generator function
function randomNumber(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min)
    return value;
};

//**generates a random lowercase /
function randomSymbol() {
    var value = confirmSpecial[randomNumber(0, (confirmSpecial.length) - 1)];
    return value;
};

//generates random number
function randomNumberChar() {
    var value = confirmNumber[randomNumber(0, (confirmNumber.length) - 1)];
    return value;
};

//generates random uppercase
function randomUpper() {
    var value = confirmUpper[randomNumber(0, (confirmUpper.length) - 1)];
    return value;
};

//generates random lowercase
function randomLower() {
    var value = confirmLower[randomNumber(0, (confirm.length) - 1)];
    return value;
};

//prompt to identify how long password will be
var findPassLength = function () {
    var passLength = parseInt(prompt("How many charecters do you want your password to contain?"));
    if (typeof (passLength) !== 'number' || passLength <= 8 || passLength >= 128 || !passLength) {
        alert("Please enter valid number")
        return findPassLength();
    }
    return passLength;
};


//creating conditions for password:
var passConditions = function () {
    //creating  empty array
    var passArray = [];



    while (passArray.length === 0) {
        var lowerCase = confirm("Would you like your password to contain lowercase characters?");
        if (lowerCase === true) {
            //adds the random function
            passArray.push(randomLower);
        } else {
        };

        var upperCase = confirm("Would you like your password to contain uppercase characters?")
        if (upperCase === true) {
            // adds the random function
            passArray.push(randomUpper);
        } else {

        };

        var specChar = confirm("Would you like your password to contain special charatcter?")
        if (specChar === true) {
            //adds the random function
            passArray.push(randomSymbol);
        }
        else {
        };

        var numb = confirm("Would you like your password to contain numbers?")
        if (numb === true) {
            //adds the random function
            passArray.push(randomNumberChar);
        }
        else {
        };

        //check to see if there is any item inserted 
        if (passArray.length === 0) {
            alert("I'm sorry, you need to type at least 1 character to generate the password, please try again");
        }
        else {
            return passArray;
        }

    }
};

//generate password function
function generatePassword() {
    var specLength = findPassLength();
    passArray = passConditions();
    password = "";

    //ensur at least one type of character is in the password
    for (var i = 0; i < passArray.length; i++) {
        var passChar = passArray[i]();
        password = password + passChar;
    }

    //resets the password length variable
    var runningLength = password.length;
    //address the rest of variable
    for (var i = 0; i < specLength - runningLength; i++) {
        var passChar = passArray[randomNumber(0, (passArray.length - 1))]();
        password = password + passChar;
    }
    return password;

};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
