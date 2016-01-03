"use strict";

module.exports = function($rootScope) {
	var onsNav = $rootScope.ui.navi;

	var newStackDialog = null;
	var newGiftDialog = null;

	function showDialog(view, stasher) {
		ons.createDialog(view).then(function(d) { stasher(d); d.show(); });
	}

	var api = { };
	api.pushGiftsView = function() { onsNav.pushPage('views/gifts/giftsView.html'); };
	api.pushGiftDetailView = function() {  };

	api.showNewStackDialog = function() { showDialog('views/newStack/newStackDialogView.html', function(d) { newStackDialog = d; }); };
	api.hideNewStackDialog = function() { newStackDialog.destroy(); newStackDialog = null; };

	api.showNewGiftDialog = function() { showDialog('views/newGift/newGiftDialogView.html', function(d) { newGiftDialog = d; }); };
	api.hideNewGiftDialog = function() { newGiftDialog.destroy(); newGiftDialog = null; };
	return api;
};