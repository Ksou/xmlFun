// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.SearchTerm = 'none' ;
// don't need Temp Win anymore , and will put in fix for Tab2( don't like too many globals ) soon , will look though source code to make sure its not still referenced any more
Alloy.Globals.TempWin ; 

Alloy.Globals.Tab2 ;
Alloy.Globals.GotData ;
Alloy.Globals.Debug ;
Alloy.Globals.SongActive ; 
// for now I want to see every alert message  
// this is so we can access our JSON data latter, 
// so we can access this from anywhere 