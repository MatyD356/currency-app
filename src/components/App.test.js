import React from 'react'
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import App from './App'

it('renders App wihout crash', () => {
  const container = render(<App />)
  const app = container.getByLabelText('App')
  expect(app).toBeInTheDocument()
})
