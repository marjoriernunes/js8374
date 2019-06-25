import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'
import { carregar } from '/scripts/navegacao/carregar.js'

//TODO criar módulo pra isso
// Pegar pagina atual do localStorage
const paginaAtual = sessionStorage.getItem('paginaAtual')

const paginaPraCarregar = paginaAtual !== null
    ? paginaAtual
    : storagePaginaInicial.paginaInicial

const enderecoCompleto = formataEndereco(paginaPraCarregar)
carregar(enderecoCompleto)

$janelaPrincipal.addEventListener('load', function salvaPaginaAtual() {
    sessionStorage.setItem('paginaAtual', $janelaPrincipal.contentWindow.location.href)
})



