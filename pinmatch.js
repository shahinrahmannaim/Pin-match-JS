

function getPin() {
    const randomPin = Math.random() * 10000;
    const generatedPin = ("" + randomPin).split('.')[0];


    if (generatedPin.length === 4) {
        return generatedPin;
    } else {
        return getPin();

    }
}

// display generated pin
function generatedPin() {
    const showPin = document.getElementById('showPin');
    showPin.value = getPin();

}

// handle calculator button event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {

            const allClear = document.getElementById('typed-pin');
            allClear.value = '';

        } if (digit === 'B') {
            const backSpace = document.getElementById('typed-pin');


            backSpace.value = backSpace.value.substring(0, backSpace.value.length - 1)

        }

    } else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;

    }
})


// verify pin
function verifyPin() {
    const pin = document.getElementById('showPin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        pinMatchResult('block', 'none')


    } else {

        pinMatchResult('none', 'block');
    }
}

function pinMatchResult(correctStatus, inCorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;

    const notMatched = document.getElementById('inCorrect-pin');
    notMatched.style.display = inCorrectStatus;
}



