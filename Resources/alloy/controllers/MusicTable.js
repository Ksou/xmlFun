function Controller() {
    function Look() {
        var LocText = Alloy.Globals.SearchTerm;
        Alloy.Globals.Debug && alert(LocText);
        var LocTable = $.Table, DataGet = Alloy.createController("DataGet");
        DataGet.Test();
        DataGet.TableData(LocText, LocTable, AddListener);
    }
    function AddListener(GotData) {
        if (Alloy.Globals.Debug) {
            alert("did we callback");
            var stringTest = Alloy.Globals.GotData[1].id;
            alert(stringTest);
        }
        $.Table.addEventListener("click", function(e) {
            alert(Alloy.Globals.GotData[e.index].name);
        });
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
    $.__views.Table = A$(Ti.UI.createTableView({
        id: "Table"
    }), "TableView", $.__views.MusicTable);
    $.__views.MusicTable.add($.__views.Table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.openMainWindow = function(_tab) {
        _tab.open($.MusicTable);
        Look();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;