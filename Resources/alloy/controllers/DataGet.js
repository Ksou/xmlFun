function Controller() {
    function TableData(trackL, callback) {
        debugger;
        Alloy.Globals.Debug && alert("start table data");
        var url = "http://api.jamendo.com/get2/name+id+url+artist/track/json/?searchquery=" + trackL + "=searchweight_desc", xhr = Ti.Network.createHTTPClient({
            onload: function(e) {
                Alloy.Globals.Debug && alert(this.responseText);
                Ti.API.debug(this.responseText);
                var data = eval("(" + this.responseText + ")");
                data.prop = "title";
                data.prop = "SongLink";
                for (var i = 0; i < data.length; i++) data[i].title = data[i].name;
                debugger;
                callback && callback(data);
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error");
            },
            timeout: 5000
        });
        xhr.open("GET", url);
        xhr.send();
    }
    function Test() {
        Alloy.Globals.Debug && alert("testWork");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.Test = Test;
    exports.TableData = TableData;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;