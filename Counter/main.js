const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const TwoTimesButton = document.getElementById("TwoTimes-button")

let count = 0

plusButton.onclick = function() {
    count++
    display.textContent = count
}

minusButton.onclick = function() {
    count--
    display.textContent = count
}

TwoTimesButton.onclick = function() {
    count=count*2
    display.textContent = count
}