function calcularValores(){

    let valor1=Number(document.getElementById("valor1").value);
    let valor2=Number(document.getElementById("valor2").value);
    let operacao=document.getElementById('operacao').value;
    let resultado;
    
    let caixaResultado=document.getElementById("resultado");
    
    
    if(operacao === '+') {
       resultado= valor1+valor2
       
        
    } else if(operacao === '-') {
        resultado= valor1-valor2
        
       
    }
    else if(operacao ---'*'){
        resultado= valor1*valor2
        
    }
    else{
        resultado= valor1/valor2
        
    }
    
    caixaResultado.textContent=resultado;
    
    }
