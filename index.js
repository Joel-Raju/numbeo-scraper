const axios = require('axios');
const express = require('express');

const CONSTANTS = require('./constants.js');
const parser = require('./parsing_utils.js');

const app = express();

app.get('/', (req, res) => {
	res.send({ Message: 'Server up and running'});
});

app.get(CONSTANTS.ENDPOINTS.GET_COST, (req, res) => {
	if (!req.query.city || !req.query.city.trim()) {
		return res.status(400).send('Bad Request');
	}
	axios.get(`${CONSTANTS.NUMBEO_ENDPOINTS.COST_OF_LIVING}${req.query.city}`)
		.then(response => {
			res.send(parser.parseCostOfLiving(response.data, CONSTANTS.COST_CATEGORIES));
		})
		.catch(error => {
			console.log(error);
		});
});

app.get(CONSTANTS.ENDPOINTS.FIND_CITY, (req, res) => {
	if (!req.query.search || !req.query.search.trim()) {
		return res.status(400).send('Bad Request');
	}
	axios.get(`${CONSTANTS.NUMBEO_ENDPOINTS.CITY_SEARCH}${req.query.search}`)
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			console.log(error);
		});
});

app.get('*', (req, res) => {
	res.send({ Error: 'no route'});
});

app.listen(CONSTANTS.PORT, () => console.log('Server running at 3000'));