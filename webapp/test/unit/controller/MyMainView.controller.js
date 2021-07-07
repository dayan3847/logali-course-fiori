/*global QUnit*/

sap.ui.define([
	"logaligroup/invoices/controller/MyMainView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MyMainView Controller");

	QUnit.test("I should test the MyMainView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
