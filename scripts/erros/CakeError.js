function CakeError(endereco){ 
    const erro = new Error('CakeError')
    this.stack = erro.stack
    this.endereco = endereco
    this.message = `Não consegui entender o endereço: \n\n${endereco}`
}

CakeError.prototype = Error.prototype

export { CakeError }