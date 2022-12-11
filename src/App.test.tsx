import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from './App'
import { renderWithRouter } from './TestUtils'

describe('App', () => {
    it('Renders Hello World on home route', () => {
        render(renderWithRouter(<App />))
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello Mars.')
    })
    it('Renders Not found on bad route', () => {
        render(renderWithRouter(<App />, { route: '/bad-route' }))
        expect(screen.getByText(/Not Found/i)).toBeInTheDocument()
    })
})
