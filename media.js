function media() {
    
    let numero = parseFloat(0);
    let i = (0);
    let n = parseInt(0);
  
  
  
  
    while (i<=100){
      let n = parseInt(prompt("Digite um Numero"));
      
  
      if (n % 2 == 0) {
        numero = numero + n;
          i = i +1
      }
       if (n == 0) {
        alert("Finalizando");
        break;
      }
  
    }
  
    alert("A média é = " + numero / (i - 1));
    
    console.log(i)
  }