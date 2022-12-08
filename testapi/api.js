const {apiKey,apiSecret,completeURL,body} = require("./set.js");
const request = require('request')
const crypto = require('crypto')

const payload = Buffer.from(JSON.stringify(body)).toString('base64')
const signature = crypto
   .createHmac('sha384', apiSecret)   
   .update(payload)
   .digest('hex') 

const options = {
   url: completeURL,
   json: true,
   headers: {
      'X-BITOPRO-APIKEY': apiKey,
      'X-BITOPRO-PAYLOAD': payload,    
      'X-BITOPRO-SIGNATURE': signature
   },
   body: body
}
 
module.exports=function testFunction () {
   return new Promise(function(resolve, reject)  {
      request.post(options, function(error, response, body) {
        resolve(response);
      });
    });
}