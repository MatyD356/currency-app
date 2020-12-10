import React from 'react'
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import Exchange from '../components/Exchange'
import fetchMock from 'fetch-mock'

const currencies = [{
  currency: "dolar amerykański",
  code: "USD",
  mid: 3.6574
}]
fetchMock.mock('http://api.nbp.pl/api/exchangerates/tables/a/', {
  body: currencies,
  status: 200
})
afterEach(() => {
  fetchMock.restore();
})

it('renders Exchange wihout crash', () => {
  const container = render(<Exchange />)
  const exchange = container.getByLabelText('Exchange')
  expect(exchange).toBeInTheDocument()
})

it('calls nbp api succesfully', () => {

})
