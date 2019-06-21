import * as storageAceitouSalvar from '../storage/aceitouSalvar.js'

if(storageAceitouSalvar.aceitouSalvar === null) {
    const aceitouSalvar = confirm('Você aceita salvar as suas informações?')
    
    if(!storageAceitouSalvar.aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações')
    }
    storageAceitouSalvar.setAceitouSalvar(aceitouSalvar)
}

