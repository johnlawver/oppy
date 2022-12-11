import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { renderWithRouter } from '../TestUtils'

import NotFound from './NotFound'

describe('NotFound', () => {
    it('Renders not found text', () => {
        render(renderWithRouter(<NotFound />))
        expect(screen.getByText(/Not Found/i)).toBeInTheDocument()
    })
})
