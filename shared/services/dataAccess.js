"use strict";

module.exports = function() {
	const LOCAL_STORAGE_KEY = "data";

	/*var data = [
		{
			owner: "Dad",
			gifts: [
				{
					name: "Puzzle Ball",
					price: 20
				},
				{
					name: "Beer",
					price: 15
				}
			]
		},
		{
			owner: "Leah",
			gifts: [
				{
					name: "iPad",
					price: 400
				},
				{
					name: "Chocolate Orange",
					price: 15
				}
			]
		},
		{
			owner: "Sukball",
			gifts: [
				{
					name: "Mealworms",
					price: 2
				},
				{
					name: "Grape",
					price: 0.01
				}
			]
		}
	];*/

	// load data
	var data = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY) );

	function saveData() {
		localStorage.setItem( LOCAL_STORAGE_KEY, angular.toJson(data) );
	}

	var api = { };

	api.listStacks = function() {
		return data;
	};

	api.listGiftsForStack = function(stackID) {
		return data[stackID];
	};

	api.createStack = function(ownerName) {
		data.push({
			owner: ownerName,
			gifts: []
		});
		saveData();
	}

	api.createGift = function(stackID, name, price) {
		data[stackID].gifts.push({
			name: name,
			price: price
		});
		saveData();
	}
	
	return api;
};