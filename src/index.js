import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './api';
import config from './config.json';

let app = express();

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors());

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// api router
app.use('/api', api({ config }));

let server = app.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${server.address().port}`);
});

export { app, server };
