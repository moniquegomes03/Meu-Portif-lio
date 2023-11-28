const form= document.getElementById("form");

form.addEventListener("submit",function (event) {

    event.preventDefault();

    const peso= document.getElementById("weight").value;
    const altura= document.getElementById("height").value;
    const imc= peso/(altura*altura)

    document.getElementById("infos").classList.remove("hidden");

    // condicoesdoimc

    const campoImc= document.getElementById("value"); //aonde aparece o IMC

    let descricao;

    campoImc.classList.add("attention");

    if (imc < 18.5) {

        descricao = "Cuidado, você está abaixo do peso!";
        
    }

    else if ((imc >= 18.5) && (imc<=25)) {

        descricao = "Você está no peso ideal"
        campoImc.style.color="green";
    }

    else if ((imc > 25) && (imc <= 30)) {

        descricao = "Cuidado, você está com sobrepeso!!"
        
    }

    else if ((imc > 30) && (imc <= 35)) {
        
        descricao = "Cuidado, você está com obesidade moderada"
        
    }

    else if ((imc > 35) && (imc <= 40)) {

        descricao = "Cuidado, você está com obesidade severa!"
        
    }

    else {

        descricao = "Cuidado, você está com a obesidade mórbida"
    }

    campoImc.textContent= imc.toFixed(2)

    document.getElementById("description").textContent=descricao
});