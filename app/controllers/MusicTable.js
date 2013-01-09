/// so important it has to be a comment in the code 
/// http://developer.appcelerator.com/blog/2012/11/gtka-two.html
function Awake(){
// call this on app start 	
	Look();
}

function Look(){
var LocText =	Alloy.Globals.SearchTerm ;
alert(LocText);
// we just need to check that we have the right string 
// do our thing with HTTP Request and JSON 	
	
	
	
}

function RestoreSearch(){
// I'm going to fix this before release , but lets just see
// using AlloyGlobal 
var MW =  Alloy.Globals.TempWin ; 
	//var MW = $.Table.getView();
	// the right way is going to be to Open one window, then close it . 
// this works but its not what we're going to use ...'	
	 	var allChildren  = 	MW.getChildren();
 	for( var i = 0 ; i < allChildren.length ; i++ )
 	{
 	
 	allChildren[i].visible = true ;
 	// 	
 	}
 	
 	if($.Table){
 	MW.remove($.Table);
 	}
 	// get rid of the table when we're done 
	// free up the Global 
	Alloy.Globals.TempWin = null ; 
	
}
