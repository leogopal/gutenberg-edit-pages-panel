import { store as noticesStore } from '@wordpress/notices';
import { store as coreDataStore } from '@wordpress/core-data';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { Button, Spinner } from '@wordpress/components';

const DeletePageButton = ( { pageId } ) => {
	const { createSuccessNotice, createErrorNotice } =
		useDispatch( noticesStore );
	// useSelect returns a list of selectors if you pass the store handle
	// instead of a callback:
	const { getLastEntityDeleteError } = useSelect( coreDataStore );
	const handleDelete = async () => {
		// Confirm the deletion with confirm dialog
		const isConfirmed = window.confirm(
			'Are you sure you want to delete this page?'
		);

		if ( ! isConfirmed ) {
			return;
		}

		const success = await deleteEntityRecord( 'postType', 'page', pageId );
		if ( success ) {
			// Tell the user the operation succeeded:
			createSuccessNotice( 'The page was deleted!', {
				type: 'snackbar',
			} );
		} else {
			// We use the selector directly to get the fresh error *after* the deleteEntityRecord
			// have failed.
			const lastError = getLastEntityDeleteError(
				'postType',
				'page',
				pageId
			);
			const message =
				( lastError?.message || 'There was an error.' ) +
				' Please refresh the page and try again.';
			// Tell the user how exactly the operation has failed:
			createErrorNotice( message, {
				type: 'snackbar',
			} );
		}
	};
	const { deleteEntityRecord } = useDispatch( coreDataStore );
	const { isDeleting, error } = useSelect(
		( select ) => ( {
			isDeleting: select( coreDataStore ).isDeletingEntityRecord(
				'postType',
				'page',
				pageId
			),
			error: select( coreDataStore ).getLastEntityDeleteError(
				'postType',
				'page',
				pageId
			),
		} ),
		[ pageId ]
	);
	useEffect( () => {
		if ( error ) {
			// Display the error
		}
	}, [ error ] );
	return (
		<Button
			variant="secondary"
			onClick={ handleDelete }
			disabled={ isDeleting }
			size="small"
			tooltip="Delete page"
			showTooltip={ true }
			label="Delete page"
			icon="trash"
			iconSize={ 12 }
			className="delete-page-button"
		>
			{isDeleting ? (
				<>
					<Spinner/>
				</>
			) :' '}
		</Button>
	);
};

export default DeletePageButton;
