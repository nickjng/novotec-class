function calcularTabuada() {

    div_tabuada.innerHTML = ''

    let numero = Number(id_numero.value);

    // Parte de validação, se não for um numero inteiro, não roda
    if (!Number.isInteger(numero) || Number.isNaN()) {
        alert("HAHAHA, espertinho... o que você digitou não é um numero inteiro")
    } else {
        // Usando While - descomentar
        /* let multiplicador = 1
        
        // while (multiplicador <= 10){
            //     div_tabuada.innerHTML += `
            //     ${numero} x ${multiplicador} = ${numero * multiplicador} <br>
            //     `
            //     multiplicador++
        } */
        // Usando For
        for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
            div_tabuada.innerHTML += `
            ${numero} x ${multiplicador} = ${numero * multiplicador} <br>
            `
        }

    }
}