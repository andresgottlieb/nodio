var rest = require('restler');

//Podio is going to grant us this access token so we can add items
var access_token;

//Add an item to our Podio app
exports.addNewItem = function(credentials, item_fields, callback) {

    //Prepare item field structure
    var item = new Object();
    item.fields = item_fields;

    //We're using the app authentication flow
    credentials.grant_type = "app";

    //OAuth to get our Podio access token
    rest.post('https://podio.com/oauth/token', {
        data: credentials
    }).on('complete', function(data, response) {
            if(data.access_token){
                //We got our access token
                access_token = data.access_token;
                //Let's push the item to Podio
                rest.postJson('https://api.podio.com/item/app/'+credentials.app_id+'/', item , {
                    headers: {'Authorization': 'OAuth2 '+ access_token}
                }).on('complete', function(data2, response2) {
                        //If everything's ok
                        if(response2.statusCode==200 && data2.item_id && data2.title){
                            callback(null, {item_id: data2.item_id, title: data2.title});
                        }
                        else{
                            callback("error: statusCode="+response2.statusCode+", item_id="+data2.item_id+", title="+data2.title,null);
                        }
                    });
            }
            else{
                callback("error: statusCode="+response.statusCode);
            }
        });
}
