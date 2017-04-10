jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Categories in the list
// * All 3 Categories have at least one Products

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
		"asug/test/integration/MasterJourney",
		"asug/test/integration/NavigationJourney",
		"asug/test/integration/NotFoundJourney",
		"asug/test/integration/BusyJourney",
		"asug/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});