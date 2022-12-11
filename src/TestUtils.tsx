import { BrowserRouter } from 'react-router-dom'

// This will not be a problem when more utils are added
// eslint-disable-next-line import/prefer-default-export
export const renderWithRouter = (
    componentToTest: React.ReactNode,
    { route = '/' } = {}
) => {
    window.history.pushState({}, 'Test page', route)
    return <BrowserRouter>{componentToTest}</BrowserRouter>
}
