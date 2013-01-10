function Controller() {
    function Awake() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.About = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "About",
        id: "About"
    }), "Window", null);
    $.addTopLevelView($.__views.About);
    $.__views.__alloyId0 = A$(Ti.UI.createScrollView({
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "true",
        height: "80%",
        width: "80%",
        id: "__alloyId0"
    }), "ScrollView", $.__views.About);
    $.__views.About.add($.__views.__alloyId0);
    $.__views.__alloyId1 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "This is a music player built in the Alloy framework",
        id: "__alloyId1"
    }), "Label", $.__views.__alloyId0);
    $.__views.__alloyId0.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;