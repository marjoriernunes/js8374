import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar  from '/scripts/storage/aceitouSalvar.js'
import { Endereco } from '/scripts/endereco/Endereco.js'

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar

$botaoSalvar.onclick = salvar
 
function salvar(){

    const funcaoEscolhida = $inputPermitiuSalvar.checked === true 
        ? storageAceitouSalvar.setAceitou
        : storageAceitouSalvar.setNaoAceitou
    
    funcaoEscolhida()

    const enderecoCompleto = new Endereco($inputPaginaInicial.value)
    $inputPaginaInicial.value = enderecoCompleto
    
    storagePaginaInicial.setPaginaInicial(enderecoCompleto)
}

$botaoLimpar.addEventListener('click', function (){
    const listaChaves = Object.keys(localStorage)
    const chavesPermanentes = [
        'aceitouSalvar',
        'aceitouTermos'
    ]

    const listaChavesLocalStorage = Object.keys(localStorage)
    for(let chave of listaChavesLocalStorage) {
        const isChavePermanente = chavesPermanentes.includes(chave)
        
        if(!isChavePermanente) {
            localStorage.removeItem(chave)
        }
    }

    const listaChavesSession = Object.keys(sessionStorage)
    for(let chave of listaChavesSession) {
        sessionStorage.removeItem(chave)
    }

    window.location.reload();
})
