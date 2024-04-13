const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
let tecla = listaDeTeclas.length;

function somTecla(idElementoAudio){
    let seletor = document.querySelector(idElementoAudio)
    if(seletor != null  && seletor.localName === 'audio'){seletor.play()}else{
        console.log('desculpe! evento nao encontrado')
    }
   
    
};

/*while(contador < tecla){
    let parteDoId = listaDeTeclas[contador].classList[1];
    let aoClicarNoBotao = listaDeTeclas[contador];
    aoClicarNoBotao.onclick = function () {somTecla(`#som_${parteDoId}`);

    };
    contador++;
    console.log(parteDoId);
    console.log(aoClicarNoBotao);
};*/

for(let contador = 0; contador < tecla; contador++){
    let parteDoId = listaDeTeclas[contador].classList[1];
    let aoClicarNoBotao = listaDeTeclas[contador];
    aoClicarNoBotao.onclick = function () {somTecla(`#som_${parteDoId}`)};
    aoClicarNoBotao.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
        aoClicarNoBotao.classList.add('ativa')
    }
}
    aoClicarNoBotao.onkeyup = function () {aoClicarNoBotao.classList.remove('ativa')}
    
   console.log(contador);
};