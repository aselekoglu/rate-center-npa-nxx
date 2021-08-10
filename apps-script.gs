
// Base URLs to fetch from

var rcURL = 'http://www.localcallingguide.com/xmlprefix.php?npa=';
var nxxURL = '&nxx=';
var isLocalURL = 'http://www.localcallingguide.com/xmlrcdist.php?npa1=';

function rateCenter(npa, nxx) { // function to get rate center information from NPA and NXX
  
  var URL = rcURL+npa+nxxURL+nxx;
  var response = UrlFetchApp.fetch(URL);
  var data = response.getContentText();
  var document = XmlService.parse(data);
  var root = document.getRootElement()
  var entries = root.getChildren('prefixdata');
  
  for (var i = 0; i<entries.length; i++) {
    var rateCentre = entries[i].getChild('rc').getText();
    var region = entries[i].getChild('region').getText();
  }
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var res = rateCentre + ", " + region;
      
 return res;
  
}

function isLocal(npa1,nxx1,npa2,nxx2) { // function to check if two NPA-NXX pairs support local calling
  
  var URL = isLocalURL+npa1+"&nxx1="+nxx1+"&npa2="+npa2+"&nxx2="+nxx2;
  var response = UrlFetchApp.fetch(URL);
  var data = response.getContentText();
  var document = XmlService.parse(data);
  var root = document.getRootElement()
  var entries = root.getChildren('rcdist');
  
  for (var i = 0; i<entries.length; i++) {
    var islocal = entries[i].getChild('islocal').getText();
  }
  
  var res = islocal;

  return res;

}
