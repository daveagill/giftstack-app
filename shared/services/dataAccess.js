"use strict";

module.exports = function() {
	var data = [
		{
			owner: "Dad",
			gifts: [
				{
					name: "Puzzle Ball",
					price: 20
				},
				{
					name: "Ales",
					price: 15
				}
			]
		},
		{
			owner: "Bub",
			gifts: [
				{
					name: "Bublove",
					price: 20
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
	];

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
	}

	api.createGift = function(stackID, name, price) {
		data[stackID].gifts.push({
			name: name,
			price: price
		});
	}
	
	return api;
};