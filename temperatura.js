function ConverterTemperatura(){

    if(document.getElementById("Centigrados").value == ""){
        alert("O preenchimento é obrigatório!");
        document.getElementById("Centigrados").focus();
        return;
    }
 
    let c = parseFloat(document.getElementById("Centigrados").value);
    let f = (9 * c + 160) / 5;
    document.getElementById("Fahrenheit").value = f;
 
    if (f > 50){
        document.getElementById("Fahrenheit").style.backgroundColor="red";
    }

    else {
        document.getElementById("Fahrenheit").style.backgroundColor="aqua";
    }
}