let billInput = document.querySelector('#input__billBox')
let peopleInput = document.querySelector('#input__peopleNumber')
const percentageButton = document.querySelectorAll('.buttons')
let tipPerson = document.querySelector('#tip_amount_person')
let tipAmount = document.querySelector('#tip_amount_total')
let buttonReset = document.querySelector('#resetButton')
let bill = 0
let people = 0
let percentage = 0

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

// Get tip total amount and by person
const getTip = (bill, person, percentage) => {
    let tip = (bill * percentage) / 100
    let tipByPerson = (tip / person)
    tipPerson.innerHTML = tipByPerson
    tipAmount.innerHTML = tip
}

// Reset all values
buttonReset.addEventListener('click', () => {
    bill = 0
    people = 0
    percentage = 0
    tipPerson.innerHTML = 0
    tipAmount.innerHTML = 0
    billInput.value = ''
    peopleInput.value = ''

})


percentageButton.forEach(button => {
    button.addEventListener('click', (e) => {
        percentage = parseInt(e.target.value)
        validateNumber(billInput) && (bill = parseInt(billInput.value))
        validateNumber(peopleInput) && (people = parseInt(peopleInput.value))
        bill && people && getTip(bill, people, percentage)
    })
})