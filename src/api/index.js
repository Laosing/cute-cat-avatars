import { Router } from 'express';
import v1 from './version-1';

export default ({ config }) => {
	let api = Router();

	api.use('/v1', v1())

	api.get('/', (req, res) => {
		res.json({
			seed: "/api/v1/:seed[0-14]",
			name: '/api/v1/:name',
			random: '/api/v1/random'
		});
	});

	return api;
}
