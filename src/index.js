// src/index.js

import { __ } from '@wordpress/i18n';
import { Fragment, useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
// import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';

import PageListPanel from './components/PageListPanel';
import Notifications from './components/Notifications';

import useDebounce from './hooks/useDebounce'; // Import the debounce hook
import { store as coreDataStore } from '@wordpress/core-data';
// Removed unused imports from '@wordpress/components'
import { ContentSearch } from '@10up/block-components';
const PluginSidebar = wp.editor.PluginSidebar;
const PluginSidebarMoreMenuItem = wp.editor.PluginSidebarMoreMenuItem;

import { registerPlugin } from '@wordpress/plugins';
import './style.scss';
// Removed unused import 'ContentSearch' from '@10up/block-components'
// Icon from Dashicons
const icon = 'edit-page';

/**
 * Modifies the "Edit Pages" button with new classes and visible text.
 */
// const modifyEditPagesButton = () => {
// 	try {
// 		// Use querySelector to find the button with the specific attributes
// 		const editPagesButton = document.querySelector(
// 			'button[aria-controls="gutenberg-edit-pages-panel:gutenberg-edit-pages-panel"]'
// 		);

// 		if (editPagesButton) {
// 			// Define a handler function to modify the button
// 			const modifyButtonHandler = () => {
// 				// Replace 'is-compact' with 'is-default'
// 				editPagesButton.classList.replace('is-compact', 'is-default');

// 				// Add 'is-secondary' class if it does not exist
// 				if (!editPagesButton.classList.contains('is-secondary')) {
// 					editPagesButton.classList.add(
// 						'is-secondary',
// 						'has-text',
// 						'edit-pages-button'
// 					);
// 				};

// 				const buttonText = 'Edit Pages';
// 				// check if the button has certain textContent
// 				if (editPagesButton.innerText !== buttonText) {
// 					// Set the button label as the visible text
// 					console.log('editPagesButton.innerText', editPagesButton.innerText);
// 					editPagesButton.innerText = buttonText;
// 				}

// 				// Attach the handler to the button's click event
// 				document.addEventListener('click', modifyButtonHandler);

// 				// Call the handler once to handle the initial modification
// 				modifyButtonHandler();

// 			}
// 	} catch (error) {
// 		console.error(
// 			__(
// 				'An error occurred while modifying the button:',
// 				'hostinger-easy-onboarding'
// 			),
// 			error
// 		);
// 	}
// };

/**
 * PagesSearchControl Component
 * Handles the sidebar rendering for searching and listing pages in Gutenberg editor.
 */
const PagesSearchControl = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 300);

	const [isPressed, setIsPressed] = useState(false);

	// Fetch pages data using useSelect hook with the debounced search term
	const { pages, hasResolved, currentPage } = useSelect(
		(select) => {
			const query = {};
			// Removed unused state variables 'isPressed' and 'setIsPressed'
			if (debouncedSearchTerm) {
				query.search = debouncedSearchTerm;
			}

			// query.status = ['publish', 'draft'];

			const selectorArgs = ['postType', 'page', query];
			const records = select(coreDataStore).getEntityRecords(
				...selectorArgs
			);

			return {
				pages: records || [],
				currentPage: wp.data.select('core/editor').getCurrentPostId(),
				hasResolved: select(coreDataStore).hasFinishedResolution(
					'getEntityRecords',
					selectorArgs
				),
			};
		},
		[debouncedSearchTerm]
	);

	//Ensure the button is modified after the component mounts
	useEffect(() => {
		// modifyEditPagesButton();
	}, []); // Empty dependency array ensures this runs only once after the component mounts

	// Handler for the custom toggle button
	// const handleToggleSidebar = () => {
	// 	const isSidebarOpen = select('core/edit-post').is

	// 	// Toggle the sidebar using dispatch
	// 	dispatch('core/edit-post').togglePluginSidebar('gutenberg-edit-pages-panel');

	// 	// Update the button's aria-pressed state
	// 	setIsPressed(!isSidebarOpen);
	// };

	return (
		<Fragment>


			<PluginSidebarMoreMenuItem
				target="gutenberg-edit-pages-panel"
				icon={icon}
			>
				{__('Edit Pages', 'hostinger-easy-onboarding')}
			</PluginSidebarMoreMenuItem>

			<PluginSidebar
				name="gutenberg-edit-pages-panel"
				icon={icon}
				title={__('Edit Pages', 'hostinger-easy-onboarding')}
				className="gutenberg-edit-pages-panel"
			>

				<PageListPanel
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					searchText={searchTerm}
					hasResolved={hasResolved}
					pages={pages}
					currentPage={currentPage}
				/>

				<Notifications />
			</PluginSidebar>
		</Fragment>
	);
};

// Register the plugin with the Gutenberg editor
registerPlugin('gutenberg-edit-pages-panel', { render: PagesSearchControl });

/*
// custom-link-in-toolbar.js
// wrapped into IIFE - to leave global space clean.
(function (window, wp) {

	// just to keep it cleaner - we refer to our link by id for speed of lookup on DOM.
	var link_id = 'gutenberg-edit-pages-panel:gutenberg-edit-pages-panel';

	// prepare our custom link's html.
	var link_html = '<a id="' + link_id + '"aria-pressed="false" aria-controls="gutenberg-edit-pages-panel:gutenberg-edit-pages-panel" aria-expanded="false" aria-disabled="false" class="components-button" href="#" ><span class="dashicon dashicons dashicons-edit-page"></span>Edit Pages</a>';
	var button_html = '<button type="button" id="' + link_id + '" aria-controls="gutenberg-edit-pages-panel:gutenberg-edit-pages-panel" aria-pressed="false" aria-expanded="false" aria-disabled="false" class="components-button is-default has-icon is-secondary has-text edit-pages-button"  aria-label="Edit Pages"><span class="dashicon dashicons dashicons-edit-page"></span>Edit Pages</button>';
	// check if gutenberg's editor root element is present.
	var editorEl = document.getElementById('editor');
	if (!editorEl) { // do nothing if there's no gutenberg root element on page.
		return;
	}

	var unsubscribe = wp.data.subscribe(function () {
		setTimeout(function () {
			if (!document.getElementById(link_id)) {
				var toolbalEl = editorEl.querySelector('.interface-pinned-items');
				if (toolbalEl instanceof HTMLElement) {
					toolbalEl.insertAdjacentHTML('afterbegin', button_html);
					// Add click event listener to the button
					var toggleButton = document.getElementById(link_id);
					toggleButton.addEventListener('click', () => {
						// Toggle aria-pressed
						const isPressed = toggleButton.getAttribute('aria-pressed') === 'true';
						toggleButton.setAttribute('aria-pressed', !isPressed);

						// Toggle aria-expanded
						const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
						toggleButton.setAttribute('aria-expanded', !isExpanded);

						// Optionally, you can change the button text or styling based on the new state
						toggleButton.textContent = !isPressed ? 'Collapse' : 'Expand';
					});
				}
			}
		}, 1)
	});
	// unsubscribe is a function - it's not used right now
	// but in case you'll need to stop this link from being reappeared at any point you can just call unsubscribe();

})(window, wp)
 */
