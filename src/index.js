import express from "express"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser"
import api from "./api/index.js"
import fs from "fs"
import path from "path"
import { createServer as createViteServer } from "vite"
import { fileURLToPath } from "url"
import { dirname } from "path"
import apicache from "apicache"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const config = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./config.json"), "utf-8")
)

let app = express()
let cache = apicache.middleware

app.use(cache("3 week"))

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: "custom"
})

app.use(vite.middlewares)

// logger
app.use(morgan("dev"))

// 3rd party middleware
app.use(cors())

app.use(
  bodyParser.json({
    limit: config.bodyLimit
  })
)

// Set all asset directories to /static/dist/*
app.use("/static", express.static("assets"))

app.get("/", function (req, res, next) {
  try {
    let html = fs.readFileSync(
      path.resolve(__dirname, "views/index.html"),
      "utf-8"
    )
    res.status(200).set({ "Content-Type": "text/html" }).end(html)
  } catch (e) {
    vite.ssrFixStacktrace(e)
    next(e)
  }
})

// api router
app.use("/api", api({ config }))

let server = app.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${server.address().port}`)
})

export { app, server }
