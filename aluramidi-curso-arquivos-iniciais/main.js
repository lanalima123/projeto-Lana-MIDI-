const listaDeTeclas = document.querySelectorAll('.tecla')
let contador = 0
function somTecla(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}
let tecla = listaDeTeclas.length
while(contador < tecla){
    let parteDoId = listaDeTeclas[contador].classList[1];
    let aoClicarNoBotao = listaDeTeclas[contador]
    aoClicarNoBotao.onclick = function () {somTecla(`#som_${parteDoId}`)

    };
    contador++
    console.log(parteDoId)
    console.log(aoClicarNoBotao)
}