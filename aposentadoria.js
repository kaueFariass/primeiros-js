function VerificarAposentadoria(){

    let nome = prompt("Digite seu nome");
    let nascimento = parseInt(prompt("Digite seu ano de nascimento"));
    let admissao = parseInt(prompt("Digite o ano de admissão na empresa"));
    let tempoTrab = parseInt(0);
    let idade = parseInt(0);

    idade = (2022 - nascimento);
    tempoTrab = (2022 - admissao);

    
    if (idade >= 60 && tempoTrab >= 25) {
        alert("O funcionário(a) " + nome + " Requerer aposentadoria, pois tem " + idade + " anos de idade e " + tempoTrab + " anos de trabalho.")
    } else {
        if (idade < 65) {
    
        if (tempoTrab < 30) {
        alert("O funcionário(a) " + nome + " não Requerer aposentadoria, pois tem apenas " + idade + " anos de idade e " + tempoTrab + " anos de trabalho.");
    }
    
}
}
}