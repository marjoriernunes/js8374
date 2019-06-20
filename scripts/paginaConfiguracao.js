import paginaInicial, { setPaginaInicial } from './storage/paginaInicial.js'
import aceitouSalvar, { setAceitouSalvar } from './storage/aceitouSalvar.js'

$inputPaginaInicial.value = paginaInicial
$inputPermissaoSalvar.checked = aceitouSalvar

$botaoSalvar.onclick = salvar

function salvar() {
    setPaginaInicial($inputPaginaInicial.value)
    setAceitouSalvar($inputPermissaoSalvar.checked)
}