import chai from 'chai'
import { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/index'

chai.use(chaiHttp)

describe("API tests", () => {

    let server

    before(() => {
        server = app.listen(8080)
    })

    after(() => {
        server.close()
    })

    it("should return the api version on /api", (done) => {
        chai.request(app)
            .get('/api')
            .end((err, res) => {
                expect(res.body).to.be.a('Object')
                expect(res.body).to.have.property('apiVersion')
                expect(res.status).to.equal(200)
                done()
            })
    })

    it("should 404 when requested cat name doesn't exist", (done) => {
        chai.request(app)
            .get('/api/v1/hello')
            .end((err, res) => {
                expect(res.status).to.equal(404)
                done()
            })
    })

    it('requesting a cat name should return a cat svg', (done) => {
        chai.request(app)
            .get('/api/v1/book')
            .end((err, res) => {
                expect(res.headers['content-type']).to.equal('image/svg+xml')
                expect(res.status).to.equal(200)
                done()
            })
    })

    it('requesting any number should return a cat svg', (done) => {
        chai.request(app)
            .get('/api/v1/0')
            .end((err, res) => {
                expect(res.headers['content-type']).to.equal('image/svg+xml')
                expect(res.status).to.equal(200)
                done()
            })
    })
})