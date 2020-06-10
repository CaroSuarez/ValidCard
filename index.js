
cB=document.getElementById("continuarButton")
vB=document.getElementById("validationButton")

cB.addEventListener("click", continuarPago);
vB.addEventListener("click", continuarPago2);

pruebaMask=vB.addEventListener("click", maskify);
document.getElementById("demo1").innerHTML=pruebaMask;

function continuarPago() {
    document.getElementById('ventana1').style.display = 'none';
    document.getElementById('ventana2').style.display = 'block';
}

function continuarPago2() {
    document.getElementById('ventana2').style.display = 'none';
    document.getElementById('ventana3').style.display = 'block';
}


import validator from './validator.js';

console.log(validator);


