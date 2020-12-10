import React from 'react'
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import Select from '../components/Select'


it('renders Select wihout crash', () => {
  const container = render(<Select />)
  const select = container.getByLabelText('Select')
  expect(select).toBeInTheDocument()
})


