import { render, screen } from '@testing-library/react'
import App from './App'

test('renders site branding', () => {
  render(<App />)
  expect(
    screen.getByRole('link', { name: /Seymour Friends home/i })
  ).toBeInTheDocument()
})
