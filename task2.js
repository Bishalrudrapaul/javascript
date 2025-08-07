const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prime() {
    r1.question("Enter a number: ", function(input) {
        let num = Number(input); 
        let isPrime = 1;

        if (num <= 1) {
            isPrime = 0;
        } else {
            for (let i = 2; i * i <= num; i++) {
                if (num % i === 0) {
                    isPrime = 0;
                    break;
                }
            }
        }

        if (isPrime) {
            console.log(num + " is a prime number");
        } else {
            console.log(num + " is not a prime number");
        }

        r1.close(); 
    });
}

prime();

