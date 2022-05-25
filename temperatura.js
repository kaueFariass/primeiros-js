function ConverterTemperatura(){
 
    let c = document.getElementById("Centigrados").value;
    let f = (9 * c + 160) / 5;
    document.getElementById("Fahrenheit").value = f;

}