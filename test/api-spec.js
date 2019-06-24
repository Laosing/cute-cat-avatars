import { expect } from 'chai'
import { app, server } from '../src/index'
import supertest from 'supertest'

describe("API tests", () => {

    afterEach(async () => {
        await server.close();
    })

    it("should return an object on /api", async () => {
        const res = await supertest(app).get('/api')
        expect(res.body).to.be.a('Object')
        expect(res.status).to.equal(200)
    })

    it("should 404 when requested cat name doesn't exist", async () => {
        const res = await supertest(app).get('/api/v1/hello')
        expect(res.status).to.equal(404)
    })

    it("should 404 when request has numbers and letters", async () => {
        const res = await supertest(app).get('/api/v1/hello41241')
        expect(res.status).to.equal(404)
    })

    it("should 404 when request has letters and numbers", async () => {
        const res = await supertest(app).get('/api/v1/014hello')
        expect(res.status).to.equal(404)
    })

    it('requesting a cat name should return a cat svg', async () => {
        const res = await supertest(app).get('/api/v1/book')
        expect(res.headers['content-type']).to.equal('image/svg+xml')
        expect(res.status).to.equal(200)
    })

    it('requesting 0 should return a cat svg', async () => {
        const res = await supertest(app).get('/api/v1/0')
        expect(res.headers['content-type']).to.equal('image/svg+xml')
        expect(res.status).to.equal(200)
    })

    it('requesting a number bigger than the cat array should return a cat svg', async () => {
        const res = await supertest(app).get('/api/v1/150')
        expect(res.headers['content-type']).to.equal('image/svg+xml')
        expect(res.status).to.equal(200)
    })

    it('requesting a number within the cat array should return a cat svg', async () => {
        const res = await supertest(app).get('/api/v1/4')
        expect(res.headers['content-type']).to.equal('image/svg+xml')
        expect(res.status).to.equal(200)
    })
})