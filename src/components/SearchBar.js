// src/components/SearchBar.js
import { SearchControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export default function SearchBar({ searchTerm, setSearchTerm }) {
	return (
		<SearchControl
			label={__('Search pages', 'hostinger-easy-onboarding')}
			placeholder={__('Search pages', 'hostinger-easy-onboarding')}
			onChange={setSearchTerm}
			value={searchTerm}
			className="gutenberg-edit-pages-search"
			aria-label="Search"
		/>
	);
};

