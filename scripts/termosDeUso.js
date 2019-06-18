if(!localStorage.getItem('aceitouTermos')) {

    const nome = prompt('Qual seu nome?')
    
    const aceitouTermos = confirm(`
    Olá ${nome}!
    
    Antes de usar o Cake, precisamos que 
    você aceite nossos termos de uso:
    
    • Você aceita que este software foi 
        feito por pessoas que participaram 
        do curso de JavaScript.
    • Você aceita que o código dessas 
        pessoas pode acessar tudo o que 
        você digitar aqui.
    `)
    
    if(!aceitouTermos) {
        alert('Deu ruim ' + nome + '! Valeu falou!')
        window.close()
    }else{
        localStorage.setItem('aceitouTermos', aceitouTermos)
    }
}
