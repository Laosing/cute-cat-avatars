import cats from "../models/cats.js"
import path from "path"
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const assetsDir = "../../assets/img/api/"

/**	Gets the cat file based on the inputted id
 *	@param {number} id	Cat id
 */
export function getCat(id) {
  if (id >= cats.length) {
    id = id % cats.length
  }
  let catName = cats[id]
  let file = path.join(__dirname, `${assetsDir}${catName}.svg`)
  return file
}

/**	Gets the cat file based on the last parameter
 *  /api/v1/book will retrieve book.svg
 *	@param {object} req	The request
 */
export function getCatRoute(req) {
  let parts = req.path.split("/")
  let catName = parts[parts.length - 1]
  let file = path.join(__dirname, `${assetsDir}${catName}.svg`)
  return file
}

/**	Converts the cat array data into our routes /api/{version}/{route}
 *	@param {string} apiVersion	the api version
 */
export function routes() {
  return cats.map((route) => `/${route}`)
}
