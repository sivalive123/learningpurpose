var CLIENT_ID = "1000.R4G06V6KLW66QAQIG6GE4AUYEAYDIZ";
var SCOPES = "Solution.settings.ALL,Solution.modules.ALL,Solution.users.ALL";
var ACCOUNTS_URL = "https://accounts.zoho.com"

function init()
{
    var configuration = {};
    configuration.client_id = CLIENT_ID;
    configuration.scopes = SCOPES;
    configuration.accounts_url = ACCOUNTS_URL;
    ZCRM.API.SDK.initialize(configuration);
}

function submitData()
{
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var company = document.getElementById("company").value;

    
    var dataObj = {'First_Name': firstName,'Last_Name': lastName, 'Email': email, 'Company': company};
    var input = {'module':'Leads', 'body':{'data':[dataObj]}};
        headers = {'Content-Type': 'application/json'};
       ZCRM.API.RECORDS.post(input).then(function(resp){
                var jsonData = JSON.parse(resp);
           window.location.replace(window.location.origin + "/view.html");
					//location.reload();
        });
}

function listView()
{
    document.getElementById("listview").style.display='block';
    var input = {'module' : 'Noticeboards'};

    ZCRM.API.RECORDS.get(input).then(function(resp){
            var data = JSON.parse(resp).data;
    var html = "<table><tr><th>Last Name</th><th>Company</th><th>Email</th><th>Lead Source</th><th></th></tr>"
            for(var i=0; i<data.length; i++){
                    html += "<tr data-id="+data[i].id+"><td>"+(data[i].Last_Name)+"</td><td>"+data[i].Company+"</td><td>"+(data[i].Email==null?"":data[i].Email)+"</td><td>"+(data[i].Lead_Source==null?"":data[i].Lead_Source)+"</td><td><button onclick='deleteR(\""+data[i].id+"\")'>Delete</button></td><td></tr>";
            }
            html += "</table>";
            document.getElementById('listview').innerHTML=html;
        });
}


function edit(id)
{
    alert("This will update Last Name with 1")

    var input = {'module':'Leads', 'body':{'data':[{"id":id,"Last_Name":$("tr[data-id='"+id+"'] td")[1].innerHTML+"1"}]}};
        headers = {'Content-Type': 'application/json'};
           ZCRM.API.RECORDS.put(input).then(function(resp){
                var jsonData = JSON.parse(resp);
            location.reload();
        });
}

function deleteR(id)
{
    var input = {'module':'Leads', 'id':id};
           ZCRM.API.RECORDS.delete(input).then(function(resp){
                    var jsonData = JSON.parse(resp);
            location.reload();
        });
}




function getData() {
    console.log("test")

    var input = {'module' : 'Noticeboards'};

    ZCRM.API.RECORDS.get(input).then(function(resp){
            var data = JSON.parse(resp).data;
            console.log(data);
        });

}

