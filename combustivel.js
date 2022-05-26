function CalcularCombustivel(){
    let tem = parseFloat(document.getElementById("Tempo").value);
    let velo = parseFloat(document.getElementById("Velocidade").value);
    let dist = (tem*velo);
    let result = (dist/12);

    
    if(document.getElementById("Tempo").value == ""){
        alert("preencha o campo TEMPO")
}
    if(document.getElementById("Velocidade").value == ""){
        alert("preencha o campo Velocidade")
} 
    else{
        document.getElementById("Distancia").value=dist;
        document.getElementById("Combustivel").value=result;
    }
}