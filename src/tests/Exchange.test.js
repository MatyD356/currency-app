import React from 'react'
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import Exchange from '../components/Exchange'

it.todo('exchanges currencies prop')

it('renders Exchange wihout crash', () => {
  const container = render(<Exchange />)
  const exchange = container.getByLabelText('Exchange')
  expect(exchange).toBeInTheDocument()
})


