// src/components/PageListPanel.js
import {
	Panel,
	PanelBody,
	Text,
	PluginDocumentSettingPanel,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import SearchBar from './SearchBar';
import { CreatePageButton, PagesList } from './index';
import PropTypes from 'prop-types';
import {
	Flex,
	FlexBlock,
	FlexItem,
	TextHighlight,
} from '@wordpress/components';

const PageListPanel = ({
	searchTerm,
	setSearchTerm,
	hasResolved,
	pages,
	currentPage,
}) => {
	return (
		<Flex
			align="center"
			justify="space-between"
			direction="column"
			style={{
				marginBottom: '1rem',
				padding: '1rem',
			}}
		>
			<FlexBlock>
				<p>Search for pages to edit or create a new one.</p>
				<CreatePageButton />
				<hr />
				<FlexItem>
					<SearchBar
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
					<PagesList
						hasResolved={hasResolved}
						pages={pages}
						searchText={setSearchTerm}
						currentPage={currentPage}
					/>
				</FlexItem>
			</FlexBlock>
		</Flex>
	);
};

export default PageListPanel;

