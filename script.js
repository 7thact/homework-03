// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }


/* prompt for the stuff */
// prompt for lenght stor in var
var length = parseInt(prompt("Please enter your desired password length"));
// prompt for spec cahr stor in var
var specChar = confirm("Please select 'Ok' for special characters");
// prompt for upper stor in var
var upper = confirm("Please select 'Ok' for upper case letters");
// prompt for lower stor in var
var lower = confirm("Please select 'Ok' for lower case letters");
// prompt for nums stor in var
var nums = confirm("Please select 'Ok' for numbers");

// DO SOMETHING
// display user inputs
// console.log(length, specChar, upper, lower, nums)
var newPassword = '';

// generate a string of the choosen length
// loop thru the number of the length

for (let i = 0; i < length; i++) {
    // for each number
    // add a rand lowercase letter to a string
    // gen a random letter
    // create and array of letters
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'];
        // pick a random number between one and 26
    var randomNumber = Math.floor(Math.random() * 25);;
        // use that number as an index of an array of letters
    var randomLetter = letters[randomNumber];
    // add random letter to a string that your building
    newPassword = newPassword + randomLetter;
}

// if they have spec chars
    // decrease the you password by x then add x amount of spec chars
// if they have nums
    // decrease the you password by x then add x amount of nums



/* display the new passwrod */
alert(newPassword);
        // alert new password