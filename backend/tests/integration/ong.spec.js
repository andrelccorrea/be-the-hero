const request = require('supertest');
const connection = require('../../src/database/connection')
const app = require('../../src/app');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "ONG Teste de integração",
                email: "teste@teste.com.br",
                whatsapp: "12991965582",
                city: "Caraguatatuba",
                uf: "SP"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});