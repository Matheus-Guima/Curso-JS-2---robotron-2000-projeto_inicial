function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

const controle = document.querySelectorAll('[data-controle]');
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //dataset.controle pega o valor do data atribute
        //console.log(evento.target.parentNode); //parentNode, procura o elemento pai
    })
})
