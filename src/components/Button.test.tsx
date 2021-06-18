import { render, screen } from '@testing-library/react'
import { Button } from './Button'

it('renders a button', () => {
  render(<Button />)
  const foundButton = screen.getByRole('button', { name: /Hi, it's Kecleon!/g })
  expect(foundButton).toBeInTheDocument()
})