const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');


const BASE_URL = 'https://www.numbeo.com';

const COST_OF_LIVING_URL = `${BASE_URL}/cost-of-living/in/Amsterdam`;

const GET_COST = '/getCost/';
const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
	res.send({ Error: 'no route'});
});

app.get(GET_COST, (req, res) => {
	axios.get(COST_OF_LIVING_URL)
		.then(response => {
			res.send(parseCostOfLiving(response.data));
		})
		.catch(error => {
			console.log(error);
		});
});

var costOfLivingResponse = {
	restaurants: {

	},
	markets: {

	},
	transportation: {

	},
	utilities: {

	},
	sports: {

	},
	childcare: {

	},
	clothing: {

	},
	rent: {

	},
	buy: {

	},
	salary: {

	}

};


function parseCostOfLiving(HTMLString) {
	let response = {};
	const $ = cheerio.load(HTMLString);
	let trList = $('.data_wide_table').find('tr');
	let isTitle = false;
	Object.keys(trList).map(key => {
		//if ($(trList[key]))
	});
	return;
}



app.listen(PORT, () => console.log('Server running at 3000'));


let city = '';




