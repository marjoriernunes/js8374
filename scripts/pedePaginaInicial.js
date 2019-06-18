let paginaInicial = prompt("turu bom? Para qual site vamos @?")

if(
    paginaInicial.substring(0, 7) !== 'http://' &&
    paginaInicial.substring(0, 8) !== 'https://'   
) {
    paginaInicial = 'http://' + paginaInicial
}

$janelaPrincipal.src = paginaInicial
$inputEndereco.value = paginaInicial


