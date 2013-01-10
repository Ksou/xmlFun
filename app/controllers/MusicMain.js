

function GenTable(){
	
	Alloy.Globals.SearchTerm  = $.Search.value ; 

 	if(Alloy.Globals.Debug){
 	alert('Look For : ' + $.Search.value) ;
}
 	var NewTable = Alloy.createController('MusicTable') ; 
	if(Alloy.Globals.Debug){
 	alert(Alloy.Globals.Tab2.title) ; 
 	alert(Alloy.Globals.Tab2);
	}
 	NewTable.openMainWindow(Alloy.Globals.Tab2);

	
}
