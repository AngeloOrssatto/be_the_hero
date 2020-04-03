const app = require('../../src/app');
const request = require('supertest');
const connection = require('../../src/database/connections');

describe('ONG', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async ()=>{
        await connection.destroy;
    })

    it('should be able to create a new ONG', async ()=>{
        const response = await request(app).post('/ongs').send({
            name: "Angelo",
            email: "angelojorssatto@hotmail.com",
            whatsapp: "45998615299",
            city: "Cascavel",
            uf: "PR"
        })
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
   
})