const apiKey = '66fd84f5acd77514917a6dcfc67d4862'
const apiSecret = '$2a$12$WiD6c12b1TwxTw.5RVXQjOVXkPWf1K0p85TYSq4d5Nze5ZPfI9/Ve'
const baseUrl = 'https://staging-api.bitopro.com/v3'

const url = '/orders/bito_twd'
const nonce = Date.now()
const completeURL = baseUrl + url

const body = { 
    action: 'SELL',  
    amount: '600',
    price: '20',
    timestamp: nonce,
    type: 'LIMIT'
 }
 
module.exports={apiKey,apiSecret,completeURL,body};