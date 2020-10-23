const { google } = require('googleapis');
const credentials = require('./client_secret.json');
const mongoose = require("mongoose")
const buyRequest = require("../models/buyRequest") 
const sellRequest = require("../models/sellRequest") 

exports.triggerReload = (req, res, next) => {
   
        const client = new google.auth.JWT(
            credentials.client_email,
            null,
            credentials.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']

        );

        client.authorize(function(err,tokens){
            if (err) {
                console.log(err)
                return; // No need to go ahead after an error is encountered
            } else {
                console.log('Connected')
                buyRequestHandler(client)
                // sellRequestHandler(client)
            }
        
        })

        async function buyRequestHandler(cl){
            const googleApiSetup = google.sheets({
                    version:'v4',
                    auth:cl
                }, (err, res) => {
                    if (err) return console.log('The API returned an error: ' + err)
                });

            const opt ={
                spreadsheetId : '1ZEnLpCdFASGGcYJZEPRNxsTpXQNzGPhF0kiqIT90DkM',
                range : 'Max-IPHONES!A3:E306'
            };
            
            let data = await googleApiSetup.spreadsheets.values.get(opt);
        
            if (data.data.values.length > 0) {
                

            let request = data.data.values;
                const arr = request;

            buyRequest.deleteMany({},(err, results) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                    else {
                        console.log("Buy Request Table Purged");
                        arr.forEach(element => { 
                            if (  element[4] && element[4].includes("$")) {
                                const price = element[4].substring( element[4].indexOf('$')+1) // Remove $(dollar sign) to allow for integer data type
                             
                                    var data = {
                                        "name": element[0],
                                        "storage": element[2],
                                        "condition": element[3],
                                        "price": price, 
                                        "status": element[1],
                                    }
                        
                                    const uploadData = new buyRequest(data)
                                    uploadData.save()
                            } else{
                                var data = {
                                    "name": element[0],
                                    "storage": element[2],
                                    "condition": element[3],
                                    "price":element[4], 
                                    "status": element[1],
                                }
                    
                                const uploadData = new buyRequest(data)
                                uploadData.save()
                                //   console.log(uploadData); 
                            }
                        });
                        console.log("Buy Request Table Updated");
                        sellRequestHandler(client)
                    }
                });
                
            } else {
                console.log('No data found.');
            }

        return
        }

        async function sellRequestHandler(cl){
            const googleApiSetup = google.sheets({
                    version:'v4',
                    auth:cl
                }, (err, res) => {
                    if (err) return console.log('The API returned an error: ' + err)
                });

            const opt ={
                spreadsheetId : '1ZEnLpCdFASGGcYJZEPRNxsTpXQNzGPhF0kiqIT90DkM',
                range : 'Max-IPHONES!H3:L306'
            };
            
            let data = await googleApiSetup.spreadsheets.values.get(opt);
        
            if (data.data.values.length > 0) {
                

            let request = data.data.values;
                const arr = request;

               await sellRequest.deleteMany({},(err, results) => {
                    if (err) {
                        console.log(err);
                        return
                    }
                    else {
                        console.log("Sell Request Table Purged");
                        arr.forEach(element => { 
                            if (  element[4] && element[4].includes("$")) {
                                const price = element[4].substring( element[4].indexOf('$')+1) // Remove $(dollar sign) to allow for integer data type
                                    var data = {
                                        "name": element[0],
                                        "storage": element[2],
                                        "condition": element[3],
                                        "price": price, 
                                        "status": element[1],
                                    }
                        
                                    const uploadData = new buyRequest(data)
                                    uploadData.save()
                            } else{
                                var data = {
                                    "name": element[0],
                                    "storage": element[2],
                                    "condition": element[3],
                                    "price":element[4], 
                                    "status": element[1],
                                }
                    
                                const uploadData = new buyRequest(data)
                                uploadData.save()
                                //   console.log(uploadData); 
                            }
                        });
                        console.log("Sell Request Table Updated");
                        return
                    }
                });
                
            } else {
                console.log('No data found.');
            }

            return
        }
        res.send({
			"code":200,
			"status":"success",
			"message":"Database Updated"
		});
        next()
};
  