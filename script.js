
var lengthQ = parseInt(prompt("Please enter your desired password length (range 8 - 128 characters)."));
var specCharQ = confirm("Please select 'Ok' for special characters");
var upperQ = confirm("Please select 'Ok' for uppercase letters");
var lowerQ = confirm("Please select 'Ok' for lowercase letters");
var numsQ = confirm("Please select 'Ok' for numbers");
var newPassword = '';


var lolet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uplet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var ten = ['0','1','2','3','4','5','6','7','8','9'];
var special = ['!','@','%','*','.','/'];

// if (length < 8) {
//     alert("Please enter a number between 8 and 128");
// } else {
//     () 
//     } 
// }


// if (length > 128) {
//     alert("Please enter a number between 8 and 128");
// } else {
//     ()
// }

// generate a string of the chosen length
// loop thru the number of the length    


for (let i = 0; i < length; i++) {
    // for each number
    // add a rand lowercase letter to a string
    // gen a random letter
    // create and array of letters
    var lolet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        // pick a random number between one and 26
    var randomNumber = Math.floor(Math.random() * 25);;
        // use that number as an index of an array of letters
    var randomLetter = lolet[randomNumber];
    // add random letter to a string that your building
    newPassword = newPassword + randomLetter; 
}

/* display the new password */
alert(newPassword);

        // alert new password

    
    //     function name (condition1, condition2, condition3) {
    //     for loop
    // }

    // name(length, specCHar)

    //notes: 
    // create arrays outside; 
    // use two 'for loops', 
    // >>> 1st loop uses user input to create a new array for criteria chosen
    // >>> 2nd loop takes that array and pulls random chars to create the password.
    // create homepage background that says to follow on screen prompt.