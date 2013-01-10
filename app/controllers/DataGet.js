/**
 * @author Keith Wilson
 */
function TableData (trackL,Table,callback){
if(Alloy.Globals.Debug){	
	alert('start table data');
}
// here we populate the table with data 
var url =	'http://api.jamendo.com/get2/name+id+url+artist/track/json/?searchquery='+
trackL+'=searchweight_desc';	

var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
		if(Alloy.Globals.Debug){
		alert(this.responseText);
    }
        Ti.API.debug(this.responseText);
        //alert('success');
    	
    	var data = eval('('+ this.responseText +')');
		// Jamendo doesn't have a title property  so we have to add it 
		data.prop = 'title';
		data.prop = 'SongLink'; // going to add that here 
	for(var i = 0 ; i < data.length ; i++){
	//	var tempString =  data[e.index].id;
		data[i].title = data[i].name ;
		//data.SongLink = 'http://storage-new.newjamendo.com/download/track/'+data[e.index].id+'/mp32'; 
		// this is causing a problem , going to pass data to a global var
	}
	
	Table.data = data ; 
	Alloy.Globals.GotData = data;
	// might not to have to  save data in an Global , we'll see 
	callback.call(data);	
    },
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('error');
    },
    timeout:5000
});

xhr.open("GET", url);
xhr.send();
}


function Test(){
	/// this was just to test how controllor exporting works , vs how module.exports works 
	// anyway, it won't do anything when NOT in Debug mode
	if(Alloy.Globals.Debug){
	alert('testWork') ;
	}
}
exports.Test = Test ;
exports.TableData = TableData ; 
//exports.DataGet = Test ; 