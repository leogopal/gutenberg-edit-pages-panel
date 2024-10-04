// src/index.js

import { __ } from '@wordpress/i18n';
import { Fragment, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import PageListPanel from './components/PageListPanel';
import Notifications from './components/Notifications';
import editPagesIcon from './components/editPagesIcon';
import useDebounce from './hooks/useDebounce'; // Import the debounce hook
import { store as coreDataStore } from '@wordpress/core-data';
import { Flex, FlexItem, FlexBlock, TextHighlight } from '@wordpress/components';
import SearchBar from './components/SearchBar';


const PluginSidebar = wp.editor.PluginSidebar;
const PluginSidebarMoreMenuItem = wp.editor.PluginSidebarMoreMenuItem;
const PluginDocumentSettingPanel = wp.editor.PluginDocumentSettingPanel;

// Icon from Dashicons
const icon = 'edit-page';

/**
 * PagesSearchControl Component
 * Handles the sidebar rendering for searching and listing pages in Gutenberg editor.
 */
const PagesSearchControl = () => {

	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 300);

	// Fetch pages data using useSelect hook with the debounced search term
	const { pages, hasResolved, currentPage } = useSelect(
		(select) => {

			const query = {};


			if (debouncedSearchTerm) {
				query.search = debouncedSearchTerm;
			}

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
