const { monitorEventLoopDelay } = require('perf_hooks');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("Hello! Welcome to Password Validator.");

reader.question("Please enter a password to validate: ", function(input){
    
    //booleans for uppercase letters, lowercase letters, and numbers
    let upperCase = false;
    let lowerCase = false;
    let number = false;

    if (input.length >= 10) {

        //loops checks each element to determine if the string contains an upper case letter; used .charCodeAt() to determine ASCII value of each element
        for (let i = 0; i < input.length; i++) {

            if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {

                upperCase = true;
                break;

            }  else {

                continue;
            }

        }

        //loops checks each element to determine if the string contains a lower case letter; used .charCodeAt() to determine ASCII value of each element
        for (let i = 0; i < input.length; i++) {

            if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {

                lowerCase = true;
                break;
            
            } else {

                continue;
            }

        }

        //loop checks each element to determine if the string contains a number
        for (let i = 0; i < input.length; i++) {

            if (input[i] === input.NaN) {

                continue;
                
            } else {
            
                number = true;
                break;
            
            }

        }

        //console log checks to make sure booleans are all true
        //console.log(upperCase, lowerCase, number);

        //if statement checks to make sure all booleans are true in order to validate password
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



