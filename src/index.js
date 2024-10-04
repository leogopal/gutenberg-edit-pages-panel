// src/gutenberg_edit_pages.js
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import PageListPanel from './components/PageListPanel';
import Notifications from './components/Notifications';
import editPagesIcon from './components/editPagesIcon';

const PluginSidebar = wp.editor.PluginSidebar;

// Debounce Hook
const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const handler = setTimeout(() => setDebouncedValue(value), delay);
		return () => clearTimeout(handler);
	}, [value, delay]);
	return debouncedValue;
};

const PagesSearchControl = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm, 300);

	const { pages, hasResolved, currentPage } = useSelect(
		(select) => {
			const query = debouncedSearchTerm ? { search: debouncedSearchTerm } : {};
			const records = select('core').getEntityRecords('postType', 'page', query);
			return {
				pages: records || [],
				currentPage: wp.data.select('core/editor').getCurrentPostId(),
				hasResolved: select('core').hasFinishedResolution('getEntityRecords', ['postType', 'page', query]),
			};
		},
		[debouncedSearchTerm]
	);

	return (
		<PluginSidebar
			name="gutenberg_edit_pages"
			icon={editPagesIcon}
			title={__('Edit Pages', 'plugin-domain')}
		>
			<PageListPanel
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				hasResolved={hasResolved}
				pages={pages}
				currentPage={currentPage}
			/>
			<Notifications />
		</PluginSidebar>
	);
};

registerPlugin('gutenberg-edit-pages', { render: PagesSearchControl });
