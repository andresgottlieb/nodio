Nodio
======

A node.js client for accessing the Podio API using the App authentication flow (https://developers.podio.com/authentication/app_auth).

Usage
-----

``` js
var nodio = require('nodio');

//Your podio app and client credentials (obtained in the app's dev section and in https://developers.podio.com/api-key, respectively)
var credentials = {
    app_id: 'YOUR_APP_ID',
    app_token: 'YOUR_APP_TOKEN',
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_TOKEN'
}

//The item you want to push to Podio (fields defined in the respective app)
var item = {
    arbitrary_field_name: 'some text',
    magic_number: 142857,
    something_else: 'I love Celeste'
}

nodio.addNewItem(credentials, item, function(err, item_info){
    if(err){
        //Error
        console.log(err);
    }
    else{
        //Item added successfully, here's the item's relevant information
        var item_id = item_info.item_id;
        var title = item_info.title;

        console.log(item_id+" - "+title);
    }
});


```

Install
-----

```
npm install nodio
```

Methods
-------

``` js
nodio.AddNewItem(credentials, item, callback);
```
Callback receives two arguments: `(err, item_info)`

To do
-----

Lots of stuff, this is only one API operation, please help me! Fork me!

Credits
-------

Written by Andrés Gottlieb (agottlieb@gmail.com).

Copyright
---------

(c) 2012 Andrés Gottlieb. Licensed under the MIT license.