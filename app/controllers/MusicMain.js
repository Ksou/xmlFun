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
// going to try to add an XML controller , since thats the right way to do this , failing that we 
// fall back to good ole Window.add 	

//var ThisWin 
	var NewTable = Alloy.createController('MusicTable').getView(); 
 	alert('From Music Main' + $.Search.value) ;
 	//NewTable.open();
 /// 
 // going to assume theirs a better way to do this ... 
 	var allChildren  = 	$.MW.getChildren();
 	for( var i = 0 ; i < allChildren.length ; i++ )
 	{
 	
 	allChildren[i].visible = false ;
 	// 	
 	}
 	
 	$.MW.add(NewTable) ; 
 	Alloy.Globals.TempWin = $.MW ;
 	// I'm going to fix this , I just need to run a check 
 	//NewTable.openMainWindow($.MW);
 //$.MW.add( NewTable) ; 
	// lets see
	
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

