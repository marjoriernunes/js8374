import * as storagePaginaInicial from './storage/paginaInicial.js'
import * as storageAceitouSalvar from './storage/aceitouSalvar.js'

$inputPaginaInicial.value = paginaInicial
$inputPermissaoSalvar.checked = aceitouSalvar

$botaoSalvar.onclick = salvar

function salvar() {
    storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value)
    storageAceitouSalvar.setAceitouSalvar($inputPermissaoSalvar.checked)
}