const listaSites = JSON.parse(sessionStorage.getItem('historico')) || []
let posicao = JSON.parse(sessionStorage.getItem('posicaoHistorico')) || -1

export function adicionar(endereco){
    if(endereco !== listaSites[posicao]) {
        listaSites.splice(posicao + 1)
        listaSites.push(endereco)
        sessionStorage.setItem('historico', JSON.stringify(listaSites))
        posicao++
        sessionStorage.setItem('posicaoHistorico', posicao)
    }
}

export function voltar(){
    const isPrimeiraPosicao = posicao === 0
    if(listaSites.length !== 1 && !isPrimeiraPosicao) {
        posicao-- 
        return listaSites[posicao]
    }
    //$bntVoltar.src="imagem opaca"
}

export function avancar(){
    const isUltimaPosicao = posicao === listaSites.length -1
    if(listaSites.length !== 1 && !isUltimaPosicao) {
        posicao++
        sessionStorage.setItem('posicaoHistorico', posicao)
        return listaSites[posicao]
    }
}