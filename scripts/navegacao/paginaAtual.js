import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as historico from '/scripts/navegacao/historico.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'
import { carregar } from '/scripts/navegacao/carregar.js'

const paginaAtual = sessionStorage.getItem('paginaAtual')

const paginaPraCarregar = paginaAtual !== null
    ? paginaAtual
    : storagePaginaInicial.paginaInicial

const enderecoCompleto = formataEndereco(paginaPraCarregar)
carregar(enderecoCompleto)

$janelaPrincipal.addEventListener('load', function salvaPaginaAtual() {
    const endereco = $janelaPrincipal.contentWindow.location.href
    sessionStorage.setItem('paginaAtual', endereco)
})

$janelaPrincipal.addEventListener('load', function salvaPaginaAtual() {
    const endereco = $janelaPrincipal.contentWindow.location.href
    historico.adicionar(endereco)
})

$botaoVoltar.addEventListener('click', function(){
    const enderecoVolta = historico.voltar()
    if(enderecoVolta !== undefined) {
        carregar(enderecoVolta)
    }
    //$bntVoltar.src="imagem opaca"
})

$botaoAvancar.addEventListener('click', function() {
    const enderecoAvanca = historico.avancar()
    if(enderecoAvanca !== undefined){
        carregar(enderecoAvanca)
    } 
})



