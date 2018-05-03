const PORT = 3000;

const BASE_URL = 'https://www.numbeo.com';

const NUMBEO_ENDPOINTS = Object.freeze({
	COST_OF_LIVING: `${BASE_URL}/cost-of-living/in/`,
	CITY_SEARCH: `${BASE_URL}/common/CitySearchJson?term=`
});

const ENDPOINTS = Object.freeze({
	GET_COST: '/getCost',
	FIND_CITY: '/findCity'
});

const COST_CATEGORIES = Object.freeze({
	RESTAURANT : {
		term: 'restaurants',
		displayName: 'Restaurants'
	},
	MARKET: {
		term: 'markets',
		displayName: 'Markets'
	},
	TRANSPORTATION: {
		term:'transportation',
		displayName: 'Transportation'
	},
	UTILITY: {
		term:'utilities',
		displayName: 'Utilities (Monthly)'
	},
	SPORTS: {
		term:'sports',
		displayName: 'Sports And Leisure'
	},
	CHILDCARE: {
		term: 'childcare',
		displayName: 'Childcare'
	},
	CLOTHING: {
		term: 'clothing',
		displayName: 'Clothing And Shoes'
	},
	RENT: {
		term:'rent',
		displayName: 'Rent Per Month'
	},
	BUY: {
		term: 'buy',
		displayName: 'Buy Apartment Price'
	},
	SALARY: {
		term: 'salaries',
		displayName: 'Salaries And Financing'
	}
});

module.exports = {
	PORT,
	BASE_URL,
	NUMBEO_ENDPOINTS,
	ENDPOINTS,
	COST_CATEGORIES
};