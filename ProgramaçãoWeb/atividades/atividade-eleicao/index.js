function simularVotacao() {
    let cand1 = Number(id_cand1.value);
    let cand2 = Number(id_cand2.value);
    let cand3 = Number(id_cand3.value);
    let cand4 = Number(id_cand4.value);

    let nameCand1 = nome_cand1.innerHTML;
    let nameCand2 = nome_cand2.innerHTML;
    let nameCand3 = nome_cand3.innerHTML;
    let nameCand4 = nome_cand4.innerHTML;

    let maior = Math.max(cand1, cand2, cand3, cand4)

    if (maior == cand1) {
        div_resultado.innerHTML = ` 
        O Canditado ${nameCand1} é o Governador com ${maior} votos <br>
        `
    } else if (maior == cand2) {
        div_resultado.innerHTML = ` 
        O Canditado ${nameCand2} é o Governador com ${maior} votos <br>
        `

    } else if (maior == cand3) {
        div_resultado.innerHTML = ` 
        O Canditado ${nameCand3} é o Governador com ${maior} votos <br>
        `

    } else if (maior == cand4) {
        div_resultado.innerHTML = ` 
        O Canditado ${nameCand4} é o Governador com ${maior} votos <br>
        `
    }


    /* 
    (ノಠ益ಠ)ノ - Tendi nada, desses if de pegar o segundo lugar!!

       CALMA!!!, coloquei alguns comentarios do lado de cada if() 
       para conseguir entender melhor o que está acontedendo, #taTreta
       
    (*￣з￣) - Ufa
       */


    if ((cand1 < cand2 && cand1 > cand3 && cand1 > cand4) || // comparando se o cand1 é menor que cand2 e maior que outros
        (cand1 > cand2 && cand1 < cand3 && cand1 > cand4) || // comparando se o cand1 é menor que o cand3 e maior que outros
        (cand1 > cand2 && cand1 > cand3 && cand1 < cand4)) { // comparando se o cand1 é menor que o cand4 e maior que outros
        div_resultado.innerHTML += `O Canditado ${nameCand1} é o Vice governador com ${cand1}  votos.`;
    } 
    
    else if ((cand2 < cand1 && cand2 > cand3 && cand2 > cand4) || // comparando se o cand2 é menor que cand1 e maior que outros
             (cand2 > cand1 && cand2 < cand3 && cand2 > cand4) || // comparando se o cand2 é menor que cand3 e maior que outros
             (cand2 > cand1 && cand2 > cand3 && cand2 < cand4)) { // comparando se o cand2 é menor que cand4 e maior que outros
        div_resultado.innerHTML += `O Canditado ${nameCand2} é o Vice governador com ${cand2}  votos.`;
    } 
    
    else if ((cand3 < cand1 && cand3 > cand2 && cand3 > cand4) || // comparando se o cand3 é menor que cand1 e maior que outros
             (cand3 > cand1 && cand3 < cand2 && cand3 > cand4) || // comparando se o cand3 é menor que cand2 e maior que outros
             (cand3 > cand1 && cand3 > cand2 && cand3 < cand4)) { // comparando se o cand3 é menor que cand4 e maior que outros
        div_resultado.innerHTML += `O Canditado ${nameCand3} é o Vice governador com ${cand3}  votos.`;
    } 
    
    else { //Caso não seja os 3 primeiros, não há necessidade de comparar se o canditado 4 é o segundo, então ele não tem if()
        div_resultado.innerHTML += `O Canditado ${nameCand4} é o Vice governador com ${cand4}  votos.`;
    }


}