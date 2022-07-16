import { Router } from "express"
import cats from "../models/cats.js"
import { getCat } from "./util.js"

export default () => {
  let api = Router()

  /**
   * @api {get} /api/v1/random Request random cat
   *
   * @apiParam {Number} id Users unique ID.
   *
   * @apiSuccess {SVG} SVG file Random cat SVG.
   */
  api.get("/random", function (req, res) {
    let randomNum = Math.floor(Math.random() * cats.length)
    let cat = getCat(randomNum)
    return res.sendFile(cat)
  })

  /**
   * @api {get} /api/v1/:id Request a specific cat by name or number
   *
   * @apiParam {String || Number} Cat unique name.
   *
   * @apiSuccess {SVG} SVG file specific cat SVG matching the name or number.
   */
  api.get("/:id", function (req, res) {
    let path = req.params.id
    let cat
    if (cats.includes(path)) {
      let index = cats.indexOf(path)
      cat = getCat(index)
    } else if (!isNaN(Number(path))) {
      cat = getCat(path)
    } else {
      cat = getCat(path.length)
    }
    return cat ? res.sendFile(cat) : res.sendStatus(404)
  })

  return api
}
