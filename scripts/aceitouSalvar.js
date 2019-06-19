
let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))

if(aceitouSalvar === null) {
    aceitouSalvar = confirm('Você aceita salvar as suas informações?')
    if(!aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações')
    }
    localStorage.setItem("aceitouSalvar", aceitouSalvar)
}

export default aceitouSalvar

// pode ser invocado a function como (() => { declaração aqui })
// IIFE
// Ativar o strict mode, chamando uma string
// Módulo (Module Pattern) = possui escopo próprio (IIFE + strict mode)

//export default aceitouSalvar - exporta sem a necessidade de criar uma constante com o valor desejado
