import { app, server } from "../src/index.js"
import supertest from "supertest"
import { afterEach, describe, expect, it } from "vitest"

describe("API tests", () => {
  afterEach(async () => {
    await server.close()
  })

  it("should return an object on /api", async () => {
    const res = await supertest(app).get("/api")
    expect(res.body).to.be.a("Object")
    expect(res.status).to.equal(200)
  })

  it("should get a random cat by the length of the string when requested cat name doesn't exist", async () => {
    const res = await supertest(app).get("/api/v1/24141}{}@$@$!fasfafas")
    expect(res.headers["content-type"]).to.equal("image/svg+xml")
    expect(res.status).to.equal(200)
  })

  it("requesting a cat name should return a cat svg", async () => {
    const res = await supertest(app).get("/api/v1/book")
    expect(res.headers["content-type"]).to.equal("image/svg+xml")
    expect(res.status).to.equal(200)
  })

  it("requesting 0 should return a cat svg", async () => {
    const res = await supertest(app).get("/api/v1/0")
    expect(res.headers["content-type"]).to.equal("image/svg+xml")
    expect(res.status).to.equal(200)
  })

  it("requesting a number bigger than the cat array should return a cat svg", async () => {
    const res = await supertest(app).get("/api/v1/150")
    expect(res.headers["content-type"]).to.equal("image/svg+xml")
    expect(res.status).to.equal(200)
  })

  it("requesting a number within the cat array should return a cat svg", async () => {
    const res = await supertest(app).get("/api/v1/4")
    expect(res.headers["content-type"]).to.equal("image/svg+xml")
    expect(res.status).to.equal(200)
  })

  it("requesting random should return a random cat svg", async () => {
    const res = await supertest(app).get("/api/v1/random")
    expect(res.headers["content-type"]).to.equal("image/svg+xml")
    expect(res.status).to.equal(200)
  })
})
