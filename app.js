var x1=document.getElementById("ventana1");
var x2=document.getElementById("ventana2");
var x3=document.getElementById("ventana3");

function showFunction(){
    x1.style.display="none";
    x2.style.display="block";
}
function showFunction2(){
    x2.style.display="none";
    x3.style.display="block";
}



function maskify(number) {
    number = number.split("");
    for(var i = 0; i < number.length - 4; i++){
      number[i] = "#";
  }
}

cardNum.oninput = maskify(cardNum) 