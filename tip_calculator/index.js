let billInput = document.querySelector('#input__billBox')
let peopleInput = document.querySelector('#input__peopleNumber')
const percentageButton = document.querySelectorAll('.buttons')

// Validate input value are numbers and not empty
const validateNumber = (input) => {    
    if (input.value.length > 0) {
        if (isNaN(input.value) === true) {
            input.value = ''
            input.placeholder = 'Please enter a number'
            input.style.border = '1px solid red'
            return false
        } else {
            input.style.border = 'none'
            return true
        }
    } else {
        input.placeholder = 'Please enter a number'
        input.style.border = '1px solid red'
        return false 
    }  
}

percentageButton.forEach(button => {
    button.addEventListener('click', (e) => {
        validateNumber(billInput) ?
            console.log('billInput is valid') :
            console.log('billInput is invalid')
        validateNumber(peopleInput) ?
            console.log('peopleInput is valid') :
            console.log('peopleInput is invalid')
    })
})