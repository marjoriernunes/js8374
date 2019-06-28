import { carregar } from '/scripts/navegacao/carregar.js'
import { Endereco } from '/scripts/endereco/Endereco.js';
import { CakeError } from '/scripts/erros/CakeError.js'

let endereco

$janelaPrincipal.addEventListener('load', function(){
   endereco = new Endereco($janelaPrincipal.contentWindow.location.href)
})

$inputEndereco.addEventListener('focus', exibeEnderecoCompleto)
$inputEndereco.addEventListener('blur', exibeEnderecoResumido)
$janelaPrincipal.addEventListener('load', exibeEnderecoResumido)

function exibeEnderecoCompleto(){
    $inputEndereco.value = endereco.urlCompleta
}

function exibeEnderecoResumido() {
    $inputEndereco.value = endereco.urlResumida
}

$inputEndereco.addEventListener('keyup', function(evento) {
    const apertouEnter = evento.key === 'Enter'
    if(apertouEnter) {
        try{
            endereco = new Endereco($inputEndereco.value)
        }catch (error) {
            if(error instanceof CakeError){
                alert(error.message)
            }else{
                throw error
            }
        }

        carregar(endereco)
    }
})