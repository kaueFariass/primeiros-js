function CalcularCombustivel(){
    let tem = parseFloat(document.getElementById("Tempo").value);
    let velo = parseFloat(document.getElementById("Velocidade").value);
    let dist = (0);
    let result = (0);

    
    if(document.getElementById("Tempo").value == ""){
        alert("preencha o campo TEMPO")
}
    if(document.getElementById("Velocidade").value == ""){
        alert("preencha o campo Velocidade")
} 
    dist = (tem*velo);
    documente.getElementById("Distancia").value = dist;
    
    result = (dist / 12);
    documente.getElementById("Combustivel").value = result;
}