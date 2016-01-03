"use strict";

module.exports = function() {
	var selectedList = null;
	var selectedGift = null;

	var api = { };
	api.selectList = function(listID) { selectedList = listID; };
	api.getSelectedList = function() { return selectedList; };

	api.selectGift = function(giftID) { selectedGift = giftID; };
	api.getSelectedGift = function() { return selectedGift; };
	
	return api;
};