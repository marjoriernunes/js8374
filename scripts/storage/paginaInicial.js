export let paginaInicial = localStorage.getItem('paginaInicial')

export function setPaginaInicial(paginaInicial) {
    localStorage.setItem("paginaInicial", paginaInicial)
}

export function setPedePaginaInicial (value) {
    paginaInicial = value
    localStorage.setItem('paginaInicial', value)
}