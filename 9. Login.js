function login(input) {
    let userName = input.shift();
    let correctPass = userName.split(``).reverse().join(``)
    let newWords = [];
    let counter = 0;
    for (let i = 0; i <= input.length - 1; i++) {
        let word = input[i];
        if (word !== correctPass) {
            newWords.push(word);
            counter++;
            if (counter <= 3) {
                console.log(`Incorrect password. Try again.`);
            }
            if (counter > 3) {
                console.log(`User ${userName} blocked!`);
            }
        }
    }
    if (counter < 4 && input.includes(correctPass)) {
        console.log(`User ${userName} logged in.`);

    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);
