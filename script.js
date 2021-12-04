//Selecting Buttons
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

//Creating Calculator class
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        //this.clear()
    }
};

// Clear operation
function clear (){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

function deleteAction(){

};

function appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) 
    return this.currentOperand = this.currentOperand.toString() + number.toString()
}
function chooseOperation(operation){

}

function compute(){

}

function updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand;
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})