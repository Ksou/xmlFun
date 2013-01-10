$.index.open();
// Going to keep it simply , onOpen calls onOpen 
function onOpen(){
// any prep work needed 	
	//.openMainWindow($.tab_one);
	Alloy.Globals.Tab2 = $.Tab2 ; 
	alert(Alloy.Globals.Tab2.title);
	
	// 	var NewTable = Alloy.createController('MusicMain') ; 

 	//NewTable.openMainWindow($.Tab2);
	
	
		// this just verifies that we have the correct tab 
}


function Start(){
	// happens after we actually start up, after awake 
	
	
}
