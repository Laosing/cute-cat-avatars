import { Router } from 'express';
import cats from '../models/cats';
import { getCat, getCatRoute, routes } from './util';

export default () => {
    let api = Router();

    /**
     * @api {get} /api/v1/:id Request a specific cat by name or number
     *
     * @apiParam {String || Number} Cat unique name.
     *
     * @apiSuccess {SVG} SVG file specific cat SVG matching the name or number.
     */
	api.get('/:id', function(req, res) {
        let path = req.params.id;
        let cat;
		if (cats.includes(path)) {
            let index = cats.indexOf(path)
            cat = getCat(index);
        }
        if(!isNaN(Number(path))) {
            cat = getCat(path)
        }
        return cat ? res.sendFile(cat) : res.sendStatus(404);
	});

    /**
     * @api {get} /api/v1/random Request random cat
     *
     * @apiParam {Number} id Users unique ID.
     *
     * @apiSuccess {SVG} SVG file Random cat SVG.
     */
	api.get('/random', function (req, res) {
		let randomNum = Math.floor(Math.random() * cats.length)
		let cat = getCat(randomNum)
		return res.sendFile(cat);
	});

    return api;
}