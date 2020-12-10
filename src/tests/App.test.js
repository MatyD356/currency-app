import React from 'react'
import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import App from '../components/App'


it.skip('renders App wihout crash', () => {
  const container = render(<App />)
  const app = container.getByLabelText('App')
  expect(app).toBeInTheDocument()
})


