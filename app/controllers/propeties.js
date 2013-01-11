/**
 * @author Sam S.
 */
function PropSeter(lastSearch){
	// for our alert code 
alert( 'last search was : ' + Ti.App.Properties.getString('name'))
Ti.App.Properties.setstring('name',lastSearch)	
}

exports.PropSet = function(lastSearch){
	PropSeter(lastSearch) ; 
	// when we open we run the Look search function too 
  //_tab.open($.MusicTable);
  //Look();
}
