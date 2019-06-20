import aceitouSalvar from '../storage/aceitouSalvar.js'

if(aceitouSalvar === null) {
    const aceitouSalvar = confirm('Você aceita salvar as suas informações?')
    if(!aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações')
    }
    localStorage.setItem("aceitouSalvar", aceitouSalvar)
}

