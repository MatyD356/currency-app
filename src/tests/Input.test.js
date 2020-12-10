import React from 'react'
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import Input from '../components/Input'


it('renders Input wihout crash', () => {
  const container = render(<Input />)
  const input = container.getByLabelText('Input')
  expect(input).toBeInTheDocument()
})


