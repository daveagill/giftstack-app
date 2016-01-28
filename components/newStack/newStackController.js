"use strict";

module.exports = function(dataAccess, runtimeState, pageNavigator, $scope) {

	var chooseOccasionDialog;
	ons.createDialog("chooseOccasion.dialog", {parentScope: $scope}).then(function(d) { chooseOccasionDialog = d; });

	var self = this;
	self.title = "New Stack";
	self.newStack = {
		ownerName: null,
		occasion: "Christmas"
	};

	var isEditMode = runtimeState.getSelectedList() !== null;
	if (isEditMode) {
		var existingStack = dataAccess.getStack( runtimeState.getSelectedList() );
		self.title = "EditStack";
		self.newStack.ownerName = existingStack.owner;
	}

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