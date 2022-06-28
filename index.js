const axios = require('axios')

async function calculateTotalValue(symbol, quantity) {
  const exchangeValue = await getExchangeRate(symbol)
  return exchangeValue * quantity
}

const URL = "http://rest-sandbox.coinapi.io"
const APIKEY = "50E754AC-4918-47DE-B982-539DBB3A92D9"

async function getExchangeRate(symbol) {
  let {data} = await axios.get(`${URL}/v1/exchangerate/${symbol}/USD`, {
    headers: {
      "X-CoinAPI-Key": `${APIKEY}`
    }
  })
  return data.rate
}

async function main() {
  [symbol, quantity] = process.argv.slice(2)
  const ret = calculateTotalValue(symbol, quantity)
  return ret
}

main().then(res => console.log(res))

const index = { getExchangeRate, calculateTotalValue }

module.exports = index