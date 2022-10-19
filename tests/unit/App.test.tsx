import {render, screen} from '@testing-library/react'

import App from 'App'

test('renders `hello app`', () => {
  render(<App />)

  const linkElement = screen.getByText(/hello app/i)

  expect(linkElement).toBeInTheDocument()
})
