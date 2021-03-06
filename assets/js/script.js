let incrementBtn = document.getElementById('increment');
let decrementBtn = document.getElementById('decrement');
let currentNumWrapper = document.getElementById('currentNum');
let currentNum = 0;

incrementBtn.addEventListener("click", function increment() {
    currentNum = currentNum + 1;
    currentNumWrapper.innerHTML = currentNum;
    if (currentNum > 0) {
        currentNumWrapper.style.color = '#E7AB79';
    }
    if (currentNum > 9) {
        incrementBtn.disabled = true;
    } else if (currentNum < 10) {
        decrementBtn.disabled = false;
    }
});

decrementBtn.addEventListener("click", function decrement() {
    currentNum = currentNum - 1;
    currentNumWrapper.innerHTML = currentNum;
    if (currentNum < 0) {
        currentNumWrapper.style.color = '#B25068';
    }
    if (currentNum < -9) {
        decrementBtn.disabled = true;
    } else if (currentNum > -10) {
        incrementBtn.disabled = false;
    }
});