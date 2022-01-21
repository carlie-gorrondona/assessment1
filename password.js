const { monitorEventLoopDelay } = require('perf_hooks');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("Hello! Welcome to Password Validator.");

reader.question("Please enter a password to validate: ", function(input){
    
    let upperCase = false;
    let lowerCase = false;
    let number = false;

    if (input.length >= 10) {

        for (let i = 0; i < input.length; i++) {

            if (input[i] === input.toUpperCase()) {

                upperCase = true;

            } 

            if (input[i] === input.toLowerCase()) {

                lowerCase = true;

            } 

            if (input[i] === input.NaN) {

                number = false;
                
            } else {

                number = true;

            }

        }

        if (upperCase && lowerCase && number) {

            console.log("Success! Your password has been validated!");

        } else {

            console.log("Failed to validate. Your password must be at least 10 characters in length, contain a number, and contain and upper and lower case letter.")

        }


    } else {

        console.log("Failed to validate. Your password must be at least 10 characters in length.");

    }

    reader.close();

});


// 1 capital letter 
//     checks each char in input 
//     must check entire input before determining
// 1 lower case 
// 1 number