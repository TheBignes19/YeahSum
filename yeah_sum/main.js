const inputOne = document.querySelector('#inputOne')
const inputTwo = document.querySelector('#inputTwo')
const result = document.querySelector('#answer')


function sum() {
    let sum = 0

    result.innerHTML = parseInt(inputOne.value) + parseInt(inputTwo.value)
}
