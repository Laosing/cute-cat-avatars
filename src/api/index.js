import { Router } from 'express';
import cats from '../models/cats';
import { getCat, getCatRoute, routes } from './api';

export default ({ config }) => {
	let api = Router();
	let apiVersion = '/v1';

	api.get('/', (req, res) => {
		res.json({ apiVersion });
	});

	api.get(routes(apiVersion), function(req, res) {
		if (!req.route.path.includes(req.path)) {
			return res.sendStatus(404);
		}
		let cat = getCatRoute(req);
		return res.sendFile(cat);
	});

	api.get(apiVersion + '/random', function (req, res) {
		let randomNum = Math.floor(Math.random() * cats.length)
		let cat = getCat(randomNum)
		return res.sendFile(cat);
	});

	api.get(apiVersion + '/:catId', (req, res) => {
		let cat = getCat(req.params.catId)
		return res.sendFile(cat);
	});

	return api;
}
