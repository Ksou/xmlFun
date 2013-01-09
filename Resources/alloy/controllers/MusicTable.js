function Controller() {
    function Awake() {
        Look();
    }
    function Look() {
        var LocText = Alloy.Globals.SearchTerm;
        alert(LocText);
    }
    function RestoreSearch() {
        var MW = Alloy.Globals.TempWin, allChildren = MW.getChildren();
        for (var i = 0; i < allChildren.length; i++) allChildren[i].visible = !0;
        $.Table && MW.remove($.Table);
        Alloy.Globals.TempWin = null;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.Table = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Generate test",
        id: "Table"
    }), "Label", null);
    $.addTopLevelView($.__views.Table);
    RestoreSearch ? $.__views.Table.on("click", RestoreSearch) : __defers["$.__views.Table!click!RestoreSearch"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.Table!click!RestoreSearch"] && $.__views.Table.on("click", RestoreSearch);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;