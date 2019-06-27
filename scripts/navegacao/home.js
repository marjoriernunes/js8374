import { paginaInicial } from '/scripts/storage/paginaInicial.js'
import { carregar } from '/scripts/navegacao/carregar.js'

$botaoPaginaInicial.addEventListener('click', function voltaParaHome() {
    carregar(paginaInicial)
}) 