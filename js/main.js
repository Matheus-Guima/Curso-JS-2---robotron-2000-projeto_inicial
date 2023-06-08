function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    //console.log(pecas[peca]); //retorna a peça ex: braço 

    estatisticas.forEach( (elemento) => {
        //console.log(elemento.dataset.estatistica); //Retorna o nome da estatistica ex: velocidade
        //console.log(elemento.textContent); //Retorna o numero da estatistica

        //Junta o nomero da estatistica + a peca[nome da estatistica]
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        
    })
}

const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //dataset.controle pega o valor do data atribute
        //console.log(evento.target.parentNode); //parentNode, procura o elemento pai
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})
