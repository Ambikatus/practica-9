var boton = document.getElementById('btnCalcular');
boton.addEventListener ("click", porcentaje);

function porcentaje(){
    var num1 = parseInt(document.getElementById('precio').value)
    var op = document.getElementById('descuento').value;  
    var resultado; 
if (op==10){
    resultado=num1-(num1*0.1);
}
else if (op==15){
    resultado =num1-(num1*0.15);
}
else if (op==20){
    resultado = num1-(num1*0.2);
}
else if (op==30){
    resultado = num1-(num1*0.3);
}
else {
    resultado = num1-(num1*0.5);
}
    document.getElementById('precio_final').innerHTML = resultado;
}
