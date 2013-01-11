function Controller() {
    function Look() {
        var LocText = Alloy.Globals.SearchTerm;
        Alloy.Globals.Debug && alert(LocText);
        var LocTable = $.Table, DataGet = Alloy.createController("DataGet");
        DataGet.Test();
        DataGet.TableData(LocText, AddListener);
    }
    function AddListener(GotData) {
        Alloy.Globals.GotData = GotData;
        $.Table.setData(GotData);
        if (Alloy.Globals.Debug) {
            alert("did we callback");
            var stringTest = GotData[1].id;
            alert(stringTest);
        }
        $.Table.addEventListener("click", function(e) {
            alert(GotData[e.index].name + "PlayBack will end when this window closes ");
            var ID = GotData[e.index].id;
            (Ti.Platform.osname == "android" || Ti.Platform.osname == "iphone" || Ti.Platform.osname == "ipad") && SongPlay(ID);
        });
    }
    function SongPlay(id) {
        Alloy.Globals.SongActive && Alloy.Globals.SongActive.stop();
        var Sounder = "http://storage-new.newjamendo.com/download/track/" + id + "/mp32";
        Alloy.Globals.SongActive = Ti.Media.createAudioPlayer({
            url: Sounder,
            allowBackground: !0
        });
        Alloy.Globals.SongActive.play();
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
        backgroundColor: "black",
        seperatorColor: "black",
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