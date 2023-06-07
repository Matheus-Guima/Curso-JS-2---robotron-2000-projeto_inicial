function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('.controle-contador');

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

const controle = document.querySelectorAll('.controle-ajuste');
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
        //console.log(evento.target.parentNode); //parentNode, procura o elemento pai
    })
})
