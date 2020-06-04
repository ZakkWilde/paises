/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 A_Country in the list
// * All 3 A_Country have at least one to_Text

sap.ui.require([
	"sap/ui/test/Opa5",
	"ovly/paises/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ovly/paises/test/integration/pages/App",
	"ovly/paises/test/integration/pages/Browser",
	"ovly/paises/test/integration/pages/Master",
	"ovly/paises/test/integration/pages/Detail",
	"ovly/paises/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ovly.paises.view."
	});

	sap.ui.require([
		"ovly/paises/test/integration/MasterJourney",
		"ovly/paises/test/integration/NavigationJourney",
		"ovly/paises/test/integration/NotFoundJourney",
		"ovly/paises/test/integration/BusyJourney",
		"ovly/paises/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});