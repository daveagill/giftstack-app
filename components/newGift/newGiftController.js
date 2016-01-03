"use strict";

module.exports = function(dataAccess, runtimeState, pageNavigator) {

	var stackID = runtimeState.getSelectedList();


	var self = this;
	self.newGift = null

	self.create = function() {
		if (self.newGift !== null) {
			dataAccess.createGift(stackID, self.newGift.name, self.newGift.price);
		}
		pageNavigator.hideNewGiftDialog();
	}

};