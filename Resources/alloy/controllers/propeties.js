function Controller() {
    function PropSeter(lastSearch) {
        alert("last search was : " + Ti.App.Properties.getString("name"));
        Ti.App.Properties.setstring("name", lastSearch);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.PropSet = function(lastSearch) {
        PropSeter(lastSearch);
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;