function GenTable() {
	//var PropSeter = Alloy.createController('properties');
	//var tempString = $.Search.value ;
	//PropSeter.PropSet(tempString);
	Alloy.Globals.SearchTerm = $.Search.value;

	if (Alloy.Globals.Debug) {
		alert('Look For : ' + $.Search.value);
	}
	var NewTable = Alloy.createController('MusicTable');
	if (Alloy.Globals.Debug) {
		alert(Alloy.Globals.Tab2.title);
		alert(Alloy.Globals.Tab2);
	}
	// trying to get away from globals
	//var GetTab = Titanium.UI.currentTab ;
	//Get Current tab does not work , falling back to reliable method
	NewTable.openMainWindow(Alloy.Globals.Tab2);
	//NewTable.openMainWindow(GetTab);

}
