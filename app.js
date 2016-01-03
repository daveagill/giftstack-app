"use strict";

var app = angular.module("giftstack", ['onsen']);

app.factory("dataAccess", require("./shared/services/dataAccess.js"));
app.factory("runtimeState", require("./shared/services/runtimeState.js"));
app.factory("pageNavigator", require("./shared/services/pageNavigator.js"));


app.controller("stacksController", require("./components/main/stacksController.js"));
app.controller("newStackController", require("./components/newStack/newStackController.js"));

app.controller("giftsController", require("./components/gifts/giftsController.js"));
app.controller("newGiftController", require("./components/newGift/newGiftController.js"));
