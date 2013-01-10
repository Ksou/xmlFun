function Controller() {
    function Awake() {}
    function Start() {
        !RanOnce;
        RanOnce = !0;
    }
    function GenTable() {
        Alloy.Globals.SearchTerm = $.Search.value;
        alert("Look For : " + $.Search.value);
        var allChildren = $.MW.getChildren();
        for (var i = 0; i < allChildren.length; i++) allChildren[i].visible = !1;
        var NewTable = Alloy.createController("MusicTable");
        alert(Alloy.Globals.Tab2.title);
        alert(Alloy.Globals.Tab2);
        NewTable.openMainWindow(Alloy.Globals.Tab2);
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
    $.__views.__alloyId7 = A$(Ti.UI.createButton({
        title: "Search",
        top: "200",
        width: "100",
        height: "100",
        id: "__alloyId7"
    }), "Button", $.__views.MW);
    $.__views.MW.add($.__views.__alloyId7);
    GenTable ? $.__views.__alloyId7.on("click", GenTable) : __defers["$.__views.__alloyId7!click!GenTable"] = !0;
    $.__views.__alloyId8 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Here we're going to show the table view '",
        id: "__alloyId8"
    }), "Label", $.__views.MW);
    $.__views.MW.add($.__views.__alloyId8);
    $.__views.Search = A$(Ti.UI.createTextField({
        id: "Search",
        width: "80",
        hintText: " Search Here ",
        top: "30"
    }), "TextField", $.__views.MW);
    $.__views.MW.add($.__views.Search);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var RanOnce = !1;
    __defers["$.__views.MW!focus!Start"] && $.__views.MW.on("focus", Start);
    __defers["$.__views.__alloyId7!click!GenTable"] && $.__views.__alloyId7.on("click", GenTable);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;