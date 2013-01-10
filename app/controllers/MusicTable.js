/// so important it has to be a comment in the code 
/// http://developer.appcelerator.com/blog/2012/11/gtka-two.html
var MW =  Alloy.Globals.TempWin ; 
function PostLayout(){
// 
	 //	var MW =  Alloy.Globals.TempWin ; 
	Look();
	ButtonSetUp();
}
function ButtonSetUp(){
	
MW.setRightNavButton($.InfoButton);
MW.setLeftNavButton($.BackButton) ; 	
	
}

function NavButton(e){
alert(e.title) ; 
	
	
}
function Look(){
var LocText =	Alloy.Globals.SearchTerm ;
alert(LocText);
// we just need to check that we have the right string 
// do our thing with HTTP Request and JSON 	
	
	
	
}
/*
function RestoreSearch(){
// I'm going to fix this before release , but lets just see
// using AlloyGlobal 
 MW =  Alloy.Globals.TempWin ; 
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
	
}*/
// thanks aaron !
exports.openMainWindow = function(_tab) {
  _tab.open($.MusicTable);
}
