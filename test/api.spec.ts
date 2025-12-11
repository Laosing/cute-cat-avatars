import { afterAll, beforeAll, describe, expect, it, mock } from "bun:test"
import { staticPlugin } from "@elysiajs/static"

// Mock cloudflare:workers for local testing
mock.module("cloudflare:workers", () => {
  return {
    env: {
      ASSETS: {
        fetch: async (req: Request) => {
          return fetch(req)
        }
      }
    }
  }
})

let app: any
let BASE_URL = ""

describe("Elysia App Tests", () => {
  beforeAll(async () => {
    // Dynamic import to allow mock to take effect
    const mod = await import("../src/index")
    app = mod.app
    
    // Extend app for testing static files locally
    const testApp = app
      .use(staticPlugin({ assets: "./public", prefix: "/" }))
      .get("/", () => Bun.file("./public/index.html"))
      
    testApp.listen(0)
    BASE_URL = `http://localhost:${testApp.server?.port}`
  })

  afterAll(() => {
    if (app) app.stop()
  })

  describe("API Functionality", () => {
    it("should return an object on /api", async () => {
      const res = await fetch(`${BASE_URL}/api`)
      expect(res.status).toBe(200)
      const body = (await res.json()) as any
      expect(body).toBeObject()
      expect(body.random).toBeDefined()
    })

    it("should return a cat svg for valid ID", async () => {
      const res = await fetch(`${BASE_URL}/api/v1/book`)
      expect(res.status).toBe(200)
      expect(res.headers.get("content-type")).toBe("image/svg+xml")
    })

    it("should handle numeric IDs correctly", async () => {
      const res = await fetch(`${BASE_URL}/api/v1/4`)
      expect(res.status).toBe(200)
      expect(res.headers.get("content-type")).toBe("image/svg+xml")
    })

    it("should fallback to name length for unknown IDs", async () => {
      const res = await fetch(`${BASE_URL}/api/v1/unknown-cat-id`)
      expect(res.status).toBe(200)
      expect(res.headers.get("content-type")).toBe("image/svg+xml")
    })

    it("should return random cat", async () => {
      const res = await fetch(`${BASE_URL}/api/v1/random`)
      expect(res.status).toBe(200)
      expect(res.headers.get("content-type")).toBe("image/svg+xml")
    })
  })

  describe("Static File Serving", () => {
    it("should serve index.html at root", async () => {
      const res = await fetch(`${BASE_URL}/`)
      expect(res.status).toBe(200)
      expect(res.headers.get("content-type")).toInclude("text/html")
      const text = await res.text()
      expect(text).toInclude("<!doctype html>")
    })

    it("should serve CSS files", async () => {
      const res = await fetch(`${BASE_URL}/css/styles.css`)
      expect(res.status).toBe(200)
      expect(res.headers.get("content-type")).toInclude("text/css")
    })

    it("should serve Image files", async () => {
      const res = await fetch(`${BASE_URL}/img/banner.svg`)
      expect(res.status).toBe(200)
      expect(res.headers.get("content-type")).toInclude("image/svg+xml")
    })

    it("should return 404 for missing static files", async () => {
      const res = await fetch(`${BASE_URL}/css/non-existent.css`)
      expect(res.status).toBe(404)
    })
  })

  describe("Security Headers", () => {
    it("should have security headers", async () => {
      const res = await fetch(`${BASE_URL}/api`)
      expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff")
      expect(res.headers.get("X-Frame-Options")).toBe("DENY")
      expect(res.headers.get("X-XSS-Protection")).toBe("1; mode=block")
      expect(res.headers.get("Content-Security-Policy")).toBeDefined()
    })

    it("should have CORS headers", async () => {
      const res = await fetch(`${BASE_URL}/api`, { method: "OPTIONS" })
      expect(res.headers.get("Access-Control-Allow-Origin")).toBe("*")
      expect(res.headers.get("Access-Control-Allow-Methods")).toBeDefined()
    })

    it("should have Cache-Control headers on API responses", async () => {
      const res = await fetch(`${BASE_URL}/api/v1/random`)
      expect(res.headers.get("Cache-Control")).toBe("public, max-age=86400")
    })
  })

  describe("Rate Limiting", () => {
    it("should enforce rate limits", async () => {
      let limitHit = false
      const ip = "1.2.3.4" 
      // Loop enough times to hit the limit (limit is 50 per min)
      for (let i = 0; i < 60; i++) {
        const response = await app.handle(new Request(`${BASE_URL}/api`, {
            headers: { "CF-Connecting-IP": ip }
        }))
        if (response.status === 429) {
          limitHit = true
          break
        }
      }
      expect(limitHit).toBe(true)
    })

    it("should return list of cats", async () => {
        const response = await app.handle(new Request(`${BASE_URL}/api/v1/cats`, {
            headers: { "CF-Connecting-IP": "5.6.7.8" } // Different IP
        }))
        expect(response.status).toBe(200)
        
        const cats = await response.json()
        expect(Array.isArray(cats)).toBe(true)
        expect(cats.length).toBeGreaterThan(0)
        expect(cats).toContain("announcer")
    })
  })
})
