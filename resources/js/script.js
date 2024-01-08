function addInput(letter) {
    const inputs = Array.from(document.querySelectorAll('input'));
    const emptyInput = inputs.find(input => input.value === '');

    if (emptyInput) {
    emptyInput.value = letter;
    emptyInput.focus();
    }
}

function moveSelection() {
    var inputs = document.querySelectorAll('input[id^="input"]');
    inputs.forEach(function(input) {
    var textLength = 1;

    input.setSelectionRange(textLength, textLength);
    });
}

function handleButtonClick(event) {
    if (event.target.classList.contains('keys')) {
        addInput(event.target.textContent);
    }
}