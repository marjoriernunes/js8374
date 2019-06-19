
(function () {
    "use strict"
    const aceitouAntes = localStorage.getItem('aceitouSalvar')
    
    if(!aceitouAntes) {
        const aceitouSalvar = confirm('Você aceita salvar as suas informações?')
        if(!aceitouSalvar) {
            alert('Você pode mudar isso na página de configurações')
        }
        localStorage.setItem("aceitouSalvar", aceitouSalvar)
    }
})()

// pode ser invocado a function como (() => { declaração aqui })
// IIFE
// Ativar o strict mode, chamando uma string
// Módulo (Module Pattern) = possui escopo próprio (IIFE + strict mode)