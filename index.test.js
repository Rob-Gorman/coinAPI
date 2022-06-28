const index = require('./index')
const axios = require('axios')

jest.mock('axios');
const MOCK_VAL = { data: { rate: 56.6 } }

it("returns valid converted value", async () => {
  axios.get.mockResolvedValue(MOCK_VAL)
  // index.getExchangeRate.mockResolvedValue(MOCK_VAL
  const res = await index.calculateTotalValue(BTC, 1)
  expect(res).toEqual(56.6);
})