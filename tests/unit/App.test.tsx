import {render, screen} from '@testing-library/react'

import App from 'app'

test('renders App', () => {
  render(<App />)

  const linkElement = screen.getByText(/evgeniy azarov/i)

  expect(linkElement).toBeInTheDocument()
})
