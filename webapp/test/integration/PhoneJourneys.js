/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"ovly/paises/test/integration/NavigationJourneyPhone",
		"ovly/paises/test/integration/NotFoundJourneyPhone",
		"ovly/paises/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});