// src/components/PagesList.js
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import {
	Button,
	ButtonGroup,
	Spinner,
	TextHighlight,
} from '@wordpress/components';
import { decodeEntities } from '@wordpress/html-entities';
import DeletePageButton from './DeletePageButton';

const SearchHighlight = ({ searchText, text }) => (
	<TextHighlight text={decodeEntities(text)} highlight={searchText} />
);
const PageEditButton = ({ postID }) => (
	<Button
		variant="primary"
		href={`/wp-admin/post.php?post=${postID}&action=edit`}
		size="small"
		tooltip={__('Edit Page', 'hostinger-easy-onboarding')}
		showTooltip={true}
		label={__('Edit Page', 'hostinger-easy-onboarding')}
		icon="edit"
		iconSize={12}
		className="edit-page-button"
	>
		{__('Edit', 'hostinger-easy-onboarding')}
	</Button>
);

const PagesList = ({ hasResolved, pages, searchText, currentPage }) => {
	if (!hasResolved) {
		return (
			<p>
				<Spinner /> {__('Loading...', 'hostinger-easy-onboarding')}
			</p>
		);
	}

	if (!pages.length) {
		return <p>{__('No pages found.', 'hostinger-easy-onboarding')}</p>;
	}

	return (
		<table className="wp-list-table widefat fixed striped table-view-list">
			<thead>
				<tr>
					<th className="manage-column column-primary">
						{__('Title', 'hostinger-easy-onboarding')}
					</th>
					<th className="manage-column" style={{ width: 120 }}>
						{__('Actions', 'hostinger-easy-onboarding')}
					</th>
				</tr>
			</thead>
			<tbody>
				{pages?.map((page) => (
					<tr key={page.id}>
						<td>{decodeEntities(page.title.rendered)}</td>
						<td>
							{currentPage !== page.id ? (
								<ButtonGroup>
									<PageEditButton postID={page.id} />
									<DeletePageButton pageId={page.id} />
								</ButtonGroup>
							) : (
								__(
									'Current page',
									'hostinger-easy-onboarding'
								)
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

PagesList.propTypes = {
	hasResolved: PropTypes.bool.isRequired,
	pages: PropTypes.array.isRequired,
	currentPage: PropTypes.number,
};

PagesList.defaultProps = {
	pages: [],
	currentPage: null,
};

export default PagesList;
