function tabuada () {
    let numero = parseInt(prompt("Digite um numero"));
    let resposta = parseInt(0);
    let tabuada = parseInt(0);
    
    for (let i=1; i<=9; i++)
    tabuada += numero + " X " + i + " = " + numero * i + "<br/>";
    resposta = tabuada
    document.write(resposta);
}