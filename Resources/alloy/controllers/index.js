function Controller() {
    function onOpen() {
        Alloy.Globals.Tab2 = $.Tab2;
        Alloy.Globals.Debug = !0;
        Alloy.Globals.Debug && (Alloy.Globals.Tab2 = $.Tab2);
    }
    function onChange() {
        Alloy.Globals.Debug = $.DebugSwitch.value;
    }
    function Start() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = A$(Ti.UI.createTabGroup({
        id: "index"
    }), "TabGroup", null);
    $.__views.__alloyId3 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 1",
        id: "__alloyId3"
    }), "Window", null);
    onOpen ? $.__views.__alloyId3.on("open", onOpen) : __defers["$.__views.__alloyId3!open!onOpen"] = !0;
    $.__views.__alloyId4 = A$(Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Debug Switch , set this to on to see debug alerts .",
        id: "__alloyId4"
    }), "Label", $.__views.__alloyId3);
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.DebugSwitch = A$(Ti.UI.createSwitch({
        id: "DebugSwitch",
        value: "true",
        title: "Debug",
        top: "240"
    }), "Switch", $.__views.__alloyId3);
    $.__views.__alloyId3.add($.__views.DebugSwitch);
    onChange ? $.__views.DebugSwitch.on("change", onChange) : __defers["$.__views.DebugSwitch!change!onChange"] = !0;
    $.__views.Tab1 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId3,
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "Tab1"
    }), "Tab", null);
    $.__views.index.addTab($.__views.Tab1);
    $.__views.__alloyId5 = Alloy.createController("MusicMain", {
        id: "__alloyId5"
    });
    $.__views.Tab2 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId5.getViewEx({
            recurse: !0
        }),
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "Tab2"
    }), "Tab", null);
    $.__views.index.addTab($.__views.Tab2);
    $.__views.__alloyId6 = Alloy.createController("About", {
        id: "__alloyId6"
    });
    $.__views.Tab3 = A$(Ti.UI.createTab({
        window: $.__views.__alloyId6.getViewEx({
            recurse: !0
        }),
        title: "About",
        icon: "KS_nav_views.png",
        id: "Tab3"
    }), "Tab", null);
    $.__views.index.addTab($.__views.Tab3);
    $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId3!open!onOpen"] && $.__views.__alloyId3.on("open", onOpen);
    __defers["$.__views.DebugSwitch!change!onChange"] && $.__views.DebugSwitch.on("change", onChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;