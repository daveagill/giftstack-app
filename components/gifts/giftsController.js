"use struct";

module.exports = function(dataAccess, runtimeState, pageNavigator) {
	var giftData = dataAccess.getStack( runtimeState.getSelectedList() );

	this.owner = giftData.owner;
	this.giftList = giftData.gifts;

	this.selectGift = function(giftID) {
		runtimeState.selectGift(giftID);
	};

	this.createNew = function() {
		pageNavigator.pushNewGiftView();
	}
};