function Controller() {
    function GenTable() {
        Alloy.Globals.SearchTerm = $.Search.value;
        Alloy.Globals.Debug && alert("Look For : " + $.Search.value);
        var NewTable = Alloy.createController("MusicTable");
        if (Alloy.Globals.Debug) {
            alert(Alloy.Globals.Tab2.title);
            alert(Alloy.Globals.Tab2);
        }
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
    $.__views.__alloyId7 = A$(Ti.UI.createButton({
        title: "Search",
        top: "230",
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
    __defers["$.__views.__alloyId7!click!GenTable"] && $.__views.__alloyId7.on("click", GenTable);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;