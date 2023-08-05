const inputElement = document.querySelector('#input')
const fromElement = document.querySelector("#from")
const toElement = document.querySelector('#to')
const outputElement = document.querySelector('#output')
const convertButton = document.querySelector('#convert-btn')
const messageElement = document.querySelector('#message')


function convert(){
    const fromvalue = fromElement.value
    const toValue=  toElement.value

    if( fromvalue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return ;
    }

    let meters;
    switch(fromvalue){
        case 'm':
            meters = inputElement.value;
            break;
        case 'cm':
            meters = inputElement.value / 100;
            break;
        case 'mm':
            meters= inputElement.value * 1000;
            break;
        case 'km':
            meters = inputElement.value * 1000;
            break;
    }

    let result;
    switch(toValue){
        case 'm':
            result = inputElement.value;
            break;
        case 'cm':
            result = meters * 100;
            break;
        case 'mm':
            result = meters * 1000 ;
            break;
        case 'km':
            result = meters / 1000 ;
            break;
    }

    outputElement.value = result;

    //Pegando o text no select e colocando no message
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = fromElement.options[toElement.selectedIndex].text;

    const message = `${inputElement.value} ${fromLabel} equivalem a ${outputElement.value} ${toLabel}`;

    messageElement.textContent = message;
    return;
}

convertButton.addEventListener('click',convert);