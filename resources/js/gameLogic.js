function checkWord() {
    const inputValues = Array.from(document.querySelectorAll('.inputs')).map(input => input.value.trim().toLowerCase());

    const correctWord = ['w', 'o', 'r', 'd', 's'].map(letter => letter.toLowerCase()); // <- Word here 

    console.log("Correct Word:", correctWord.join(""));
    console.log("User Input:", inputValues.join(""));

    inputValues.forEach((value, index) => {
        const answerBox = document.querySelector(`#answer${index + 1} .answer-input`);
        answerBox.textContent = value;

        if (value === correctWord[index]) {
            console.log(`Char ${value.toUpperCase()} at position ${index + 1} is correct!`);
            answerBox.style.backgroundColor = 'green';
        } else if (correctWord.includes(value) && correctWord.indexOf(value) !== index) {
            console.log(`Char ${value.toUpperCase()} at position ${index + 1} is in the word, but in another position!`);
            answerBox.style.backgroundColor = 'yellow';
        } else {
            console.log(`Char ${value.toUpperCase()} at position ${index + 1} is wrong!`);
            answerBox.style.backgroundColor = 'red';
        }
    });
}

function clearInput() {
    const inputs = Array.from(document.querySelectorAll('input'));

    inputs.forEach(function(input) {
        if (input.value !== '') {
            input.value = '';
        }
    });
}