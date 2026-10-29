//Arquivo que tem a funcao de somente chamar a API do via cep.

async function buscarEnderecoPorCep(cep){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
    const data = await response.json()
    return data
}

module.exports = {
    buscarEnderecoPorCep
}