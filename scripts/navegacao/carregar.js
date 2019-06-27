import { Endereco } from '/scripts/endereco/Endereco.js'

export function carregar(value) {
    let endereco 

    if(typeof value === 'string') {
        endereco = Endereco(value)
    }else if(value instanceof Endereco) {
        endereco = value
    }else{
        throw new Error(`
Não foi possível carregar o seguinte endereço:
    Valor: ${JSON.stringify(value)}
    Tipo: ${typeof value}
        `.trim())
    }

    $janelaPrincipal.src = endereco.urlCompleta;
    $inputEndereco.value = endereco.urlCompleta;
}
