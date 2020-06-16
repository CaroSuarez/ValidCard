/*Importing validator functions*/
import validator from './validator.js';
console.log(validator);

/*Getting elements from HTML*/
var continueButton=document.getElementById("continueButton");
var validationButton=document.getElementById("validationButton");
var inputNumber=document.getElementById("inputNumber");

/*Envents Listeners from HTML buttons*/
continueButton.addEventListener("click", continuePayment);
validationButton.addEventListener("click", continuePayment2);

/*Functions*/
function continuePayment() {
    document.getElementById('window1').style.display = 'none';
    document.getElementById('window2').style.display = 'block';
}

function continuePayment2() {
    /*Printing masked number*/
    var maskedNumber=validator.maskify(inputNumber.value);
    var p1 = document.createElement("P");
    var result1= document.createTextNode(maskedNumber);
    p1.appendChild(result1);
    document.getElementById("results").appendChild(p1)

    /*Changing window*/    
    document.getElementById('window2').style.display = 'none';
    document.getElementById('window3').style.display = 'block';
}