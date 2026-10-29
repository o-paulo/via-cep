const { buscarEnderecoPorCep } = require('../services/viaCepService')

async function buscarCep(req, res){
    const { cep } = req.params
    const dadosEndereco = await buscarEnderecoPorCep(cep)
    return res.json(dadosEndereco)
}

module.exports = {
    buscarCep
}