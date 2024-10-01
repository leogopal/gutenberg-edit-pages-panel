import {fireEvent, render, screen} from '@testing-library/react';
import {useSelect} from '@wordpress/data';
import PagesSearchControl from '../gutenberg_edit_pages';

jest.mock('@wordpress/data', () => ({
    useSelect: jest.fn(),
}));

jest.mock('../components/', () => ({
    CreatePageButton: () => <div>CreatePageButton</div>,
    Notifications: () => <div>Notifications</div>,
    PagesList: ({ pages }) => <div>{pages.length ? 'PagesList' : 'No Pages'}</div>,
}));

/**
 * Test suite for the PagesSearchControl component
 */
describe('PagesSearchControl', () => {
    /**
     * Mock implementation of useSelect before each test
     */
    beforeEach(() => {
        useSelect.mockImplementation((selector) => selector(() => ({
            getEntityRecords: jest.fn().mockReturnValue([]),
            hasFinishedResolution: jest.fn().mockReturnValue(true),
        })));
    });

    /**
     * Test if the search control is rendered
     */
    it('renders the search control', () => {
        render(<PagesSearchControl />);
        expect(screen.getByLabelText('Search pages')).toBeInTheDocument();
    });

    /**
     * Test if pages are displayed when a search term is provided
     */
    it('displays pages when search term is provided', () => {
        useSelect.mockImplementation((selector) => selector(() => ({
            getEntityRecords: jest.fn().mockReturnValue([{ id: 1, title: 'Page 1' }]),
            hasFinishedResolution: jest.fn().mockReturnValue(true),
        })));
        render(<PagesSearchControl />);
        fireEvent.change(screen.getByLabelText('Search pages'), { target: { value: 'Page' } });
        expect(screen.getByText('PagesList')).toBeInTheDocument();
    });

    /**
     * Test if no pages are displayed when the search term does not match any pages
     */
    it('displays no pages when search term does not match', () => {
        useSelect.mockImplementation((selector) => selector(() => ({
            getEntityRecords: jest.fn().mockReturnValue([]),
            hasFinishedResolution: jest.fn().mockReturnValue(true),
        })));
        render(<PagesSearchControl />);
        fireEvent.change(screen.getByLabelText('Search pages'), { target: { value: 'Nonexistent' } });
        expect(screen.getByText('No Pages')).toBeInTheDocument();
    });

    /**
     * Test if the create page button and notifications are displayed
     */
    it('displays create page button and notifications', () => {
        render(<PagesSearchControl />);
        expect(screen.getByText('CreatePageButton')).toBeInTheDocument();
        expect(screen.getByText('Notifications')).toBeInTheDocument();
    });
});
