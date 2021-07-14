sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("logaligroup.invoices.controller.MyMainView", {
            onInit: function () {
                const myJsonModel = new sap.ui.model.json.JSONModel();
                const myView = this.getView();
                myJsonModel.loadData("./model/selectionScreenMenu.json");
                myView.setModel(myJsonModel, "selectionScreen");
            },
            onFilter: function (oEvent) {
                const oData = this.getView().getModel('selectionScreen').getData();
                let filters = [];
                if (oData.ShipName !== "") {
                    filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName));
                }
                if (oData.CountryKey !== "") {
                    filters.push(new Filter("Country", FilterOperator.EQ, oData.CountryKey));
                }

                const oBinding = this.getBindingOfList();
                oBinding.filter(filters);
            },
            onClearFilters: function () {
                const myModelSs = this.getView().getModel("selectionScreen");
                myModelSs.setProperty("/CountryKey", "");
                myModelSs.setProperty("/ShipName", "");
                const oBinding = this.getBindingOfList();
                oBinding.filter([]);
            },
            getBindingOfList: function () {
                const oList = this.getView().byId("invoicesList");
                return oList.getBinding("items");
            }
        });
    });
