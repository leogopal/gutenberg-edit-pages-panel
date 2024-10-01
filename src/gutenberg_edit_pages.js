import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { Panel, PanelBody, SearchControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {getCurrentPostId, store as coreDataStore} from '@wordpress/core-data';
import editPagesIcon from './components/editPagesIcon';
import { CreatePageButton, Notifications, PagesList } from './components';

const PluginSidebar = wp.editor.PluginSidebar;

/**
 * PagesSearchControl component
 *
 * This component provides a search control for pages within the Gutenberg editor.
 * It uses the `useSelect` hook to fetch pages based on the search term.
 *
 * @returns {JSX.Element} The rendered component
 */
const PagesSearchControl = () => {
	// State to keep track of the search term entered by the user
	const [searchTerm, setSearchTerm] = useState('');

	// Fetch pages using the `useSelect` hook based on the search term
	const { pages, hasResolved, currentPage } = useSelect(
		(select) => {
			// Create a query object for fetching pages, use searchTerm if available
			const query = searchTerm ? { search: searchTerm } : {};
			return {
				pages: select(coreDataStore).getEntityRecords('postType', 'page', query),
				currentPage: wp.data.select('core/editor').getCurrentPostId(),
				hasResolved: select(coreDataStore).hasFinishedResolution('getEntityRecords', ['postType', 'page', query]),
			};
		},
		[searchTerm] // Re-run this effect when searchTerm changes
	);

	return (
		<PluginSidebar
			name="gutenberg_edit_pages"
			icon={editPagesIcon}
			title={__('Edit Pages', 'hostinger-easy-onboarding')}
			className="gutenberg-edit-pages"
		>
			<Panel className="gutenberg-edit-pages-panel" initialOpen>
				<PanelBody title={__('Search Pages', 'hostinger-easy-onboarding')} initialOpen>
					<SearchControl
						__nextHasNoMarginBottom
						label={__('Search pages', 'hostinger-easy-onboarding')}
						placeholder={__('Search pages', 'hostinger-easy-onboarding')}
						onChange={setSearchTerm}
						value={searchTerm}
						className="gutenberg-edit-pages-search"
						help={__('Search for pages by title', 'hostinger-easy-onboarding')}
					/>
					<hr />
					{/* Display the list of pages based on the search term */}
					<PagesList hasResolved={hasResolved} pages={pages} currentPage={currentPage} />
					<hr />
					{/* Button to create a new page */}
					<CreatePageButton />
					{/* Component to display notifications */}
					<Notifications />
				</PanelBody>
			</Panel>
		</PluginSidebar>
	);
};

/**
 * Register the plugin sidebar
 *
 * This function registers a plugin sidebar in the Gutenberg editor with the name 'gutenberg_edit_pages'.
 * The sidebar contains the PagesSearchControl component.
 */
registerPlugin('gutenberg-edit-pages', { render: PagesSearchControl });

/**
 * Function to modify the button with aria-controls="gutenberg_edit_pages:gutenberg_edit_pages"
 *
 * This function selects the button with the specified aria-controls attribute and modifies its inner HTML
 * and class list. If the button does not exist, it logs a message to the console.
 * The function is called when the DOMContentLoaded event is fired.
 * @returns {void}
 */
const addPagesBtn = () => {
	// Select the button with the specified aria-controls attribute
	const editPagesbutton = document.querySelector('button[aria-controls="gutenberg-edit-pages:gutenberg_edit_pages"]');

	// SVG icon to display in the button
	const icon = `
        <svg width="12" height="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.9 14.2c0-.4.2-.8.6-.8h6.1c.4 0 .7.4.7.8s-.3.7-.7.7H7.5c-.4 0-.6-.3-.6-.7z"/>
            <path fill-rule="evenodd" d="M4.3 12.7L13.1 3.8c0 0 0 0 0-.1s0 0 0-.1L12.2 2.8c0 0 0 0-.1 0s0 0-.1 0L6.7 8.3 3.3 11.7c0 0 0 0 0 0s0 0 0 0l-.4 1.4 1.3-.4c0 0 0 0 0 0s0 0 0 0zM5.6 7.2L2.2 10.6c-.1.1-.1.2-.2.3s-.1.1-.1.2-.1.1-.1.2l-.6 2c-.1.7-.2 1-.2 1.2.1.2.3.4.5.4.2.1.5 0 1.1-.2l2.1-.6c.1 0 .2 0 .3-.1s.1 0 .1-.1c.1 0 .2-.1.3-.2l8.7-8.8c.4-.4.6-.6.7-.9.1-.2.1-.4 0-.6-.1-.2-.3-.4-.7-.8L13.3 1.8c-.4-.4-.6-.6-.9-.7-.2-.1-.4-.1-.6 0-.2.1-.4.3-.8.7L5.6 7.2z"/>
        </svg>
    `;

	// If the button is found, modify its content and classes
	if (editPagesbutton) {
		editPagesbutton.innerHTML = icon + ' ' + __('Edit Pages', 'hostinger-easy-onboarding');
		editPagesbutton.classList.replace('is-compact', 'is-default');
		editPagesbutton.classList.add('is-secondary');
	}
};

// Call `addPagesBtn` function with a delay of 500ms
setTimeout(addPagesBtn, 500);
// Add event listeners to execute `addPagesBtn` on DOMContentLoaded and click events
window.addEventListener('DOMContentLoaded', addPagesBtn);
window.addEventListener('click', addPagesBtn);
