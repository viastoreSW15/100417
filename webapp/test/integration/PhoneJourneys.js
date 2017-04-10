jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"asug/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"asug/test/integration/pages/App",
	"asug/test/integration/pages/Browser",
	"asug/test/integration/pages/Master",
	"asug/test/integration/pages/Detail",
	"asug/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "asug.view."
	});

	sap.ui.require([
		"asug/test/integration/NavigationJourneyPhone",
		"asug/test/integration/NotFoundJourneyPhone",
		"asug/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});