const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter the number of rows: ", function(input) {
    const rows = Number(input);

    for (let i = rows; i >= 1; i--){
        let line = "";


        for (let j = 1; j <= rows - i; j++) {
            line += " ";
        }

  
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }

        console.log(line);
    }

    r1.close();
});
