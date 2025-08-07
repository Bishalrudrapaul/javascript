const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter a string: ", function(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];  
    }

    console.log("Reversed string:", reverse);
    r1.close();
});
