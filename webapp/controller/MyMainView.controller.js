sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.invoices.controller.MyMainView", {
            onInit: function () {
                const myJsonModel = new sap.ui.model.json.JSONModel();
                const myView = this.getView();
                myJsonModel.loadData("./model/selectionScreenMenu.json");
                myView.setModel(myJsonModel, "selectionScreen");
            },
            onFilter: function (oEvent) {
            },
            onClearFilters: function () {
                const myModelSs = this.getView().getModel("selectionScreen");
                myModelSs.setProperty("/CountryKey","");
                myModelSs.setProperty("/ShipName","");
            }
        });
    });
