function Controller() {
    function PostLayout() {
        Look();
        ButtonSetUp();
    }
    function ButtonSetUp() {
        MW.setRightNavButton($.InfoButton);
        MW.setLeftNavButton($.BackButton);
    }
    function NavButton(e) {
        alert(e.title);
    }
    function Look() {
        var LocText = Alloy.Globals.SearchTerm;
        alert(LocText);
    }
    function RestoreSearch() {
        MW = Alloy.Globals.TempWin;
        var allChildren = MW.getChildren();
        for (var i = 0; i < allChildren.length; i++) allChildren[i].visible = !0;
        $.Table && MW.remove($.Table);
        Alloy.Globals.TempWin = null;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.MusicTable = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "MusicTable",
        id: "MusicTable"
    }), "Window", null);
    $.addTopLevelView($.__views.MusicTable);
    $.__views.__alloyId9 = A$(Ti.UI.createTableViewRow({
        title: "Apple",
        id: "__alloyId9"
    }), "TableViewRow", null);
    var __alloyId10 = [];
    __alloyId10.push($.__views.__alloyId9);
    $.__views.Table = A$(Ti.UI.createTableView({
        data: __alloyId10,
        id: "Table"
    }), "TableView", $.__views.MusicTable);
    $.__views.MusicTable.add($.__views.Table);
    RestoreSearch ? $.__views.Table.on("click", RestoreSearch) : __defers["$.__views.Table!click!RestoreSearch"] = !0;
    PostLayout ? $.__views.Table.on("postayout", PostLayout) : __defers["$.__views.Table!postayout!PostLayout"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var MW = Alloy.Globals.TempWin;
    exports.openMainWindow = function(_tab) {
        _tab.open($.MusicTable);
    };
    __defers["$.__views.Table!click!RestoreSearch"] && $.__views.Table.on("click", RestoreSearch);
    __defers["$.__views.Table!postayout!PostLayout"] && $.__views.Table.on("postayout", PostLayout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;