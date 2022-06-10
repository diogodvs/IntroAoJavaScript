var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 20) {
        window.alert("Contador so vai ate 20!!"); stop;
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    window.alert("Contador so vai ate 20!!"); stop;
}
