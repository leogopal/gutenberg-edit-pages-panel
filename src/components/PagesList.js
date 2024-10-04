import { decodeEntities } from '@wordpress/html-entities';
import { Button, ButtonGroup, Spinner } from '@wordpress/components';
import { store as coreDataStore } from '@wordpress/core-data';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import DeletePageButton from './DeletePageButton';

/**
 * PageEditButton component renders a button to edit a page.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {number} props.postID - The ID of the post to edit.
 * @example
 * return (
 *   <PageEditButton postID={1} />
 * )
 */
const PageEditButton = ( { postID } ) => (
	<Button
		variant="primary"
		href={ `/wp-admin/post.php?post=${ postID }&action=edit` }
		size="small"
		tooltip={ __( 'Edit Page', 'hostinger-easy-onboarding' ) }
		showTooltip={ true }
		label={ __( 'Edit Page', 'hostinger-easy-onboarding' ) }
		icon="edit"
		iconSize={ 12 }
		className="edit-page-button"
	>
		{ __( 'Edit', 'hostinger-easy-onboarding' ) }
	</Button>
);

/**
 * PagesList component renders a list of pages in a table format.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.hasResolved - Indicates if the pages data has been resolved.
 * @param {Array} props.pages - Array of page objects to display.
 * @example
 * const pages = [
 *   { id: 1, title: { rendered: 'Page 1' } },
 *   { id: 2, title: { rendered: 'Page 2' } }
 * ];
 * return (
 *   <PagesList hasResolved={true} pages={pages} />
 * )
 */
export default function PagesList( {
	hasResolved,
	pages,
	currentPage = null,
} ) {
	const [ error, setError ] = useState( null );

	useEffect( () => {
		if ( error ) {
			console.error( error );
		}
	}, [ error ] );

	if ( ! hasResolved ) {
		return <Spinner />;
	}
	if ( ! pages?.length ) {
		return <div>{ __( 'No results', 'hostinger-easy-onboarding' ) }</div>;
	}

	return (
		<table className="wp-list-table widefat fixed striped table-view-list">
			<thead>
				<tr>
					<th className="manage-column column-primary">
						{ __( 'Title', 'hostinger-easy-onboarding' ) }
					</th>
					<th className="manage-column" style={ { width: 120 } }>
						{ __( 'Actions', 'hostinger-easy-onboarding' ) }
					</th>
				</tr>
			</thead>
			<tbody>
				{ pages?.map( ( page ) => (
					<tr key={ page.id }>
						<td>{ decodeEntities( page.title.rendered ) }</td>
						<td>
							{ currentPage !== page.id ? (
								<ButtonGroup>
									<PageEditButton postID={ page.id } />
									<DeletePageButton pageId={ page.id } />
								</ButtonGroup>
							) : (
								__(
									'Current page',
									'hostinger-easy-onboarding'
								)
							) }
						</td>
					</tr>
				) ) }
			</tbody>
		</table>
	);
}
