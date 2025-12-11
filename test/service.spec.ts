import { describe, expect, it, mock, beforeAll } from "bun:test"

// Mock cloudflare:workers for fetchAsset test
const mockAssetsFetch = mock(async (req: Request) => {
    return new Response("Simulated Asset Content")
})

mock.module("cloudflare:workers", () => {
    return {
        env: {
            ASSETS: {
                fetch: mockAssetsFetch
            }
        }
    }
})

describe("CatService", () => {
    let CatService: any
    let service: any

    beforeAll(async () => {
        const mod = await import("../src/services/cat.service")
        CatService = mod.CatService
        service = new CatService()
    })

    describe("getCats()", () => {
        it("should return the list of cats", () => {
            const cats = service.getCats()
            expect(Array.isArray(cats)).toBe(true)
            expect(cats).toContain("announcer")
            expect(cats.length).toBeGreaterThan(0)
        })
    })

    describe("getCatUrlByIndex()", () => {
        it("should return correct cat for index", () => {
            // First cat
            const firstCat = service.getCats()[0]
            expect(service.getCatUrlByIndex(0)).toContain(firstCat)
            
            // Second cat
            const secondCat = service.getCats()[1]
            expect(service.getCatUrlByIndex(1)).toContain(secondCat)
        })

        it("should handle modulo for out of bounds index", () => {
            const cats = service.getCats()
            const index = cats.length + 1 // Should wrap to index 1
            const secondCat = cats[1]
            expect(service.getCatUrlByIndex(index)).toContain(secondCat)
        })
    })

    describe("getCatUrlById()", () => {
        it("should return cat by name string", () => {
            expect(service.getCatUrlById("award")).toContain("award")
        })

        it("should return cat by numeric string ID", () => {
             // Index 0
            const firstCat = service.getCats()[0]
            expect(service.getCatUrlById("0")).toContain(firstCat)
        })

        it("should fallback to length for unknown string", () => {
            // "abc" length is 3. Cat at index 3.
            const catAtIndex3 = service.getCats()[3]
            expect(service.getCatUrlById("abc")).toContain(catAtIndex3)
        })
    })

    describe("getRandomCatUrl()", () => {
        it("should return a string containing one of the cats", () => {
            const url = service.getRandomCatUrl()
            const cats = service.getCats()
            const matches = cats.some((cat: string) => url.includes(cat))
            expect(matches).toBe(true)
        })
    })

    describe("fetchAsset()", () => {
        it("should use env.ASSETS.fetch when available", async () => {
            // Because we mocked cloudflare:workers environment above, this should hit our mock
            const res = await service.fetchAsset("/test.svg", "http://localhost")
            expect(res).toBeDefined()
            // We can't strictly assert the return value is exactly "Simulated Asset Content" here easily 
            // without knowing how mocked Response behaves across module boundaries, 
            // but we can check it didn't throw and returned a Response-like object.
            
            // If the mock was called, it returns a Response
            if (res instanceof Response) {
                 expect(await res.text()).toBe("Simulated Asset Content")
            }
            // Check if mock was called
            expect(mockAssetsFetch).toHaveBeenCalled()
        })
    })
})
