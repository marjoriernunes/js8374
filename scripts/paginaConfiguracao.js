import paginaDefinida from './paginaDefinida.js'
import aceitouSalvar from './aceitouSalvar.js'

$inputPaginaInicial.value = localStorage.getItem('paginaDefinida')
$inputPermissaoSalvar.checked = JSON.parse(localStorage.getItem('aceitouSalvar'))