const connection = require('../database/connections');//conexao com o bd
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    //listagem de ongs
    async index(request, response){ 
        const ongs = await connection('ongs').select('*'); //seleciona todas(*) as ongs
    
        return response.json(ongs);
    },

    //cadastro de ongs
    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id =  generateUniqueId();//gera id
        
        await connection('ongs').insert({ //inserir dados na tabela ongs
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id })//retorna apenas id
    }
};