import aceitouSalvar from '../storage/aceitouSalvar.js'
import paginaInicial, { setPedePaginaInicial } from '../storage/paginaInicial.js'

if(aceitouSalvar === null || aceitouSalvar === true) {
    let paginaInicialDefault = paginaInicial
    
    if(!paginaInicialDefault) {
        paginaInicialDefault = prompt("turu bom? Para qual site vamos @?")
    }
    
    if(paginaInicialDefault) {
        if(
            paginaInicialDefault.substring(0, 7) !== 'http://' &&
            paginaInicialDefault.substring(0, 8) !== 'https://'   
        ) {
            paginaInicialDefault = 'http://' + paginaInicialDefault
        }
        
        $janelaPrincipal.src = paginaInicialDefault
        $inputEndereco.value = paginaInicialDefault
        setPedePaginaInicial(paginaInicialDefault)
    }
}


