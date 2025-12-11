import { Elysia, t } from "elysia"
import { CatService } from "./services/cat.service"

const catService = new CatService()

export const api = new Elysia({ prefix: "/api" })
  .get("/", () => ({
    seed: "/api/v1/:seed[0-14]",
    name: "/api/v1/:name",
    random: "/api/v1/random",
    cats: "/api/v1/cats",
  }))
  .group("/v1", (app) =>
    app
      .get("/cats", () => catService.getCats())
      .get("/random", async ({ request }) => {
         const catUrlPath = catService.getRandomCatUrl()
         const asset = await catService.fetchAsset(catUrlPath, request.url)
         
         // Forward the asset with our custom headers
         return new Response(asset.body, {
           headers: {
             "Content-Type": "image/svg+xml",
             "Cache-Control": "public, max-age=86400",
           },
         })
      })
      .get(
        "/:id",
        async ({ params: { id }, request }) => {
          const catUrlPath = catService.getCatUrlById(id)

          if (catUrlPath) {
             const asset = await catService.fetchAsset(catUrlPath, request.url)
             
             if (asset.ok) {
                 return new Response(asset.body, {
                   headers: {
                     "Content-Type": "image/svg+xml",
                     "Cache-Control": "public, max-age=86400",
                   },
                 })
             }
          }
          
          return new Response("Not Found", { status: 404 })
        },
        {
          params: t.Object({
            id: t.String(),
          }),
        }
      )
  )
