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











        let a = 2;
        let b = 5;
        let c = 3;

        let delta = (b * b) - 4 * a * c;

        if (delta < 0) {
            console.log("A equação não possui raízes reais.");
        } else if (delta === 0) {
            let x = -b / (2 * a);
            console.log("A equação possui uma raiz real: x = " + x);
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            console.log("A equação possui duas raízes reais: x1 = " + x1 + ", x2 = " + x2);
        }














    }
}