import { Elysia } from "elysia"
import { CloudflareAdapter } from "elysia/adapter/cloudflare-worker"
import { cors } from "@elysiajs/cors"
import { rateLimit } from "elysia-rate-limit"
import { api } from "./api"

const app = new Elysia({ aot: false })
  // Security Headers
  .onRequest(({ set }) => {
    set.headers["X-Content-Type-Options"] = "nosniff"
    set.headers["X-Frame-Options"] = "DENY"
    set.headers["X-XSS-Protection"] = "1; mode=block"
    set.headers["Referrer-Policy"] = "no-referrer"
    set.headers["Content-Security-Policy"] = "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';"
  })
  // Middleware
  .use(cors())
  .use(rateLimit({
    max: 50,
    generator: (req) => req.headers.get("CF-Connecting-IP") ?? "unknown"
  }))
  // Mount API
  .use(api)

export { app }
export default new Elysia({ aot: false, adapter: CloudflareAdapter }).use(app)
