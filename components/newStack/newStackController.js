"use strict";

module.exports = function(dataAccess, pageNavigator) {

	var self = this;
	self.newStack = null

	self.create = function() {
		if (self.newStack !== null) {
			dataAccess.createStack(self.newStack.ownerName);
		}
		pageNavigator.hideNewStackDialog();
	}

};