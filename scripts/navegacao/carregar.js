import { Endereco } from '/scripts/endereco/Endereco.js'

export function carregar(value) {
    let endereco 

    if(typeof value === 'string') {
        endereco = new Endereco(value)
    }else if(value instanceof Endereco) {
        endereco = value
    }else{
        throw new Error(`
Você passou um endereço que não é do tipo string e nem Endereco:
    Valor: ${JSON.stringify(value)}
    Tipo: ${typeof value}
        `.trim())
    }

    $janelaPrincipal.src = endereco.urlCompleta;
    $inputEndereco.value = endereco.urlCompleta;
}
