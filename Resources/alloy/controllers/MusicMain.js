function Controller() {
    function Awake() {}
    function Start() {
        !RanOnce;
        RanOnce = !0;
    }
    function GenTable() {
        Alloy.Globals.SearchTerm = $.Search.value;
        var NewTable = Alloy.createController("MusicTable").getView();
        alert("From Music Main" + $.Search.value);
        var allChildren = $.MW.getChildren();
        for (var i = 0; i < allChildren.length; i++) allChildren[i].visible = !1;
        $.MW.add(NewTable);
        Alloy.Globals.TempWin = $.MW;
    }
    function RestoreSearch() {
        var allChildren = $.MW.getChildren();
        for (var i = 0; i < allChildren.length; i++) allChildren[i].visible = !0;
        $.Table && $.MW.remove($.Table);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.MW = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "MusicMain",
        id: "MW"
    }), "Window", null);
    $.addTopLevelView($.__views.MW);
    Start ? $.__views.MW.on("focus", Start) : __defers["$.__views.MW!focus!Start"] = !0;
    $.__views.__alloyId10 = A$(Ti.UI.createButton({
        title: "",
        top: "40",
        id: "__alloyId10"
    }), "Button", $.__views.MW);
    $.__views.MW.add($.__views.__alloyId10);
    GenTable ? $.__views.__alloyId10.on("click", GenTable) : __defers["$.__views.__alloyId10!click!GenTable"] = !0;
    $.__views.__alloyId11 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Here we're going to show the table view '",
        id: "__alloyId11"
    }), "Label", $.__views.MW);
    $.__views.MW.add($.__views.__alloyId11);
    $.__views.Search = A$(Ti.UI.createTextField({
        id: "Search",
        width: "60",
        hintText: " Search Here ",
        top: "30"
    }), "TextField", $.__views.MW);
    $.__views.MW.add($.__views.Search);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var RanOnce = !1;
    __defers["$.__views.MW!focus!Start"] && $.__views.MW.on("focus", Start);
    __defers["$.__views.__alloyId10!click!GenTable"] && $.__views.__alloyId10.on("click", GenTable);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;