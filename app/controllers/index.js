$.index.open();
// Going to keep it simply , onOpen calls onOpen
function onOpen() {
	// any prep work needed
	//.openMainWindow($.tab_one);
	Alloy.Globals.Tab2 = $.Tab2;
	// replaced with get active tab or get current tab latter

	Alloy.Globals.Debug = true;
	// I'm going to add a switch here to turn debug on and off '
	if (Alloy.Globals.Debug) {
		Alloy.Globals.Tab2 = $.Tab2;
		//	alert(Alloy.Globals.Tab2.title);
	}
	// 	var NewTable = Alloy.createController('MusicMain') ;

	//NewTable.openMainWindow($.Tab2);

	// this just verifies that we have the correct tab
}

function onChange() {

	Alloy.Globals.Debug = $.DebugSwitch.value;

}

function Start() {
	// happens after we actually start up, after awake

}
