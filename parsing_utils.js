const cheerio = require('cheerio');

function parseCostOfLiving(HTMLString, knownCategories) {
	let response = {};
	const $ = cheerio.load(HTMLString);
	let trList = $('.data_wide_table').find('tr');
	let responseObj = {};
	let category = '';
	Object.keys(trList).map(key => {
		let row = $(trList[key]);
		if (row.find('.highlighted_th').length) {
			let title = row.find('.highlighted_th')[0].innerText;
			category = getKnownCategory(title);
			if (category.trim()) {
				responseObj[category] = knownCategories[category];
				responseObj[category].data = [];
			}
		} else if (!category.trim()) {
			responseObj[category].data = '';
		}
	});
	return responseObj;
}

function getKnownCategory(category, knownCategories) {
	let knownCategoryKey = '';
	category = category.toLowerCase();
	Object.keys(knownCategories).map(key => {
		if (knownCategoryKey === '' && 
			category.indexOf(knownCategories[key].term) !== -1) {
			knownCategoryKey = key;
		}
	});
	return knownCategoryKey;
}

module.exports = {
	parseCostOfLiving
};