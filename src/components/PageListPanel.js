// src/components/PageListPanel.js
import { Panel, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import SearchBar from './SearchBar';
import { CreatePageButton, PagesList } from './index';

const PageListPanel = ({ searchTerm, setSearchTerm, hasResolved, pages, currentPage }) => {
	return (
		<Panel className="gutenberg-edit-pages-panel">
			<PanelBody title={__('Search Pages', 'plugin-domain')} initialOpen>
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				<hr />
				<PagesList hasResolved={hasResolved} pages={pages} currentPage={currentPage} />
				<hr />
				<CreatePageButton />
			</PanelBody>
		</Panel>
	);
};

export default PageListPanel;
