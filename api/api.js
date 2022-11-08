const request = require('request')
const crypto = require('crypto')

const apiKey = '66fd84f5acd77514917a6dcfc67d4862'
const apiSecret = '$2a$12$WiD6c12b1TwxTw.5RVXQjOVXkPWf1K0p85TYSq4d5Nze5ZPfI9/Ve'
const baseUrl = 'https://staging-api.bitopro.com/v3'

const url = '/orders/yfi_twd'
const nonce = Date.now()
const completeURL = baseUrl + url

const body = { 
   action: 'SELL',  
   amount: '1',
   price: '20',
   timestamp: nonce,
   type: 'LIMIT'
}

const payload = Buffer.from(JSON.stringify(body)).toString('base64') //將 body JSON 轉成 base64 就可以囉

//將 api secret 和 payload 加密成 16進制的 SHA-384 的 Hash
const signature = crypto
   .createHmac('sha384', apiSecret)   //(使用sha384生成 Hmac 對象。輸入類型是字符串,給key) , hmac 是一種通過特別計算方式之後產生的訊息鑑別碼，使用密碼雜湊函式，同時結合一個加密金鑰
   .update(payload)
   .digest('hex') //定義編碼維16進至

const options = {
   url: completeURL,
   headers: {
     'X-BITOPRO-APIKEY': apiKey,
     'X-BITOPRO-PAYLOAD': payload,    
     'X-BITOPRO-SIGNATURE': signature
   },
    body: JSON.stringify(body)    
}

// GET
// return request.get(
//    options,
//    function(error, response) {
//      console.log('response:', JSON.stringify( 0, 2))
//    }
// )

// POST
return request.post(
   options,
   function(error, response, body) {
     console.log('response:', JSON.stringify(body, 0, 2))
   }
)

// DELETE
// return request.delete(
//    options,
//    function(error, response, body) {
//      console.log('response:', JSON.stringify(body, 0, 2))
//    }
// )