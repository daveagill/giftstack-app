"use strict";

module.exports = function(dataAccess, pageNavigator, $scope) {

	var chooseOccasionDialog;
	ons.createDialog("chooseOccasion.dialog", {parentScope: $scope}).then(function(d) { chooseOccasionDialog = d; });

	var self = this;
	self.newStack = {
		ownerName: null,
		occasion: "Christmas"
	};


	self.create = function() {
		if (self.newStack.ownerName !== null) {
			dataAccess.createStack(self.newStack.ownerName);
		}
		pageNavigator.popView();
	}

	self.cancel = pageNavigator.popView;

	self.showOccasionChooser = function() {
		chooseOccasionDialog.show();
	}

	self.chooseOccasion = function(occasion) {
		self.newStack.occasion = occasion;
		chooseOccasionDialog.hide();
	}
};