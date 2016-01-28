"use strict";

module.exports = function($rootScope, runtimeState) {
	var onsNav = $rootScope.ui.navi;

	var currentDialog = null;

	function showDialog(view) {
		killDialog(); // only support 1 dialog at a time
		ons.createDialog(view).then(function(d) { currentDialog = d; d.show(); });
	}

	function killDialog() {
		if (currentDialog !== null) {
			currentDialog.destroy();
			currentDialog = null;
			return true;
		}
		return false;
	}
	
	// per-page onPop event dispatcher
	onsNav.on("prepop", function(event) {
		var onPopCallback = event.leavePage.options.onPop;
		if (onPopCallback !== undefined) {
			onPopCallback();
		}
	});

	var api = { };
	api.popView = function() {
		if (!killDialog()) {
			onsNav.popPage();
		}
	}

	api.pushGiftsView = function(stackID) {
		onsNav.pushPage('views/gifts/giftsView.html', {
			onPop: function() { runtimeState.selectList(null); }
		});
		runtimeState.selectList(stackID);
	};
		
	api.pushNewStackView = function() { onsNav.pushPage('views/newStack/newStackView.html'); }
	api.pushNewGiftView = function() { showDialog('views/newGift/newGiftDialogView.html'); };
	return api;
};