let billInput = document.querySelector('#input__billBox')
let peopleInput = document.querySelector('#input__peopleNumber')
const percentageButton = document.querySelectorAll('.buttons')

// Validate input value are numbers
billInput.onkeyup = function (e) {
    if (billInput.value.length > 0) {
        isNaN(billInput.value) ?
            console.log('no es numero') :
            console.log("si es numero")
    }
}

// const validateNumber = (input) => {
//     input.onkeyup = () => {
//         isNaN(input.value) ? console.log('no es numero') : console.log("si es numero")
//     }
// }

// percentageButton.forEach(button => {
//     button.addEventListener('click', (e) => {
//         billInput.value && peopleInput.value ? console.log('si') : console.log('no')
        // const percentage = parseInt(e.target.innerText)
        // const tip = billInput.value * percentage / 100
        // const total = parseInt(billInput.value) + tip
        // document.querySelector('#input__tipBox').value = tip.toFixed(2)
        // document.querySelector('#input__totalBox').value = total.toFixed(2)
//     })
// })