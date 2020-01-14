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
var pickAll = '';

// generate a string of the choosen length
// loop thru the number of the length

var lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'];
var upLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var ten = ['0','1','2','3','4','5','6','7','8','9'];
var specChar = ['!','@','%','*','.','/'];

for (let i = 0; i < length; i++) {
    // for each number
    // add a rand lowercase letter to a string
    // gen a random letter
    // create and array of letters
    
        // pick a random number between one and 26
    var pickLett = Math.floor(Math.random() * 25);
    var pickNum = Math.floor(Math.random() * 10);
    var pickChar = Math.floor(Math.random() * 6);
        //var finalSel = Math.floor(Math.random());
        // use that number as an index of an array of letters
    var randomLowLet = lowLetters[pickLett];
    var randomUpLet = upLetters[pickLett];
    var randomNum = ten[pickNum];
    var randomChar = specChar[pickChar];
    // add random letter to a string that your building
    
    var pickAll = pickAll + randomLowLet + randomUpLet + randomNum + randomChar;
    // console.log(allPass)
    // var newPassword = allPass[pickAll];

}

// if they have spec chars
    // decrease the you password by x then add x amount of spec chars
// if they have nums
    // decrease the you password by x then add x amount of nums
    
    //splits an array into a sting


    // for (let i = 0; i < length; i++) {
    //     var newPassword = pickAll;
    // }

    // var final = toString(pickAll)
    // next I need to remove commas from the string?
    //can I divide the string by 4?

/* display the new passwrod */
alert(pickAll);
        // alert new password