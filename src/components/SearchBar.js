// src/components/SearchBar.js
import { SearchControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';

const SearchBar = ( { searchTerm, setSearchTerm, placeholder, helpText } ) => {
	return (
		<SearchControl
			label={ __( 'Search pages', 'hostinger-easy-onboarding' ) }
			placeholder={ __( 'Search pages', 'hostinger-easy-onboarding' ) }
			onChange={ setSearchTerm }
			value={ searchTerm }
			className="gutenberg-edit-pages-search"
			aria-label="Search"
		/>
	);
};

SearchBar.propTypes = {
	searchTerm: PropTypes.string.isRequired,
	setSearchTerm: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
	placeholder: 'Search...',
};

export default SearchBar;
