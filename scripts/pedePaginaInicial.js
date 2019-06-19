import aceitouSalvar from './aceitouSalvar.js'

if(aceitouSalvar === null || aceitouSalvar === true) {
    let paginaInicial = localStorage.getItem('paginaDefinida')
    
    if(!paginaInicial) {
        paginaInicial = prompt("turu bom? Para qual site vamos @?")
    }
    
    if(paginaInicial) {
        if(
            paginaInicial.substring(0, 7) !== 'http://' &&
            paginaInicial.substring(0, 8) !== 'https://'   
        ) {
            paginaInicial = 'http://' + paginaInicial
        }
        
        $janelaPrincipal.src = paginaInicial
        $inputEndereco.value = paginaInicial
        localStorage.setItem('paginaDefinida', paginaInicial)
    }
}


