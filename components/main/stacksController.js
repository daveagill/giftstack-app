"use strict";

module.exports = function($scope, dataAccess, runtimeState, pageNavigator) {
	var ctrl = this;
	this.summaries = [];

	$scope.$watchCollection(dataAccess.listStacks,
		function(stacks) {
			ctrl.summaries = stacks.map( function(x, idx) {
				return {
					id: idx,
					owner: x.owner,
					numGifts: function() { return x.gifts.length; }
				};
			});
		}
	);

	this.select = function(listID) {
		runtimeState.selectList(listID);
		pageNavigator.pushGiftsView();
	};

	this.createNew = function() {
		pageNavigator.showNewStackDialog();
	}
};