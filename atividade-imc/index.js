function calcularImc(){
    let altura = id_altura.value;
    let peso = id_peso.value

    let imc = peso / (altura * altura)

    div_resultado.innerHTML = `Seu IMC é: ${imc.toFixed(2)} <br>`;

    if(imc <= 18.5){
        div_resultado.style.backgroundColor = 'blue'
        div_resultado.innerHTML += `Sua classificação está como MAGREZA`
    }else if(imc <= 24.9){
        div_resultado.style.backgroundColor = 'green'
        div_resultado.innerHTML += `Sua classificação está como NORMAL`
    }else if(imc <= 29.9){
        div_resultado.style.backgroundColor = 'yellow'
        div_resultado.innerHTML += `Sua classificação está como SOBREPESO`
    }else if(imc <= 39.9){
        div_resultado.style.backgroundColor = 'red'
        div_resultado.innerHTML += `Sua classificação está como OBESIDADE`
    } else if(imc > 40.0){
        div_resultado.style.backgroundColor = 'red'
        div_resultado.innerHTML += `Sua classificação está como OBESIDADE GRAVE`
    }else{
        div_resultado.innerHTML += `Valor digitados são invalidos`
    }
}