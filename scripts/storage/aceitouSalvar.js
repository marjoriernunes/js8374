export let aceitouSalvar = JSON.parse(localStorage.getItem('aceitouSalvar'))

export function setAceitouSalvar(value) {
    aceitouSalvar = value
    localStorage.setItem("aceitouSalvar", value)
}