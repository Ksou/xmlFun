var RanOnce = false ; // doing this so we don't run Start events once on load and again when switching to this tab . 

function Awake(){
// whatever I need to do on load BEFORE START, will run	BEFORE start , runs on open when needed 
	

}

function Start(){
//	done after awake

if(RanOnce)
{
	//alert('Welcome to main!')
}
RanOnce = true ; 
}

function GenTable(){
	
	Alloy.Globals.SearchTerm  = $.Search.value ; 

 	
 	alert('Look For : ' + $.Search.value) ;
 	//NewTable.open();
 /// 
 // going to assume theirs a better way to do this ... 
 /*	var allChildren  = 	$.MW.getChildren();
 	for( var i = 0 ; i < allChildren.length ; i++ )
 	{
 	
 	allChildren[i].visible = false ;
 	// 	
 	}
 */
 	var NewTable = Alloy.createController('MusicTable') ; 
 	//var Tab2 = Titanium.UI.getCurrentTab();
 	// Titanium.UI.currentTabGroup.getActiveTab();//Titanium.UI.TabGroup.getActiveTab() ; 
 	// Alloy.Globals.Tab2 ; 
 	// again check to make sure we have this right !
 	 //tabGroup.activeTab
 	// Ti.Ui.T
 	alert(Alloy.Globals.Tab2.title) ; 
 	alert(Alloy.Globals.Tab2);
	
 	NewTable.openMainWindow(Alloy.Globals.Tab2);

	
}
/*
function RestoreSearch(){
	
	 	var allChildren  = 	$.MW.getChildren();
 	for( var i = 0 ; i < allChildren.length ; i++ )
 	{
 	
 	allChildren[i].visible = true ;
 	// 	
 	}
 	
 	if($.Table){
 	$.MW.remove($.Table);
 	}
 	// get rid of the table when we're done 
	
	
}
*/

