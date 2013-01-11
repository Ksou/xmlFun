/// so important it has to be a comment in the code
/// http://developer.appcelerator.com/blog/2012/11/gtka-two.html
//var MW =  Alloy.Globals.TempWin ;
/*
function PostLayout(){
//
//	var MW =  Alloy.Globals.TempWin ;
//Test = require('assets/ExCode/DataGet');
//Test();
Look();
//ButtonSetUp();
}
function ButtonSetUp(){

MW.setRightNavButton($.InfoButton);
MW.setLeftNavButton($.BackButton) ;

}

function NavButton(e){
if(Alloy.Globals.Debug){
//alert(e.title) ;
}

}*/

function Look() {
	var LocText = Alloy.Globals.SearchTerm;
	if (Alloy.Globals.Debug) {
		alert(LocText);
	}
	var LocTable = $.Table;
	// we just need to check that we have the right string
	// do our thing with HTTP Request and JSON
	var DataGet = Alloy.createController('DataGet');
	// does require work in Alloy , I tired that first
	DataGet.Test();
	DataGet.TableData(LocText, AddListener);

}

function AddListener(GotData) {

	Alloy.Globals.GotData = GotData;
	$.Table.setData(GotData);

	//alert(GotData[2].id) ;
	// this doesn't work in a callback ,
	//var stringTest = " " + data[1].name ;
	if (Alloy.Globals.Debug) {
		alert('did we callback');
		//var LocData = Alloy.Globals.GotData ;

		var stringTest = GotData[1].id;

		// Not 100% sure why sending it to a global and grabing it here works , but sending it as a argument to our callback function doesn't
		//GotData[1].id 	//Alloy.Globals.GotData[1].id ;
		alert(stringTest);

	}

	$.Table.addEventListener('click', function(e) {
		alert(GotData[e.index].name + 'PlayBack will end when this window closes ');
		//var RowPlay =
		var ID = GotData[e.index].id;
		if (Ti.Platform.osname == 'android' || Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad') {
			SongPlay(ID);
		}
	});

}//var old ; // this just makes sure we don't play 2 songs at once

function SongPlay(id) {

	if (Alloy.Globals.SongActive) {

		Alloy.Globals.SongActive.stop();
	}
	//var tempString =  data[e.index].id;
	var Sounder = 'http://storage-new.newjamendo.com/download/track/' + id + '/mp32';
	Alloy.Globals.SongActive = Ti.Media.createAudioPlayer({
		url : Sounder,
		allowBackground : true
	});
	Alloy.Globals.SongActive.play();

}

// have to export this first, from Arron's SimpleAlloy App example
exports.openMainWindow = function(_tab) {
	// when we open we run the Look search function too
	_tab.open($.MusicTable);
	Look();
}
