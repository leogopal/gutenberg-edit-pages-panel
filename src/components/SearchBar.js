// src/components/SearchBar.js
import { SearchControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
	return (
		<SearchControl
			label={__('Search pages', 'plugin-domain')}
			placeholder={__('Search pages', 'plugin-domain')}
			onChange={setSearchTerm}
			value={searchTerm}
			className="gutenberg-edit-pages-search"
			help={__('Search for pages by title', 'plugin-domain')}
		/>
	);
};

export default SearchBar;
