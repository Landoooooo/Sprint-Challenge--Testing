const server = require('./server');

const request = require('supertest');

describe('GET /games', () => {
    it('should return a list of games and a status 200', async () => {
        const res = await request(server).get('/games');

        expect(res.status).toBe(200)
    })

    it('should always return an array, even if no games are stored', async () => {
        const res = await request(server).get('/games')

        expect(res.body).toEqual(expect.any(Array));
    })

    it('should return as JSON', async () => {
        const res = await request(server).get('/games')

        expect(res.type).toBe('application/json')
    })
})

describe('POST /games', () => {
    it('should return 200', async () => {
        const body = {
            title: "greg",
            genre:"polka",
            releaseYear:1984
        }

        return request(server).post('/games')

        expect(res.status).toBe(200)
    });

    it('should return 422 if info is missing', async () => {
        const body = {
            title: "asdf"
        }

        return request(server.post('/games'))
        expect(res.status).toBe(422)
    })

    it('should return as JSON', async () => {
        const body = {
            title: "greg",
            genre:"polka",
            releaseYear:1984
        }

        return request(server).post('/games')

        expect(res.type).toBe('application/json')

        expect(res.type).toBe('application/json')
    })
})